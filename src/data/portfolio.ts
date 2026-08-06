import { 
  Code2, 
  Cpu, 
  Smartphone, 
  Palette, 
  Github, 
  Linkedin, 
  Mail,
  Database,
  BarChart,
  Layout,
  Layers,
  Terminal,
  Container,
  Activity
} from 'lucide-react';

export const personalInfo = {
  name: "Orgho Utshob",
  titles: [
    "Backend Engineer",
    "Data Engineer",
    "Flutter Developer",
    "Software Engineer"
  ],
  bio: "Recent Software Engineering graduate focused on backend and data engineering. I specialize in building production-style systems using Python, FastAPI, and PostgreSQL, with a deep interest in scalable data pipelines and infrastructure.",
  email: "utshob61@gmail.com",
  phone: "+8801706766498",
  socials: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/utshob61' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/orgho-utshob-838208236/' },
    { name: 'Email', icon: Mail, url: 'mailto:utshob61@gmail.com' }
  ],
  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "12+" },
    { label: "Code Commits", value: "500+" }
  ]
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 85 },
      { name: "Dart", level: 90 },
      { name: "C", level: 80 }
    ]
  },
  {
    category: "Backend & Frameworks",
    items: [
      { name: "FastAPI", level: 95 },
      { name: "Django", level: 90 },
      { name: "REST API", level: 95 },
      { name: "Flutter", level: 90 }
    ]
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQLAlchemy", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Git", level: 95 }
    ]
  },
  {
    category: "Data & AI",
    items: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "ETL Pipelines", level: 85 }
    ]
  },
  {
    category: "Core Concepts",
    items: [
      { name: "DBMS", level: 90 },
      { name: "OOP", level: 95 },
      { name: "HTTP", level: 90 },
      { name: "Agile/Scrum", level: 85 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "FinTech Transaction Analytics Pipeline",
    description: "Built an end-to-end ETL pipeline processing 50,000+ transaction records. Features idempotent PostgreSQL inserts, a FastAPI backend with SQLAlchemy, and a Streamlit dashboard for live KPI filtering. Fully containerized with Docker.",
    category: "Web",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "SQLAlchemy", "Streamlit"],
    github: "https://github.com/utshob61/fintech_transaction_pipeline",
    demo: "https://fintechtransactionpipeline.vercel.app"
  },
  {
    id: 2,
    title: "Vantage Scanner — QR & Barcode",
    description: "Developed a high-performance mobile application for real-time QR detection. Integrated a Django backend with a MySQL database optimized for concurrent scan history sync via secure REST API endpoints.",
    category: "Mobile",
    thumbnail: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070&auto=format&fit=crop",
    tech: ["Flutter", "Django", "MySQL", "REST API"],
    github: "https://github.com/utshob61/vantage_scanner",
    demo: "#"
  },
  {
    id: 3,
    title: "Elite Fleet Manager",
    description: "Architected a Django-based management system for car rentals. Automated booking lifecycles and fleet inventory management, implementing concurrency handling to reduce manual errors and improve operational efficiency.",
    category: "Web",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    tech: ["Django", "Python", "PostgreSQL", "OOP"],
    github: "https://github.com/utshob61/elite_fleet_manager",
    demo: "#"
  }
];

export const experience = [
  {
    title: "Graphic Design Intern",
    company: "YSSE (Youth School for Social Entrepreneurs)",
    period: "March 2023 - August 2023",
    description: "Managed the end-to-end lifecycle of 50+ digital design projects. Standardized digital asset workflows, improving team collaboration and accessibility for marketing teams."
  }
];

export const leadership = [
  {
    role: "Joint General Secretary",
    organization: "Dinajpur Students Association of DIU",
  },
  {
    role: "Organizing Executive",
    organization: "Software Engineering Club of DIU (2022–2023)",
    description: "Helped organize technical sessions and project showcases for club members."
  },
  {
    role: "Presenter",
    organization: "Technical Projects",
    description: "Presented technical projects before faculty and peers."
  }
];

export const certifications = [
  {
    title: "Google Data Analytics",
    icon: Database,
    url: "#"
  },
  {
    title: "Flutter Development Bootcamp",
    icon: Smartphone,
    url: "#"
  },
  {
    title: "Machine Learning Specialization",
    icon: Cpu,
    url: "#"
  }
];

export const services = [
  {
    title: "Backend Development",
    description: "Designing scalable APIs and robust server-side logic using FastAPI and Django.",
    icon: Terminal
  },
  {
    title: "Data Engineering",
    description: "Building end-to-end ETL pipelines and managing complex database architectures.",
    icon: Database
  },
  {
    title: "Mobile App Development",
    description: "Creating premium cross-platform mobile experiences with Flutter.",
    icon: Smartphone
  },
  {
    title: "Cloud & DevOps",
    description: "Containerizing applications with Docker and managing deployments on Linux/Firebase.",
    icon: Container
  }
];
