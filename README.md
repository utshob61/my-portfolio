# ⚡ Orgho Utshob — Senior Backend & Data Infrastructure Portfolio

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-black?style=for-the-badge&logo=github&logoColor=white)](https://utshob61.github.io/my-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance personal engineering portfolio for **Orgho Utshob** — Backend & Data Infrastructure Specialist (M.Sc. in Computer Science & Engineering candidate at Daffodil International University). Built to showcase production-style architectures, vectorized data pipelines, multi-tenant financial ledgers, and distributed systems.

🔴 **[Live Portfolio Application](https://utshob61.github.io/my-portfolio/)**  
📄 **[Download Official CV (PDF)](https://utshob61.github.io/my-portfolio/resume.pdf)**  
💼 **[LinkedIn Profile](https://www.linkedin.com/in/orgho-utshob/)** • 🐙 **[GitHub Profile](https://github.com/utshob61)**

---

## 📋 Table of Contents
- [✨ Core Highlights & Architectural Features](#-core-highlights--architectural-features)
- [🧠 Featured Systems & Deep Dives](#-featured-systems--deep-dives)
- [🛠 Technical Skill Matrix](#-technical-skill-matrix)
- [🎨 Design System & Aesthetic Architecture](#-design-system--aesthetic-architecture)
- [📂 Project Directory Structure](#-project-directory-structure)
- [🚀 Quick Start & Local Setup](#-quick-start--local-setup)
- [☁️ Cloud Deployment](#-cloud-deployment)
- [🧪 Testing & Verification](#-testing--verification)
- [📬 Connect & Contact](#-connect--contact)

---

## ✨ Core Highlights & Architectural Features

*   **Production System Deep Dives:** Interactive modal architecture detailing real-world engineering challenges, solutions, and invariant decisions for each project.
*   **Vectorized Ingestion & Idempotency:** Interactive terminal code snippet demonstrating ON CONFLICT DO UPDATE upserts and transactional safety.
*   **Live Status Indicator:** Real-time badge highlighting active availability for Senior / Backend Engineering roles and M.Sc. research.
*   **Multi-Tab Experience & Education:** Unified credential browser covering Graduate (M.Sc.) & Undergraduate (B.Sc.) degrees, YSSE Internship, and Campus Leadership.
*   **Instant One-Click Clipboard Actions:** Frictionless copy for email and phone numbers with animated visual feedback.
*   **Framer Motion 12 Micro-Interactions:** Smooth, hardware-accelerated animations, scroll progress bar, and spring cursor dynamics.

---

## 🧠 Featured Systems & Deep Dives

### 1. 💳 [FinTech Transaction Analytics Pipeline](https://github.com/utshob61/fintech_transaction_pipeline)
> **Live Demo:** [https://fintechtransactionpipeline.vercel.app](https://fintechtransactionpipeline.vercel.app) • **Tech:** Python, FastAPI, PostgreSQL, SQLAlchemy, Docker Compose, Streamlit, pytest, Pandas

An industrial-grade ETL and monitoring system modeled on high-throughput mobile financial services (MFS):
*   **Vectorized Ingestion:** Processes 50,000+ transaction batches in $O(n)$ time using NumPy and Pandas vectorization.
*   **Idempotent Ingestion:** Batched PostgreSQL upserts ensuring safe re-runs on overlapping data windows without duplicate pollution.
*   **Raw SQL Aggregate Layer:** FastAPI backend exposing sub-millisecond analytics queries using raw SQLAlchemy `text()` aggregates.
*   **Rule-Based Fraud Engine (FDE):** Multi-vector evaluation flagging high-value anomalies, velocity/repeat bursts, and duplicate sequences with a `suspicious_reason` column for auditability.
*   **Live Streamlit Dashboard & Pytest:** Real-time KPI slicing by channel/status and 100% test coverage with automated fixtures.

---

### 2. ⚡ [BakiFlow — Receivables Intelligence for SMEs](https://github.com/utshob61/BakiFlow)
> **Live Demo:** [https://baki-flow.vercel.app/](https://baki-flow.vercel.app/) (Demo: `owner` / `password123`) • **Tech:** Django 5, Python 3.12, PostgreSQL 16, Atomic Transactions, Multi-Tenancy, REST API

A high-integrity financial ledger and behavioral debt-recovery intelligence platform for SME merchants:
*   **QuerySet-Level Multi-Tenancy:** Logical data boundary isolation across shared PostgreSQL infrastructure.
*   **Atomic FIFO Settlement Engine:** Matches inbound receipts to oldest unsettled credit sales using atomic database locks (`transaction.atomic`) guaranteeing zero financial drift.
*   **Forensic Audit Trail:** Append-only `CreditEvent` ledger logging every modification, allocation, and invoice lifecycle transition.
*   **Payment Reliability Score (0–100):** Deterministic trust scoring combining clearance velocity, delay mean, and 90-day recency decay.
*   **Collection Priority Queue:** Algorithmic ranking of overdue accounts into actionable tiers (Critical, High, Moderate, Healthy).

---

### 3. 📱 [Vantage Scanner — QR & Barcode Scanner App](https://github.com/utshob61/vantage_scanner)
> **GitHub Repo:** [https://github.com/utshob61/vantage_scanner](https://github.com/utshob61/vantage_scanner) • **Tech:** Flutter, Dart, Django, MySQL, REST API, Camera Stream

High-performance mobile scanning client with real-time cloud history sync:
*   **Native Camera Stream Engine:** Instant, low-latency 1D/2D QR and barcode recognition with throttled frame processing.
*   **Composite-Indexed MySQL Schema:** Architected to index and process thousands of concurrent user scan histories.
*   **Resilient REST Sync:** Token-authenticated background synchronization with offline queueing and auto-retry workers.

---

## 🛠 Technical Skill Matrix

| Category | Primary Technologies | Core Invariants & Competencies |
| :--- | :--- | :--- |
| **Languages** | Python, SQL, Java, Dart, C | AsyncIO, Metaprogramming, Memory Layouts, OOP |
| **Backend Frameworks** | FastAPI, Django, REST API, DRF | High-Concurrency APIs, Multi-Tenancy, OpenAPI, Rate Limiting |
| **Databases & ORM** | PostgreSQL, SQLAlchemy, MySQL | ACID Transactions, Raw `text()` Aggregates, Composite Indexing |
| **DevOps & Cloud** | Docker, Docker Compose, Git, Linux | Multi-stage Builds, Container Networking, Shell Scripting, CI/CD |
| **AI & Data Engineering** | Pandas, NumPy, Scikit-learn, Streamlit | Vectorized ETL, Supervised Learning, Model Evaluation, KPI Dashboards |
| **Mobile & Client** | Flutter, Dart | Camera Stream Binding, Offline-First Sync, Responsive State |
| **Core Computer Science** | DBMS, OOP, DSA, HTTP, Agile/Scrum | Concurrency Control, WAL, Graph Algorithms, System Design |

---

## 🎨 Design System & Aesthetic Architecture

*   **Dark Modern FinTech Theme:** Deep slate base (`#020617`) with electric indigo (`#6366f1`), emerald (`#10b981`), and amber accents.
*   **Glassmorphic UI:** Multi-layered backdrop blurs (`backdrop-blur-xl`), subtle grid overlays, and radiant noise gradients.
*   **Fluid Typography:** Google Fonts pairing featuring **Space Grotesk** (display titles), **Inter** (body), **Outfit** (headings), and **JetBrains Mono** (code snippets).
*   **Dynamic Viewport Responsiveness:** 100% responsive across ultra-wide monitors, laptops, tablets, and mobile smartphones.

---

## 📂 Project Directory Structure

```text
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── profile.jpg                 # High-resolution profile photography
│   ├── resume.pdf                  # Latest official CV download
│   └── .nojekyll                   # GitHub Pages static asset flag
├── src/
│   ├── components/
│   │   ├── About.tsx               # Philosophy, bio & verified profile card
│   │   ├── Contact.tsx             # Direct reachout, one-click copy & form
│   │   ├── Counter.tsx             # Animated numerical statistics counter
│   │   ├── CustomCursor.tsx        # Spring physics cursor interaction
│   │   ├── Experience.tsx          # Education (M.Sc/B.Sc), Experience & Leadership
│   │   ├── Footer.tsx              # Brand footer with back-to-top action
│   │   ├── Hero.tsx                # Terminal preview, status pill & hero CTAs
│   │   ├── Navbar.tsx              # Adaptive navigation & mobile slide-out drawer
│   │   ├── ProjectModal.tsx        # Interactive architectural deep-dive drawer
│   │   ├── Projects.tsx            # Featured system cards with live links
│   │   ├── ScrollProgress.tsx      # Viewport scroll progress indicator
│   │   ├── SectionHeading.tsx      # Standardized section typography
│   │   ├── Services.tsx            # 4 Core Engineering Solutions
│   │   ├── Skills.tsx              # Interactive 7-category skill matrix
│   │   └── TypeWriter.tsx          # Dynamic title typing animation
│   ├── data/
│   │   └── portfolio.ts            # Centralized portfolio state & project details
│   ├── lib/
│   │   └── utils.ts                # Class merge utility (clsx + tailwind-merge)
│   ├── App.tsx                     # Main layout & component composition
│   ├── index.css                   # Tailwind CSS 4 theme & typography definitions
│   └── main.tsx                    # Application entry point
├── index.html                      # SEO metadata, OpenGraph tags & favicon
├── package.json                    # Dependencies & npm scripts
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite 6 build configuration
```

---

## 🚀 Quick Start & Local Setup

### Prerequisites
*   **Node.js**: `v20.x` or higher
*   **npm**: `v10.x` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/utshob61/my-portfolio.git
   cd my-portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/my-portfolio/](http://localhost:3000/my-portfolio/) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ☁️ Cloud Deployment

The repository is configured for automated continuous deployment using **GitHub Actions**:
*   Every push to the `main` branch triggers `.github/workflows/deploy.yml`.
*   Builds the production bundle into `./dist`.
*   Deploys artifacts to **GitHub Pages** with zero downtime.

---

## 🧪 Testing & Verification

```bash
# Type check without emitting files
npm run lint

# Production build verification
npm run build
```

---

## 📬 Connect & Contact

*   **Email:** [utshob61@gmail.com](mailto:utshob61@gmail.com)
*   **Phone / WhatsApp:** [+8801706766498](tel:+8801706766498)
*   **Location:** Dhaka, Bangladesh
*   **LinkedIn:** [linkedin.com/in/orgho-utshob](https://www.linkedin.com/in/orgho-utshob/)
*   **GitHub:** [github.com/utshob61](https://github.com/utshob61)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
