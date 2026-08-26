# PRD — Khalid Sudrajat Cinematic 3D Portfolio Redesign

## 1. Product Overview

Redesign the existing Khalid Sudrajat portfolio into a premium, cinematic, interactive frontend portfolio inspired by the visual language of modern brutalist/WebGL creative agency websites such as Zylyf.

This is a **redesign of the existing portfolio**, not a new project.

The existing Next.js project should be visually transformed while preserving the existing portfolio content, project data, experience, skills, and contact information wherever possible.

Production URL:

https://portfolio-khalid-seven.vercel.app/

The final result should feel like a **creative digital experience**, while remaining clearly recognizable as a professional Frontend Engineer portfolio.

---

# 2. Main Goal

Create a portfolio that immediately communicates:

1. Senior frontend experience
2. Strong UI implementation skills
3. Modern JavaScript/React/Next.js expertise
4. Ability to work with animation and interactive interfaces
5. Ability to build WebGL / 3D experiences
6. Strong visual and UX sensitivity

The website should feel closer to a **creative technology studio website** than a conventional developer portfolio.

---

# 3. Design Direction

## Visual Inspiration

Use the visual language of Zylyf-style creative websites:

* Brutalist
* Minimal
* Experimental
* Futuristic
* Dark
* High contrast
* Oversized typography
* Generous negative space
* Asymmetric layouts
* WebGL / 3D interactions
* Distortion effects
* Smooth scrolling
* Cinematic transitions
* Interactive cursor
* Strong motion design

IMPORTANT:

Do NOT copy Zylyf's exact layout, assets, graphics, text, animations, or branding.

Use it only as visual inspiration.

The resulting website must have its own visual identity for Khalid Sudrajat.

---

# 4. Color System

Use a dark monochrome palette similar to the visual feeling of Zylyf.

Primary background:

#0A0A0A

Secondary dark:

#111111

Primary text:

#F5F5F0

Secondary text:

#A0A0A0

Muted text:

#666666

Borders:

rgba(245, 245, 240, 0.15)

Accent:

#D9FF00

The accent color should be used sparingly for:

* Active navigation
* Small labels
* Hover states
* Important numbers
* Interactive indicators
* Selected project states

Do NOT turn the entire website neon green.

The overall visual balance should remain approximately:

90% black / white / gray
10% accent.

---

# 5. Typography

Typography should be bold, editorial and futuristic.

Use a combination of:

### Display Font

Use:

* Space Grotesk
* or Sora
* or another modern geometric grotesk

For:

* Hero heading
* Section titles
* Project titles
* Large numbers

### Body Font

Use:

* Inter

For:

* Descriptions
* Navigation
* Metadata
* Experience details

Typography hierarchy should be dramatic.

Example:

KHALID

SUDRAJAT

should occupy a significant portion of the viewport.

Avoid traditional centered portfolio typography everywhere.

Use oversized typography and asymmetric positioning.

---

# 6. Technical Stack

Use the existing Next.js project.

Preferred stack:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Three.js
* React Three Fiber
* @react-three/drei
* GSAP
* Lenis

Do NOT migrate the project to another framework.

Do NOT introduce unnecessary dependencies.

Reuse existing components and project data where practical.

---

# 7. WebGL / 3D Experience

The hero section must contain an interactive 3D/WebGL element.

Preferred concept:

A procedural liquid/metaball/blob object.

Characteristics:

* Dark glossy material
* Smooth deformation
* Subtle reflections
* Slow idle movement
* Reacts to mouse position
* Reacts subtly to scroll velocity
* Smooth animation
* No distracting constant spinning

The object should feel like a **digital material / liquid sculpture**.

It should not look like a generic rotating 3D sphere.

Possible interaction:

Mouse movement:

* Object slightly follows cursor
* Surface deformation increases
* Camera subtly shifts

Scroll:

* Object changes position/scale
* Smooth transition between sections

The 3D object must remain performant.

---

# 8. Performance Requirements

The website must remain usable on normal laptops and mobile devices.

Requirements:

* Avoid excessive polygon counts
* Avoid unnecessary post-processing
* Use requestAnimationFrame efficiently
* Pause/reduce WebGL animation when page is not visible
* Respect prefers-reduced-motion
* Lazy-load heavy sections when possible
* Optimize images
* Avoid blocking initial page rendering

Target:

Desktop should feel smooth at approximately 60 FPS on a modern laptop.

Mobile should prioritize usability over visual complexity.

If WebGL performance becomes poor on mobile, automatically reduce:

* resolution
* shader complexity
* particle count
* post-processing

---

# 9. Page Structure

The website should contain the following sections.

