import {
  Terminal,
  Database,
  Container,
  Smartphone,
  Server,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  Workflow,
  Cpu,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  BarChart3,
  FileCode2,
  Lock,
  GitBranch
} from 'lucide-react';

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: "Data & Backend" | "Backend Systems" | "Mobile & Backend";
  thumbnail: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  architectureSummary: string;
  architectureDetails: {
    problem: string;
    solution: string;
    keyDecisions: string[];
    techStack: string[];
  };
  github: string;
  demo?: string;
  featured?: boolean;
}

export const personalInfo = {
  name: "Orgho Utshob",
  tagline: "Backend & Data Infrastructure Specialist",
  avatar: "profile.jpg",
  location: "Dhaka, Bangladesh",
  email: "utshob61@gmail.com",
  phone: "+8801706766498",
  titles: [
    "Backend & Data Engineer",
    "FastAPI & PostgreSQL Specialist",
    "Distributed Systems Builder",
    "ETL Pipeline Architect",
    "Django & Microservices Engineer"
  ],
  bio: "Software Engineering graduate currently pursuing an M.Sc. in Computer Science and Engineering at Daffodil International University. Specializing in high-throughput backend architecture, resilient data pipelines, and production systems. Hands-on experience engineering end-to-end vectorized ETL pipelines, idempotent multi-tenant ledgers, FastAPI microservices, and containerized cloud-native workflows using Python, FastAPI, Django, and PostgreSQL.",
  socials: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/utshob61', handle: 'github.com/utshob61' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/orgho-utshob', handle: 'linkedin.com/in/orgho-utshob' },
    { name: 'Email', icon: Mail, url: 'mailto:utshob61@gmail.com', handle: 'utshob61@gmail.com' }
  ],
  stats: [
    { label: "Transactions Processed", value: "50K+", subtext: "Vectorized Ingestion" },
    { label: "Ledger Consistency", value: "100%", subtext: "FIFO Atomic Locks" },
    { label: "Architecture Isolation", value: "Multi-Tenant", subtext: "QuerySet-Level" },
    { label: "Production Deployment", value: "Docker", subtext: "PostgreSQL & FastAPI" }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming languages for systems, algorithms, and microservices",
    items: [
      { name: "Python", level: 95, icon: Terminal, tags: ["AsyncIO", "OOP", "Metaprogramming"] },
      { name: "SQL", level: 92, icon: Database, tags: ["PostgreSQL", "Query Tuning", "Indexing"] },
      { name: "Java", level: 85, icon: FileCode2, tags: ["Core Java", "OOP", "Collections"] },
      { name: "Dart", level: 88, icon: Smartphone, tags: ["Flutter", "Async Streams"] },
      { name: "C", level: 80, icon: Cpu, tags: ["Memory Management", "Pointers"] }
    ]
  },
  {
    category: "Backend & Frameworks",
    description: "High-performance API design, concurrency handling, and enterprise monoliths",
    items: [
      { name: "FastAPI", level: 95, icon: Zap, tags: ["Pydantic v2", "Async Endpoints", "OpenAPI"] },
      { name: "Django", level: 92, icon: Server, tags: ["QuerySet Multi-Tenancy", "ORM", "DRF"] },
      { name: "REST API Design", level: 95, icon: Workflow, tags: ["Idempotency", "Rate Limiting", "Auth"] },
      { name: "Microservices", level: 88, icon: Layers, tags: ["Service Decoupling", "Event Flows"] }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational modeling, atomic transactions, and raw performance optimization",
    items: [
      { name: "PostgreSQL", level: 92, icon: Database, tags: ["ACID Transactions", "JSONB", "Indexing"] },
      { name: "SQLAlchemy", level: 90, icon: Workflow, tags: ["raw text() queries", "Connection Pooling"] },
      { name: "MySQL", level: 86, icon: Database, tags: ["Schema Optimization", "High Concurrency"] },
      { name: "Database Design", level: 90, icon: Layers, tags: ["Normalization", "Audit Logs", "Isolation"] }
    ]
  },
  {
    category: "DevOps & Tooling",
    description: "Container orchestration, automated testing suites, and environments",
    items: [
      { name: "Docker & Compose", level: 90, icon: Container, tags: ["Multi-stage Builds", "Networking"] },
      { name: "pytest & Unit Testing", level: 90, icon: ShieldCheck, tags: ["Integration Tests", "Fixtures", "Mocks"] },
      { name: "Linux / Bash", level: 88, icon: Terminal, tags: ["Shell Scripting", "Process Management"] },
      { name: "Git & GitHub", level: 94, icon: GitBranch, tags: ["Branching Strategies", "Actions", "CI"] },
      { name: "Firebase", level: 84, icon: Zap, tags: ["Hosting", "Auth", "Firestore"] }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Vectorized data processing, statistical scoring, and model evaluation",
    items: [
      { name: "Pandas & NumPy", level: 92, icon: BarChart3, tags: ["Vectorized ETL", "Data Wrangling"] },
      { name: "Scikit-learn", level: 82, icon: Cpu, tags: ["Supervised ML", "Model Evaluation"] },
      { name: "Data Preprocessing", level: 90, icon: Activity, tags: ["Outlier Detection", "Feature Scaling"] },
      { name: "Analytics Dashboards", level: 88, icon: BarChart3, tags: ["Streamlit", "Live KPI Slicing"] }
    ]
  },
  {
    category: "Mobile Development",
    description: "Cross-platform client applications synced with scalable backends",
    items: [
      { name: "Flutter", level: 90, icon: Smartphone, tags: ["State Management", "Cross-Platform"] },
      { name: "Mobile API Sync", level: 90, icon: Workflow, tags: ["Offline-first", "Real-Time Detection"] }
    ]
  },
  {
    category: "Core Computer Science",
    description: "Algorithmic thinking, structural patterns, and engineering discipline",
    items: [
      { name: "DBMS Internals", level: 92, icon: Database, tags: ["Concurrency Control", "Locking", "WAL"] },
      { name: "Data Structures & Algorithms", level: 88, icon: Cpu, tags: ["Trees", "Graphs", "Dynamic Prog"] },
      { name: "OOP & Design Patterns", level: 94, icon: FileCode2, tags: ["SOLID", "Factory", "Strategy"] },
      { name: "HTTP & Networking", level: 92, icon: Workflow, tags: ["TCP/IP", "WebSockets", "Headers"] },
      { name: "Agile & Scrum", level: 88, icon: Users, tags: ["Sprint Planning", "Iterative Delivery"] }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "FinTech Transaction Analytics Pipeline",
    subtitle: "End-to-End Vectorized ETL, Fraud Detection Engine & Real-Time Analytics",
    description: "Engineered an end-to-end financial transaction pipeline processing 50,000+ records. Built batched, idempotent PostgreSQL ingestion, a high-throughput FastAPI backend using raw SQLAlchemy aggregate queries, rule-based multi-vector fraud attribution, and a real-time Streamlit dashboard.",
    category: "Data & Backend",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker Compose", "Streamlit", "pytest", "Pandas"],
    metrics: [
      { label: "Data Volume", value: "50,000+ Records" },
      { label: "Idempotency", value: "100% Safe Upserts" },
      { label: "Test Coverage", value: "Full pytest Suite" },
      { label: "Containerization", value: "Docker Compose" }
    ],
    highlights: [
      "Vectorized ETL pipeline processing 50k+ financial records with chunked, idempotent PostgreSQL inserts, safe against overlapping historical backfills.",
      "FastAPI analytics backend exposing sub-millisecond aggregate endpoints backed by raw SQLAlchemy text() queries.",
      "Multi-vector rule-based fraud detection engine identifying high-value outliers, repeat failure bursts, and duplicate sequences with granular suspicious_reason attribution.",
      "Streamlit dashboard enabling interactive live filtering across merchant leaderboards, transaction channels, and temporal KPIs."
    ],
    architectureSummary: "Vectorized Ingestion (Pandas) ➔ Idempotent PostgreSQL Upserts ➔ FastAPI Raw SQLAlchemy text() Aggregates ➔ Multi-Rule Fraud Attribution ➔ Docker Compose + Streamlit Dashboard",
    architectureDetails: {
      problem: "Financial analytics pipelines often suffer from data duplication, high query latency on large dataset joins, and lack of rule-level traceability for fraudulent transaction sequences.",
      solution: "Implemented vectorized batch ETL processing with ON CONFLICT DO UPDATE idempotency in PostgreSQL, coupled with raw SQL text() aggregate routines in FastAPI and automated Pytest fixtures for end-to-end data validation.",
      keyDecisions: [
        "Vectorized Pandas transformations over row-by-row iteration, reducing ingestion time by over 80%.",
        "Raw SQLAlchemy text() aggregate queries to bypass ORM translation overhead for analytical reporting.",
        "Granular suspicious_reason column structure ensuring auditing compliance and fast debugging of false positives.",
        "Orchestrated with Docker Compose alongside PostgreSQL for deterministic, reproducible test and deployment environments."
      ],
      techStack: ["Python 3.11", "FastAPI", "SQLAlchemy", "PostgreSQL 16", "Docker", "Docker Compose", "Streamlit", "pytest", "NumPy", "Pandas"]
    },
    github: "https://github.com/utshob61/fintech_transaction_pipeline",
    demo: "https://fintechtransactionpipeline.vercel.app"
  },
  {
    id: 2,
    title: "BakiFlow — Receivables Intelligence for SMEs",
    subtitle: "Multi-Tenant Django Financial Ledger & AI-Driven Collection Priority Queue",
    description: "Architected a service-oriented Django monolith with QuerySet-level multi-tenancy for complete data isolation across businesses. Designed a FIFO-based credit ledger using atomic database transactions and CreditEvent audit logging, complemented by customer Payment Reliability Scoring and a Collection Priority Queue.",
    category: "Backend Systems",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["Django", "Python", "PostgreSQL", "Atomic Transactions", "Multi-Tenancy", "FIFO Ledger", "REST API", "Credit Scoring"],
    metrics: [
      { label: "Tenancy", value: "QuerySet-Level Isolation" },
      { label: "Ledger Model", value: "FIFO Atomic Locks" },
      { label: "Auditability", value: "CreditEvent Log" },
      { label: "SME Priority", value: "Queue-Based Ranking" }
    ],
    highlights: [
      "Architected a service-oriented Django monolith with QuerySet-level multi-tenancy, isolating tenant data cleanly on shared PostgreSQL infrastructure.",
      "Engineered a FIFO-based ledger system leveraging transaction.atomic() database locks to guarantee financial zero-loss consistency during concurrent updates.",
      "Implemented an immutable CreditEvent audit logging layer tracking full payment lifecycles and credit modifications.",
      "Designed an analytical intelligence layer that calculates dynamic Payment Reliability Scores per customer and ranks overdue accounts in a Collection Priority Queue."
    ],
    architectureSummary: "QuerySet-Scoped Multi-Tenant Monolith ➔ FIFO Database Ledger Engine ➔ Atomic Database Locks + CreditEvent Audit Logs ➔ Payment Reliability Scoring & Collection Priority Queue",
    architectureDetails: {
      problem: "Small & medium enterprises struggle with fragmented credit records, balance discrepancies under concurrent transactions, and lack of algorithmic prioritization for debt collection.",
      solution: "Constructed an atomic FIFO ledger engine that matches inbound receipts to oldest outstanding invoices, backed by QuerySet scoped tenancy and an automated overdue ranking algorithm.",
      keyDecisions: [
        "QuerySet-level scoping over separate databases to reduce operational complexity while maintaining rigorous data boundary security.",
        "Atomic database transactions (SELECT FOR UPDATE / transaction.atomic) preventing race conditions on simultaneous balance settlements.",
        "Separate append-only CreditEvent tables for full financial traceability and compliance verification.",
        "Collection Priority Queue scoring factoring payment delays, invoice age, and customer historical reliability."
      ],
      techStack: ["Python 3.11", "Django 5", "Django REST Framework", "PostgreSQL", "Atomic DB Transactions", "Celery", "OOP Design"]
    },
    github: "https://github.com/utshob61/BakiFlow",
    demo: "https://baki-flow.vercel.app/"
  },
  {
    id: 3,
    title: "Vantage Scanner — QR & Barcode Scanner App",
    subtitle: "High-Throughput Mobile Detection Engine & Cloud Scan History Sync",
    description: "Developed a cross-platform Flutter application with a high-performance Django REST backend for real-time QR and barcode detection. Engineered an indexed MySQL schema optimized for thousands of concurrent user scan events with low-latency API sync.",
    category: "Mobile & Backend",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070&auto=format&fit=crop",
    tech: ["Flutter", "Dart", "Django", "MySQL", "REST API", "Camera Stream", "Indexing"],
    metrics: [
      { label: "Scan Engine", value: "Real-time Detection" },
      { label: "Sync Latency", value: "< 100ms REST Sync" },
      { label: "Concurrency", value: "Indexed MySQL Schema" },
      { label: "Platform", value: "Cross-Platform Mobile" }
    ],
    highlights: [
      "Built a high-performance Flutter mobile application featuring real-time camera stream processing for instant 1D/2D QR and barcode recognition.",
      "Engineered an optimized MySQL database schema with composite indexing to handle high-frequency concurrent scan history logging.",
      "Developed secure, token-authenticated REST API endpoints facilitating seamless background sync between mobile clients and the cloud backend.",
      "Implemented client-side caching and graceful offline scan queueing with auto-retry mechanisms upon connection restore."
    ],
    architectureSummary: "Flutter Camera Stream Processor ➔ Token-Authenticated REST API Layer ➔ Django Service Layer ➔ Composite-Indexed MySQL Scan History Schema",
    architectureDetails: {
      problem: "Mobile scanning applications often suffer from camera lag, excessive battery drain during continuous scanning, and database lock contention under simultaneous sync events.",
      solution: "Engineered an asynchronous native camera binding pipeline in Flutter coupled with rate-limited, batched REST API endpoints and optimized MySQL query indexing.",
      keyDecisions: [
        "Native camera stream throttling to optimize frame processing and prevent mobile thermal throttling.",
        "Optimized MySQL schema with composite indexing on (user_id, scan_timestamp) for instant history retrieval.",
        "Stateless token-based authentication with request payload validation for robust backend security.",
        "Local SQLite cache with synchronization workers for zero-data-loss offline usage."
      ],
      techStack: ["Flutter", "Dart", "Django", "Django REST Framework", "MySQL", "SQLite", "Camera API"]
    },
    github: "https://github.com/utshob61/vantage_scanner",
    demo: "https://github.com/utshob61/vantage_scanner"
  }
];

export const experience = [
  {
    role: "Graphic Design Intern",
    company: "Youth School for Social Entrepreneurs (YSSE)",
    period: "Mar 2023 – Aug 2023",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    description: "Managed the end-to-end lifecycle of 50+ digital design projects, ensuring strict adherence to project timelines and cross-functional requirements. Standardized digital asset workflows, significantly improving cross-team collaboration and asset accessibility for marketing teams.",
    achievements: [
      "Delivered 50+ high-impact digital design assets across cross-functional marketing and organizational campaigns.",
      "Standardized digital asset pipelines and naming conventions, improving cross-departmental delivery efficiency.",
      "Official certificate of completion and performance recommendation available upon request."
    ]
  }
];

export const education = [
  {
    degree: "M.Sc. in Computer Science and Engineering",
    institution: "Daffodil International University",
    period: "Aug 2026 – Expected Dec 2027",
    status: "Currently Pursuing",
    description: "Advanced graduate curriculum focusing on distributed backend architecture, big data engineering, advanced database internals, and applied machine learning systems.",
    focusAreas: [
      "Advanced Database Systems & Query Optimization",
      "Distributed Computing & Scalable Architectures",
      "Applied Machine Learning & Statistical Modeling"
    ]
  },
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    period: "Jan 2022 – Dec 2025",
    status: "Graduate",
    description: "Comprehensive software engineering curriculum combining computer science theory, rigorous algorithmic foundations, and production software design.",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Artificial Intelligence & Machine Learning",
      "Web Engineering",
      "Software Engineering & System Design"
    ]
  }
];

