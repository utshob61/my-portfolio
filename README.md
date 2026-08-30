# Orgho Utshob — Engineering Portfolio

A modern, high-performance developer portfolio for **Orgho Utshob** — Backend & Data Infrastructure Specialist (M.Sc. in Computer Science & Engineering candidate at Daffodil International University).

Built with React 19, TypeScript, Tailwind CSS 4, and Motion.

---

## 🏗️ Architecture & Features

- **Senior Engineering Identity**: Clear positioning around high-throughput backend architecture, resilient data pipelines, and production systems.
- **Production Systems Showcase**:
  - **FinTech Transaction Analytics Pipeline**: Vectorized Python ETL (50k+ records), idempotent PostgreSQL inserts, FastAPI raw SQLAlchemy aggregate endpoints, rule-based fraud detection engine (`suspicious_reason` column attribution), and Streamlit dashboard.
  - **BakiFlow — Receivables Intelligence for SMEs**: Service-oriented Django monolith with QuerySet-level multi-tenancy, FIFO credit ledger with atomic database transactions & `CreditEvent` audit logs, customer Payment Reliability Scoring, and dynamic Collection Priority Queue.
  - **Vantage Scanner — QR & Barcode Scanner App**: Real-time Flutter scanner, Django REST backend, and composite-indexed MySQL schema optimized for high-concurrency scan history sync.
- **Interactive System Deep Dive**: Detailed architectural modal for every featured project breaking down the core engineering problem, architectural solution, key decisions, metrics, and technology stack.
- **Dynamic Skill Matrix**: Structured across 7 domains with skill mastery indicators and specialized tags (*Vectorized ETL, AsyncIO, QuerySet Multi-Tenancy, Atomic Locks, pytest Fixtures*).
- **Credentials & Timeline**: Dual tabbed interface covering Graduate & Undergraduate Education, Professional Experience, and Leadership & Technical Presentations.
- **Integrated Contact & Resume**: One-click instant copy for email/phone with toast feedback, live contact form, and direct CV download.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4, Motion (Framer Motion), Lucide React
- **Build Tool**: Vite 6
- **Asset Handling**: Static image optimization & PDF resume embedding

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/utshob61/my-portfolio.git
cd my-portfolio
npm install
```

### 2. Run Local Development
```bash
npm run dev
```
Visit `http://localhost:3000/my-portfolio/` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📄 License

This project is licensed under the MIT License.