---

## 9.1 Preloader

Create a minimal cinematic preloader.

Example concept:

0 → 100%

or

K / S

The preloader should be extremely short.

Maximum:

1–1.5 seconds.

Do not make users wait unnecessarily.

After loading:

Smooth transition into Hero.

---

# 10. Navigation

Create a minimal fixed navigation.

Left:

KHALID SUDRAJAT

Center/right:

* About
* Work
* Experience
* Contact

Also include a small availability indicator:

AVAILABLE FOR WORK

Use the accent color for the indicator.

Navigation should be transparent/minimal.

On scroll:

* Slight background blur
* Subtle border
* Smooth transition

Mobile:

Use a fullscreen menu with cinematic transition.

---

# 11. Hero Section

Hero is the most important section.

Full viewport height.

Visual composition:

Large typography:

KHALID

SUDRAJAT

Small label:

FRONTEND ENGINEER

Supporting statement:

10+ YEARS OF BUILDING DIGITAL EXPERIENCES

The WebGL liquid object should occupy a major portion of the composition.

Do not put everything in the center.

Use asymmetric composition.

Example:

Top-left:

KHALID

Bottom-left:

FRONTEND ENGINEER

Right:

3D object

Bottom-right:

SCROLL TO EXPLORE ↓

Hero should immediately feel premium and cinematic.

---

# 12. Intro / About

Transition from Hero into About using a cinematic scroll animation.

Large statement:

"I BUILD DIGITAL INTERFACES THAT TURN DESIGN INTO EXPERIENCE."

Use oversized typography.

Some words can animate independently.

Use:

* opacity
* position
* blur
* scale
* clip-path

Avoid excessive animation.

The animation should feel intentional and premium.

---

# 13. Skills

Do not use conventional skill cards.

Instead create an editorial / interactive skills section.

Categories:

### FRONTEND

HTML
CSS
JavaScript
TypeScript
React
Next.js

### UI

Tailwind CSS
MUI
Bootstrap
Figma

### OTHER

Git
REST API
Responsive Design
WebGL / Three.js

Skills should appear as large typography or an interactive list.

Hovering a skill can trigger:

* subtle text distortion
* accent color
* underline
* cursor interaction

---

# 14. Selected Work

This is the primary portfolio section.

Use the existing projects from the current portfolio.

Do not invent fake projects.

Projects should be presented as large immersive experiences instead of small cards.

Each project should include:

* Project name
* Year
* Role
* Technologies
* Short description
* Website link when available
* Visual preview

Preferred interaction:

As the user scrolls:

Project 01

large visual

project information

then transition into:

Project 02

large visual

etc.

Use strong typography.

Example:

01

OFI

DIGITAL EXPERIENCE

2024

The project number should be visually large.

---

# 15. Project List

Preserve the existing portfolio projects.

Expected projects include:

* Ofi Internet
* Momobil
* GoPayDay
* Halodoc
* Amnaya Hotel
* Futuready
* Gamorugi
* Suzanna Babyshop
* Kelola Hub
* Other existing projects already present in the repository

IMPORTANT:

Before deleting or modifying project content, inspect the existing repository and preserve useful information.

Do not replace real project information with placeholder content.

---

# 16. Project Interaction

Project hover should feel cinematic.

Possible interactions:

* Image follows cursor
* Image scales slightly
* Image distortion
* Project title shifts
* Accent indicator appears
* Cursor changes

Avoid excessive effects.

The interaction should remain fast and elegant.

---

# 17. Experience

Transform the existing experience timeline into a brutalist editorial timeline.

Example:

2024

FRONTEND UI DEVELOPER

PT. BAWANA MARGATAMA

Then previous experience.

Use a vertical timeline with:

* Large year
* Company
* Role
* Short description

Hovering a company can subtly highlight the row.

---

# 18. Experience Statement

Add a large typographic statement between Experience and Contact.

Example:

10+

YEARS

BUILDING

FOR THE WEB.

The number "10+" should be visually dominant.

Use the accent color sparingly.

---

# 19. Contact

Contact should feel like the ending of a cinematic experience.

Large heading:

LET'S BUILD
SOMETHING
GOOD.

Include:

* Email
* GitHub
* LinkedIn
* Portfolio/contact details already present in the current project

Add a large CTA.

Example:

START A CONVERSATION →

The CTA should have a strong hover interaction.

---

# 20. Footer

Minimal footer.

Include:

KHALID SUDRAJAT

FRONTEND ENGINEER

© 2026

Social links.

Keep it extremely minimal.

---

# 21. Motion Design

Motion is a major part of this project.

Use GSAP for:

