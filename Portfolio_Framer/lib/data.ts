export const siteConfig = {
  name: "Sohini Joarder",
  title: "Software Engineer",
  location: "Bangalore, India",
  email: "sohini.joarder02@gmail.com",
  foundedYear: 2020,
  copyrightYear: 2026,
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const skillGroups = [
  {
    category: "Android",
    skills: ["AOSP system apps", "Java / Kotlin", "IVI platforms", "Android SDK"],
  },
  {
    category: "Python & Data",
    skills: [
      "Flask / FastAPI / Django",
      "Automation & tooling",
      "pandas / scikit-learn",
      "Hugging Face / LangChain",
    ],
  },
  {
    category: "Embedded & Tools",
    skills: [
      "Embedded C / C++",
      "Instrument clusters",
      "PyTest & unittest",
      "Tableau / Power BI",
    ],
  },
];

export const experience = [
  {
    year: "2024 — Now",
    company: "KPIT Technologies",
    role: "Software Engineer — Honda IVI",
    detail:
      "System-level Android apps (Phone, Home launcher) across the AOSP codebase. Ported features across two Android versions, resolved production defects, and built Python regression automation that cut manual test cycles across infotainment variants.",
  },
  {
    year: "2024 — 2025",
    company: "KPIT Technologies",
    role: "HMI Engineer — Denso Cluster",
    detail:
      "Built and validated HMI components for an automotive instrument cluster in Embedded C/C++, and wrote Python tools for log parsing, report generation, and test setup that meaningfully cut regression turnaround.",
  },
  {
    year: "2023",
    company: "Indus Net Technologies",
    role: "Data Analyst Intern",
    detail:
      "Analyzed business datasets in SQL, built Tableau and Power BI dashboards, and presented insights to non-technical stakeholders.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Android Development",
    tags: ["AOSP system apps", "Java / Kotlin", "IVI platforms"],
  },
  {
    title: "Python Engineering",
    tags: ["Automation & tooling", "Flask / FastAPI / Django", "PyTest & unittest"],
  },
  {
    title: "Embedded & HMI",
    tags: ["Embedded C / C++", "Instrument clusters", "Validation tooling"],
  },
  {
    title: "Data & ML",
    tags: ["Hugging Face / LangChain", "pandas / scikit-learn", "Tableau / Power BI"],
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  summary: string;
  category: string;
  stack: string;
  badge?: string;
  gradient: string;
  accent: string;
  variant: "analytics" | "landing" | "portfolio" | "social" | "agency" | "commerce";
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "stock-market-predictor",
    name: "Stock Market Predictor",
    description:
      "Prediction tool combining price history with LLM-based news sentiment.",
    summary:
      "Prediction tool combining OHLC price history with sentiment from financial news via a fine-tuned LLM. Flask REST API with SQLite caching, multi-process batched inference, PyTest coverage, and a React dashboard for backtested results.",
    category: "Machine Learning",
    stack: "Python · Flask · Hugging Face · React",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
    accent: "#3b82f6",
    variant: "analytics",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "signify-gloves",
    name: "SIGN-ify Gloves",
    description:
      "Wearable gloves that translate hand gestures into text and speech.",
    summary:
      "Wearable gloves with flex sensors that translate hand gestures into text and synthesized speech through an embedded Python pipeline on a microcontroller bridge.",
    category: "Embedded Systems",
    stack: "Embedded Python · Sensors",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    accent: "#8b5cf6",
    variant: "landing",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "autonomous-arm",
    name: "6-DOF Autonomous Arm",
    description: "A six-axis robotic arm for autonomous pick-and-place.",
    summary:
      "Six-degree-of-freedom robotic arm with inverse kinematics for autonomous pick-and-place, plus OpenCV object detection. Reached the national finals of Flipkart Grid 5.0.",
    category: "Robotics",
    stack: "ROS · Python · OpenCV",
    badge: "Flipkart Grid 5.0 National Finalist",
    gradient: "from-orange-400 via-amber-400 to-yellow-300",
    accent: "#f97316",
    variant: "agency",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "life-x-lane",
    name: "Life X Lane",
    description:
      "A smart traffic system that clears the way for emergency vehicles.",
    summary:
      "Smart traffic prototype that detects emergency vehicles with sensor data and YOLO-based vision, then preempts signals at intersections to clear their path.",
    category: "Computer Vision",
    stack: "IoT · Computer Vision · YOLO",
    gradient: "from-emerald-500 via-teal-400 to-cyan-300",
    accent: "#22c55e",
    variant: "portfolio",
    githubUrl: "#",
    featured: true,
  },
];

export const recognitions = [
  "National Finalist — Flipkart Grid 5.0 Robotics Challenge",
  "B.Tech CSE, KIIT — CGPA 9.12 / 10",
  "Microsoft Technology Associate — Python",
  "Cryptography & Information Theory — University of Michigan",
  "Data Structures & Algorithms — UC San Diego",
  "HackerRank — Java · Python · SQL · Problem Solving",
  "30 Days of GCP — Google Cloud",
  "Web & Tech Director — TEDxKIIT '23 & '24",
];