export const leadership = [
  {
    role: "Joint General Secretary",
    organization: "Dinajpur Students Association of DIU",
    period: "Active Leadership",
    description: "Leading organizational initiatives, coordinating student welfare programs, organizing cultural & career workshops, and managing student community engagement."
  },
  {
    role: "Organizing Executive",
    organization: "Software Engineering Club of DIU",
    period: "2022 – 2023",
    description: "Orchestrated technical workshops, competitive programming contests, and project showcases for club members to foster hands-on software development skills."
  },
  {
    role: "Technical Presenter",
    organization: "Academic & Peer Project Showcases",
    period: "2022 – Present",
    description: "Presented system architectures, backend systems, and mobile software engineering projects before academic faculty, industry mentors, and student peers."
  }
];

export const services = [
  {
    title: "High-Throughput Backend Architecture",
    description: "Architecting resilient, asynchronous microservices and APIs using FastAPI and Django with strict ACID compliance, rate limiting, and secure authentication.",
    icon: Terminal,
    tags: ["FastAPI", "Django", "AsyncIO", "REST APIs"]
  },
  {
    title: "ETL & Vectorized Data Pipelines",
    description: "Designing end-to-end data ingestion, validation, and analytics pipelines capable of processing tens of thousands of records with idempotent guarantees.",
    icon: Database,
    tags: ["Vectorized ETL", "Pandas", "NumPy", "PostgreSQL"]
  },
  {
    title: "Database Modeling & Query Tuning",
    description: "Engineering multi-tenant relational schemas, FIFO-based financial ledgers, raw SQLAlchemy text() aggregations, and composite indexing in PostgreSQL and MySQL.",
    icon: Server,
    tags: ["PostgreSQL", "SQLAlchemy", "MySQL", "Multi-Tenancy"]
  },
  {
    title: "Containerized Cloud Deployment",
    description: "Building production-ready Docker and Docker Compose environments with clean networking, CI workflows, and automated pytest test suites.",
    icon: Container,
    tags: ["Docker Compose", "Linux", "pytest", "CI/CD"]
  }
];

export const terminalCodeSnippet = `// ⚡ Production Idempotent Batch Ingestion & FIFO Ledger
from fastapi import FastAPI, Depends
from sqlalchemy import text
from app.db import get_db, transaction_scope

app = FastAPI(title="FinTech Analytics & Multi-Tenant Core")

@app.post("/v1/transactions/ingest-batch")
async def ingest_vectorized_batch(payload: BatchPayload, db = Depends(get_db)):
    """Idempotent batch processing with ON CONFLICT DO UPDATE."""
    async with transaction_scope(db) as session:
        result = await session.execute(
            text("""
                INSERT INTO transactions (id, tenant_id, amount, status, channel, created_at)
                VALUES (:id, :tenant_id, :amount, :status, :channel, :created_at)
                ON CONFLICT (id) DO UPDATE SET 
                    status = EXCLUDED.status,
                    updated_at = NOW();
            """),
            payload.vector_records
        )
        return {"processed": len(payload.vector_records), "status": "200 OK"}
`;
