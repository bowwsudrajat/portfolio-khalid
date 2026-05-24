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
      role: "Frontend UI Developer (Assistant Manager)",
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
      role: "Frontend UI Developer (Assistant Manager)",
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
      role: "Frontend Developer (Technical Leader)",
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
      techStack: ["Next.js", "Tailwind CSS"],
      featured: true,
    },
    {
      id: "momobil",
      name: "Momobil",
      description:
        "Automotive platform UI evolved from Ember.js to a modern React-based architecture.",
      techStack: ["Ember.js", "Bootstrap", "Next.js", "Tailwind CSS"],
      featured: true,
      migration: "Ember.js & Bootstrap → Next.js & Tailwind CSS",
    },
    {
      id: "gopayday",
      name: "Gopayday",
      description:
        "Financial product interface with responsive layouts and interactive components.",
      techStack: ["HTML", "CSS", "Bootstrap", "jQuery"],
      featured: false,
    },
    {
      id: "halodoc",
      name: "Halodoc",
      description:
        "Healthcare digital product UI with component-driven Angular interfaces.",
      techStack: ["Angular", "Bootstrap"],
      featured: false,
    },
    {
      id: "amnaya",
      name: "Amnaya Hotel",
      description:
        "Hospitality booking and content platform powered by Laravel backend integration.",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
    },
    {
      id: "futuready",
      name: "Futuready",
      description:
        "Corporate web platform with structured content and responsive design patterns.",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
    },
    {
      id: "gamorugi",
      name: "Gamorugi",
      description:
        "Brand-focused web presence with custom Laravel-powered CMS workflows.",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
    },
    {
      id: "suzanna",
      name: "Suzanna Babyshop",
      description:
        "E-commerce storefront with catalog browsing and conversion-focused UI.",
      techStack: ["Laravel", "Bootstrap"],
      featured: false,
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
