import { 
  Code2, 
  Cpu, 
  Smartphone, 
  Palette, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail,
  Zap,
  Globe,
  Database,
  BarChart,
  Layout,
  Figma,
  Layers
} from 'lucide-react';

export const personalInfo = {
  name: "Orgho Kanti Sarker Utshob",
  titles: [
    "Software Engineer",
    "AI Enthusiast",
    "Flutter Developer",
    "Graphic Designer"
  ],
  bio: "I'm a Software Engineering graduate who loves building things that work. I specialize in Flutter and AI, and I'm on a mission to create apps that solve real problems with simple, elegant technology.",
  email: "utshob61@gmail.com",
  phone: "01706766498",
  socials: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/utshob61' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/orgho-utshob-838208236/' },
    { name: 'Email', icon: Mail, url: 'mailto:utshob61@gmail.com' }
  ],
  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "12+" },
    { label: "Certifications", value: "5+" }
  ]
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Dart", level: 95 },
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 }
    ]
  },
  {
    category: "Frameworks & UI",
    items: [
      { name: "Flutter", level: 95 },
      { name: "Django", level: 80 },
      { name: "React", level: 55 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "Firebase", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Deep Learning", level: 80 },
      { name: "Computer Vision", level: 85 },
      { name: "YOLO", level: 80 },
      { name: "CNN", level: 80 }
    ]
  },
  {
    category: "Concepts",
    items: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 85 },
      { name: "OOP", level: 90 },
      { name: "Agile/Scrum", level: 85 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "EduVate - AI Powered Learning",
    description: "An intelligent e-learning platform that goes beyond standard video lectures. By integrating gamification and AI, I built a system that adapts to each student's pace, making education more personal and engaging.",
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "React", "Django"],
    github: "https://github.com/utshob61/EduVate-AI_Powered_E-Learning_Platform",
    demo: "#"
  },
  {
    id: 2,
    title: "NeuralGuard Auth",
    description: "A secure, high-performance facial recognition solution for automated logging. I used custom-trained YOLO models to ensure sub-second authentication while maintaining data privacy on local hardware.",
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    tech: ["YOLOv8", "OpenCV", "TensorFlow", "Java"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Vantage Scanner",
    description: "A fast and reliable QR/barcode scanning tool designed for real-world usage. Built with Flutter, it focuses on high decoding speed and a seamless history management system for organized tracking.",
    category: "Mobile",
    thumbnail: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070&auto=format&fit=crop",
    tech: ["Flutter", "Dart", "SQLite", "Riverpod"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Elite Fleet Manager",
    description: "A robust management system for car rental services. I architected a full-stack solution that streamlines the entire booking process, from real-time customer relations to automated inventory records.",
    category: "Web",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    tech: ["Java", "MySQL", "Hibernate", "OOP"],
    github: "https://github.com/utshob61/Car-Rental-Service",
    demo: "#"
  }
];

export const experience = [
  {
    title: "Graphic Design Intern",
    company: "YSSE (Youth School for Social Entrepreneurs)",
    period: "March 2023 - August 2023",
    description: "Created visual content for campaigns, social media, and presentations. Worked directly with clients and teams to deliver professional designs."
  }
];

export const certifications = [
  {
    title: "Google Data Analytics",
    icon: Github, // Using generic icons for now
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
    title: "Mobile App Development",
    description: "Creating premium cross-platform mobile experiences with Flutter for iOS and Android.",
    icon: Smartphone
  },
  {
    title: "AI Solutions",
    description: "Integrating intelligent features like predictive modeling and computer vision into your products.",
    icon: Cpu
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user interfaces focused on conversion and usability.",
    icon: Layout
  },
  {
    title: "Graphic Design",
    description: "Professional branding, logotypes, and marketing materials tailored to your brand voice.",
    icon: Palette
  }
];
