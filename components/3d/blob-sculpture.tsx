"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Shader ─────────────────────────────────────────────────────────────────

const BlobShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uDistort: { value: 1.0 },
    uNoiseFreq: { value: 1.5 },
    uNoiseAmp: { value: 0.15 },
    uColor: { value: new THREE.Color("#050505") },
    uAccentColor: { value: new THREE.Color("#D9FF00") },
    uMouse: { value: new THREE.Vector2(0, 0) },
  },
  vertexShader: /* glsl */ `
    uniform float uTime;
    uniform float uDistort;
    uniform float uNoiseFreq;
    uniform float uNoiseAmp;
    uniform vec2 uMouse;

    varying vec3 vNormal;
    varying vec3 vViewPosition;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec3 noiseInput = position * uNoiseFreq + vec3(0.0, 0.0, uTime * 0.35);
      noiseInput.xy += uMouse * 0.18;
      float noise = snoise(noiseInput);
      vec3 newPosition = position + normal * noise * uNoiseAmp * uDistort;
      vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    uniform vec3 uColor;
    uniform vec3 uAccentColor;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
      vec3 finalColor = mix(uColor, uAccentColor, fresnel * 0.55);

      vec3 lightDir = normalize(vec3(5.0, 5.0, 5.0));
      vec3 halfDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 64.0);
      finalColor += vec3(0.9) * spec * 0.35;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

// ─── BlobMesh ────────────────────────────────────────────────────────────────

interface BlobMeshProps {
  prefersReducedMotion: boolean;
  isMobile: boolean;
}

function BlobMesh({ prefersReducedMotion, isMobile }: BlobMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  const isVisible = useRef(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleVisibility = () => {
      isVisible.current = !document.hidden;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Reduced geometry on mobile for performance
  const segments = isMobile ? 48 : 64;

  const uniforms = useMemo(
    () => THREE.UniformsUtils.clone(BlobShaderMaterial.uniforms),
    []
  );

  useFrame((state) => {
    // Pause rendering when tab is hidden
    if (!isVisible.current) return;

    const time = state.clock.getElapsedTime();

    // Smooth lerp mouse
    const lerpFactor = isMobile ? 0 : 0.08;
    mouse.current.x += (targetMouse.current.x - mouse.current.x) * lerpFactor;
    mouse.current.y += (targetMouse.current.y - mouse.current.y) * lerpFactor;

    if (materialRef.current) {
      if (!prefersReducedMotion) {
        materialRef.current.uniforms.uTime.value = time;
      }
      if (!isMobile) {
        materialRef.current.uniforms.uMouse.value.set(
          mouse.current.x,
          mouse.current.y
        );
      }
    }

    if (meshRef.current && !prefersReducedMotion) {
      // Very gentle rotation
      meshRef.current.rotation.y = time * 0.04;

      // Subtle mouse follow — desktop only
      if (!isMobile) {
        meshRef.current.position.x = mouse.current.x * 0.25;
        meshRef.current.position.y = mouse.current.y * 0.25;
      }
    }
  });

  return (
    <mesh ref={meshRef} scale={2.0}>
      <sphereGeometry args={[1.0, segments, segments]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={BlobShaderMaterial.vertexShader}
        fragmentShader={BlobShaderMaterial.fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

// ─── BlobSculpture (exported) ────────────────────────────────────────────────

interface BlobState {
  mounted: boolean;
  useFallback: boolean;
  prefersReducedMotion: boolean;
  isMobile: boolean;
}

export function BlobSculpture() {
  const [state, setState] = useState<BlobState>({
    mounted: false,
    useFallback: false,
    prefersReducedMotion: false,
    isMobile: false,
  });

  useEffect(() => {
    // Detect all client-side capabilities in one setState call
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mobile = window.innerWidth < 768;

    let fallback = false;
    try {
      const canvas = document.createElement("canvas");
      const gl =
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl"));
      if (!gl) fallback = true;
    } catch {
      fallback = true;
    }

    setState({
      mounted: true,
      useFallback: fallback,
      prefersReducedMotion: prefersReduced,
      isMobile: mobile,
    });
  }, []);

  const { mounted, useFallback, prefersReducedMotion, isMobile } = state;

  if (!mounted) return null;

  // CSS fallback for no-WebGL environments
  if (useFallback) {
    return (
      <div
        className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[380px] sm:w-[380px]"
        aria-hidden="true"
      >
        <div className="absolute h-full w-full animate-pulse rounded-full bg-[radial-gradient(circle,rgba(217,255,0,0.08),transparent_70%)] blur-2xl" />
        <div className="h-40 w-40 rounded-full border border-primary/15 bg-gradient-to-tr from-card to-background shadow-[0_0_60px_rgba(217,255,0,0.1)]" />
      </div>
    );
  }

  // Mobile: smaller canvas, lower resolution
  const canvasSize = isMobile
    ? "h-[280px] w-[280px]"
    : "h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[580px] lg:w-[580px]";

  return (
    <div className={canvasSize} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]} // Lower DPR on mobile
        gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <BlobMesh
          prefersReducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}
