import type { PortfolioData } from "@/types/portfolio";

/** Structured portfolio content sourced from data/cv.md */
export const portfolio: PortfolioData = {
  personal: {
    name: "Khalid Sudrajat",
    title: "Frontend Developer",
    location: "Bekasi, Indonesia",
    email: "kholidsudrajat@gmail.com",
    phone: "0838-9877-8247",
    whatsapp: "0877-7933-1077",
  },
  summary:
    "Frontend Developer with 10+ years of experience building responsive, scalable, and user-focused web interfaces. Skilled in modern JavaScript frameworks including Ember.js and React.js, with a strong foundation in HTML5, CSS3, and PHP frameworks. Experienced in system modernization, legacy code maintenance, UI performance optimization, and working closely with cross-functional teams.",
  skills: [
    {
      label: "Languages & Libraries",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Ember.js",
        "jQuery",
      ],
    },
    {
      label: "Frameworks",
      items: ["Laravel", "CodeIgniter", "Croogo"],
    },
    {
      label: "CSS Frameworks",
      items: ["Bootstrap", "Tailwind CSS", "Foundation"],
    },
    {
      label: "Other Tools",
      items: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    },
    {
      label: "Key Abilities",
      items: [
        "Responsive UI",
        "Component architecture",
        "Performance optimization",
        "Cross-browser testing",
        "Legacy system migration",
        "Agile teamwork",
      ],
    },
  ],
  experiences: [
    {
      id: "bawana",
      role: "Frontend UI Developer",
      company: "PT. Bawana Margatama",
      client: "PT Adira Dinamika Multi Finance",
      period: "Jan 2024 – Dec 2024",
      startDate: "2024-01",
      endDate: "2024-12",
      highlights: [
        "Developed new UI features for enterprise-level applications.",
        "Built reusable frontend components supporting scalable development.",
        "Strengthened validations and optimized client-side workflows.",
        "Collaborated with UI/UX teams to deliver user-centered solutions.",
        "Refactored legacy codebases for improved maintainability.",
        "Conducted cross-browser and compatibility testing.",
      ],
      techStack: ["Bootstrap", "Ember.js", "React.js"],
    },
    {
      id: "sejahtera",
      role: "Frontend UI Developer",
      company: "PT. Sejahtera Mitra Solusi",
      client: "PT Adira Dinamika Multi Finance",
      period: "Feb 2019 – Dec 2023",
      startDate: "2019-02",
      endDate: "2023-12",
      highlights: [
        "Built responsive, modular, and reusable frontend components.",
        "Provided long-term maintenance and performance improvements.",
        "Translated UI/UX requirements into pixel-perfect interfaces.",
        "Debugged, optimized, and improved browser consistency.",
      ],
      techStack: ["Bootstrap", "Ember.js", "React.js"],
    },
    {
      id: "cranium",
      role: "Frontend Developer",
      company: "PT. Cranium Royal Aditama",
      period: "Jun 2016 – Feb 2019",
      startDate: "2016-06",
      endDate: "2019-02",
      highlights: [
        "Developed and enhanced user-facing features.",
        "Maintained legacy PHP applications and improved reliability.",
        "Performed UX improvements through validation and layout refinements.",
        "Executed browser compatibility and regression testing.",
      ],
      techStack: ["Bootstrap", "Laravel", "CodeIgniter"],
    },
    {
      id: "pricebook",
      role: "Frontend Developer",
      company: "PT. Pricebook Digital Indonesia",
      period: "Apr 2015 – Aug 2015",
      startDate: "2015-04",
      endDate: "2015-08",
      highlights: [
        "Developed UI improvements and optimized page structure.",
        "Maintained and updated legacy frontend systems.",
        "Improved cross-browser stability and performance.",
      ],
      techStack: ["Bootstrap", "CodeIgniter"],
    },
    {
      id: "etcetera",
      role: "Web Designer & Frontend Developer",
      company: "PT. Etcetera Artechsindo",
      period: "May 2012 – Mar 2015",
      startDate: "2012-05",
      endDate: "2015-03",
      highlights: [
        "Handled full-cycle UI design and frontend development.",
        "Created reusable design systems and responsive layouts.",
        "Maintained and enhanced legacy PHP/Croogo applications.",
        "Collaborated directly with stakeholders for project delivery.",
      ],
      techStack: ["Bootstrap", "Foundation", "Croogo"],
    },
  ],
  projects: [
    {
      id: "ofi",
      name: "Ofi Internet",
      description:
        "Modern web experience built with a performance-first frontend stack.",
      detailedDescription:
        "Modern web experience built with a performance-first frontend stack, delivering a blazing-fast user journey, seamless service coverage checking, and clean layout architecture for high-speed fiber internet providers.",
      websiteUrl: "https://www.ofi.id/",
      techStack: ["Next.js", "Tailwind CSS"],
      featured: true,
      year: "2024",
      role: "Frontend UI Developer",
    },
    {
      id: "momobil",
      name: "Momobil",
      description:
        "Automotive platform UI evolved from Ember.js to a modern React-based architecture.",
      detailedDescription:
        "Automotive platform UI successfully evolved from a legacy Ember.js & Bootstrap stack into a high-performance, modern React/Next.js architecture for a smoother user experience, dynamic car catalog browsing, and intuitive financing simulations.",
      websiteUrl: "https://www.momobil.id/",
      techStack: ["Ember.js", "Bootstrap", "Next.js", "Tailwind CSS"],
      featured: true,
      migration: "Ember.js & Bootstrap → Next.js & Tailwind CSS",
      year: "2023",
      role: "Frontend UI Developer",
    },
    {
      id: "gopayday",
      name: "Gopayday",
      description:
        "Financial product interface with responsive layouts and interactive components.",
      detailedDescription:
        "Financial product interface and interactive online festival platform designed with responsive layouts and vibrant promotional banners to ensure seamless, secure user interactions in large-scale campaigns.",
      websiteUrl: "https://gopayonlinefestival.com/",
      techStack: ["HTML", "CSS", "Bootstrap", "jQuery"],
      featured: false,
      year: "2021",
      role: "Frontend Developer",
    },
    {
      id: "halodoc",
      name: "Halodoc",
      description:
        "Healthcare digital product UI with component-driven Angular interfaces.",
      detailedDescription:
        "Healthcare digital product UI featuring component-driven interfaces built for reliability, medical service clarity, and accessible user experiences in digital health.",
      websiteUrl: "https://www.halodoc.com/",
      techStack: ["Angular", "Bootstrap"],
      featured: false,
      year: "2020",
      role: "Frontend Developer",
    },
    {
      id: "amnaya",
      name: "Amnaya Hotel",
      description:
        "Hospitality booking and content platform powered by Laravel backend integration.",
      detailedDescription:
        "Hospitality booking and content platform optimized for guest engagement and visual elegance, powered by robust Laravel backend integration.",
      websiteUrl: "https://www.amnayahotels.com/",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
      year: "2018",
      role: "Frontend Developer",
    },
    {
      id: "futuready",
      name: "Futuready",
      description:
        "Corporate web platform with structured content and responsive design patterns.",
      detailedDescription:
        "Corporate web platform built with structured content management and responsive design patterns for clear financial and insurance information delivery.",
      websiteUrl: "https://www.futuready.com/",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
      year: "2017",
      role: "Frontend Developer",
    },
    {
      id: "gamorugi",
      name: "Gamorugi",
      description:
        "Brand-focused web presence with custom Laravel-powered CMS workflows.",
      detailedDescription:
        "Brand-focused web presence featuring custom CMS workflows and smooth layouts tailored to elevate brand identity and food promo discovery.",
      websiteUrl: "https://www.gamorugi.com/",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
      year: "2016",
      role: "Frontend Developer",
    },
    {
      id: "suzanna",
      name: "Suzanna Babyshop",
      description:
        "E-commerce storefront with catalog browsing and conversion-focused UI.",
      detailedDescription:
        "E-commerce storefront and wholesale catalog platform optimized for effortless baby product browsing, structured pricing navigation, and a conversion-focused UI.",
      websiteUrl: "https://suzannababyshop.com/",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
      year: "2015",
      role: "Web Designer & Developer",
    },
  ],
  additionalInfo: [
    "Experienced in Agile/Scrum workflows.",
    "Strong focus on clean code, usability, and maintainability.",
    "Comfortable working with remote and distributed teams.",
  ],
};

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
