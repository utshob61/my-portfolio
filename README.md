<h1 align="center"><b>ORGHO UTSHOB — PORTFOLIO</b></h1>
<p align="center">
  <b>Backend & Data Infrastructure Specialist</b><br>
  M.Sc in Computer Science and Engineering Candidate • Daffodil International University<br>
  <a href="mailto:utshob61@gmail.com">utshob61@gmail.com</a> | +8801706766498 | Dhaka, Bangladesh
</p>

<p align="center">
  <a href="https://utshob61.github.io/my-portfolio/" target="_blank"><b>🌐 Live Website</b></a> •
  <a href="https://github.com/utshob61" target="_blank"><b>🐙 GitHub</b></a> •
  <a href="https://www.linkedin.com/in/orgho-utshob/" target="_blank"><b>💼 LinkedIn</b></a> •
  <a href="https://utshob61.github.io/my-portfolio/resume.pdf" target="_blank"><b>📄 Download CV</b></a>
</p>

---

<h1 align="center"><b>Website Overview & Sections</b></h1>

<h4 align="left"><b>Home Page:</b></h4>
<p>
  Hero section highlighting identity as a <b>Backend & Data Engineer</b>, dynamic typewriter animation, live availability status, profile portrait, and interactive terminal snippet featuring idempotent batch ingestion with PostgreSQL & FastAPI.
</p>

```python
// ⚡ Vectorized Ingestion & Idempotent Upsert Core
@app.post("/v1/transactions/ingest-batch")
async def ingest_vectorized_batch(payload: BatchPayload, db = Depends(get_db)):
    """Process 50,000+ records with zero duplication on overlapping backfills"""
    async with transaction_scope(db) as session:
        await session.execute(text("""
            INSERT INTO transactions (id, tenant_id, amount, status, channel)
            VALUES (:id, :tenant_id, :amount, :status, :channel)
            ON CONFLICT (id) DO UPDATE SET status = EXCLUDED.status, updated_at = NOW();
        """), payload.vector_records)
        return {"processed": len(payload.vector_records), "status": "200_OK"}
```

<h4 align="left"><b>About:</b></h4>
<p>
  Engineering philosophy and background: Software Engineering graduate pursuing an M.Sc in CSE at Daffodil International University. Hands-on experience across data ingestion, vectorized processing, API design, containerized deployment, and machine learning model evaluation with Pandas, NumPy, and Scikit-learn.
</p>

* <b>50,000+ Transactions</b> Ingested via Vectorized Pipelines
* <b>100% Ledger Consistency</b> via Atomic Transactions (`transaction.atomic`)
* <b>QuerySet-Level Multi-Tenancy</b> isolating data across multiple business accounts
* <b>Docker Compose Orchestration</b> of PostgreSQL and FastAPI instances

<h4 align="left"><b>Skills:</b></h4>
<p>
  Comprehensive technical skills matrix categorized across languages, frameworks, databases, tools, AI/ML, and core computer science concepts:
</p>

* <b>Languages:</b> Python, Java, SQL, Dart, C
* <b>Backend & Frameworks:</b> FastAPI, Django, REST API Development
* <b>Mobile Development:</b> Flutter
* <b>Databases:</b> PostgreSQL, MySQL, SQLAlchemy
* <b>Tools & Platforms:</b> Docker, Docker Compose, Git, GitHub, Linux, Firebase, VS Code, pytest
* <b>AI & Machine Learning:</b> Supervised learning, data preprocessing, model evaluation, NumPy, Pandas, Scikit-learn
* <b>Core Concepts:</b> DBMS, OOP, HTTP Fundamentals, Data Structures and Algorithms, Agile, Scrum

<h4 align="left"><b>Projects:</b></h4>
<p>
  Selected production systems with deep-dive architectural modals:
</p>

1. <b>FinTech Transaction Analytics Pipeline</b>  
   * <b>Description:</b> End-to-end Python ETL pipeline processing 50,000+ transaction records using vectorized processing and batched, idempotent PostgreSQL inserts. FastAPI backend exposing analytics endpoints backed by raw SQLAlchemy `text()` aggregate queries, containerized with Docker Compose. Multi-vector rule-based fraud detection engine with `suspicious_reason` column attribution, Streamlit dashboard, and full pytest test suite.
   * <b>Links:</b> <a href="https://github.com/utshob61/fintech_transaction_pipeline" target="_blank">GitHub Repo</a> | <a href="https://fintechtransactionpipeline.vercel.app/" target="_blank">Live Demo</a>

2. <b>BakiFlow — Receivables Intelligence for SMEs</b>  
   * <b>Description:</b> Service-oriented Django monolith with QuerySet-level multi-tenancy for clean account isolation. FIFO-based credit ledger using atomic database transactions and `CreditEvent` audit logging to guarantee financial data integrity. Intelligent customer Payment Reliability Score calculation and Collection Priority Queue.
   * <b>Links:</b> <a href="https://github.com/utshob61/BakiFlow" target="_blank">GitHub Repo</a> | <a href="https://baki-flow.vercel.app/" target="_blank">Live Demo</a>

3. <b>Vantage Scanner — QR & Barcode Scanner App</b>  
   * <b>Description:</b> Real-time Flutter mobile scanner app with Django backend and an optimized MySQL database schema built to handle thousands of concurrent user scan histories with sub-100ms sync.
   * <b>Links:</b> <a href="https://github.com/utshob61/vantage_scanner" target="_blank">GitHub Repo</a>

<h4 align="left"><b>Experience & Education:</b></h4>
<p>
  Academic trajectory, industry experience, and leadership credentials:
</p>

* <b>M.Sc in Computer Science and Engineering</b> — Daffodil International University (Aug 2026 – Expected Dec 2027)
* <b>B.Sc. in Software Engineering</b> — Daffodil International University (Jan 2022 – Dec 2025)
  * Coursework: Data Structures & Algorithms, DBMS, OOP, Artificial Intelligence, Machine Learning, Web Engineering, Software Engineering
* <b>Graphic Design Intern</b> — Youth School for Social Entrepreneurs (YSSE) (Mar 2023 – Aug 2023)
  * Managed end-to-end lifecycle of 50+ digital design projects and standardized digital asset workflows.
* <b>Leadership:</b> Joint General Secretary (Dinajpur Students Association of DIU), Organizing Executive (Software Engineering Club of DIU 2022–2023), Technical Presenter.

<h4 align="left"><b>Contact:</b></h4>
<p>
  Direct reachout channels with one-click copy and functional messaging:
</p>

* <b>Email:</b> <a href="mailto:utshob61@gmail.com">utshob61@gmail.com</a>
* <b>Phone:</b> <a href="tel:+8801706766498">+8801706766498</a>
* <b>Location:</b> Dhaka, Bangladesh
* <b>Profiles:</b> <a href="https://www.linkedin.com/in/orgho-utshob/" target="_blank">LinkedIn</a> • <a href="https://github.com/utshob61" target="_blank">GitHub</a>

---

<h2 align="center"><b><u>Website Link</u></b></h2>
<h3 align="center"><a href="https://utshob61.github.io/my-portfolio/" target="_blank">Orgho Utshob | Portfolio Website</a></h3>