* Scroll animations
* Text reveal
* Image reveal
* Section transitions
* Hero animation
* Project transitions
* Cursor effects

Use Lenis for smooth scrolling.

Animation principles:

* Slow and cinematic
* Smooth easing
* Never excessive
* Motion should communicate hierarchy

Avoid:

* Random bouncing
* Excessive spinning
* Constant movement
* Animation on every element

---

# 22. Cursor

Desktop should have a custom cursor.

Default:

Small circular cursor.

Interactive element:

Cursor expands.

Project hover:

Cursor changes to:

VIEW

or

OPEN

Use subtle mix-blend-mode where appropriate.

Disable custom cursor on touch devices.

---

# 23. Responsive Design

Must work properly on:

Desktop:

1920px
1440px

Tablet:

1024px

Mobile:

768px
375px

Mobile should NOT simply be a scaled-down desktop.

On mobile:

* Reduce WebGL complexity
* Simplify navigation
* Reduce typography scale
* Disable expensive cursor effects
* Keep project interactions usable through touch
* Preserve cinematic transitions

---

# 24. Accessibility

Must include:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible links
* Alt text
* Good text contrast
* prefers-reduced-motion support

If reduced motion is enabled:

* Disable heavy scroll animation
* Disable cursor animation
* Reduce WebGL movement
* Keep content fully accessible

---

# 25. SEO

Preserve and improve existing metadata.

Title:

Khalid Sudrajat — Frontend Engineer

Description should communicate:

* Frontend Engineer
* 10+ years experience
* React
* Next.js
* UI development
* Digital experiences

Add appropriate Open Graph metadata.

---

# 26. Code Architecture

Keep the project maintainable.

Suggested structure:

app/
components/
components/3d/
components/sections/
components/ui/
data/
lib/
styles/

Separate:

* WebGL components
* Animation utilities
* UI components
* Portfolio data

Do not put the entire portfolio into one huge component.

---

# 27. Existing Project Preservation

Before implementation:

1. Inspect the current repository.
2. Identify the existing page structure.
3. Identify project data.
4. Identify experience data.
5. Identify existing assets.
6. Identify existing dependencies.
7. Reuse useful components where possible.

The goal is:

REDESIGN THE EXPERIENCE

not:

REBUILD THE DATA FROM SCRATCH.

---

# 28. Git Workflow

Work on a dedicated branch:

cinematic-redesign

Do NOT directly destroy the existing production branch.

The existing production portfolio must remain functional until the redesign is complete.

After completion:

cinematic-redesign

↓

Preview deployment

↓

QA

↓

merge into main

↓

Vercel production deployment

---

# 29. Vercel

The existing Vercel deployment should continue to work.

Do not change:

* project configuration
* domain configuration
* environment variables

unless absolutely necessary.

The redesigned branch should automatically generate a Vercel Preview Deployment.

---

# 30. Visual Quality Bar

The final website should feel:

* Premium
* Experimental
* Cinematic
* Modern
* Technical
* Minimal
* Confident

It should NOT feel:

* Like a generic developer template
* Like a Bootstrap website
* Like a SaaS landing page
* Overloaded with gradients
* Overloaded with cards
* Like a gaming website
* Like a direct Zylyf clone

The visual benchmark is:

**creative digital agency + senior frontend engineer + WebGL experience.**

---

# 31. Acceptance Criteria

The project is considered complete when:

* [ ] Existing portfolio content is preserved
* [ ] Existing projects remain available
* [ ] Existing experience remains available
* [ ] New cinematic visual system is implemented
* [ ] Dark brutalist visual direction is consistent
* [ ] WebGL 3D hero is implemented
* [ ] 3D object responds to mouse
* [ ] Smooth scrolling is implemented
* [ ] GSAP animations are implemented
* [ ] Project interactions are implemented
* [ ] Custom cursor works on desktop
* [ ] Mobile layout works at 375px
* [ ] Tablet layout works
* [ ] WebGL performance is acceptable
* [ ] Reduced-motion mode works
* [ ] Navigation works
* [ ] All project links work
* [ ] Contact links work
* [ ] SEO metadata is present
* [ ] No placeholder content remains
* [ ] No broken images
* [ ] No console errors
* [ ] Production build succeeds
* [ ] Vercel Preview Deployment works
* [ ] Final branch is ready to merge into main

---

# 32. Final Design Principle

The website should communicate one idea:

**"This is not just a developer who can code a design. This is a frontend engineer who can turn an interface into an experience."**

Prioritize:

DESIGN
→ MOTION
→ INTERACTION
→ PERFORMANCE
→ CONTENT

in that order, while maintaining professional readability and usability.
