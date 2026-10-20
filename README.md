# VERIXA AI — Autonomous College & Degree Legality Verification Platform

> **Hackathon:** KRITICAL HACKS!  
> **Team Name:** BITHEADS  
> **Team Members:** Aman, Atharva, Arman, Tanya Thakur, Hridya Singh  
> **Core Innovation:** Autonomous Multi-Regulator Web Agent Pipeline for Real-Time College & Course Legitimacy Checks

---

## 📌 Executive Summary

Every year, lakhs of students take admission in colleges or courses that are unrecognised, not approved for that specific academic year, or falsely claiming university affiliation. 

Students often discover the deception 3 to 4 years later, after spending lakhs of rupees in tuition fees, when their degrees are rejected for:
- Government & PSU jobs (UPSC, SSC, Banking, Railways)
- Competitive exams (GATE, CAT, UGC-NET)
- Higher education admissions in India and abroad
- Professional licensing councils (Bar Council of India, Medical Council, Pharmacy Council)

**VERIXA AI** is an AI-powered web agent platform that tells students, in seconds, whether a college and course is legally recognized and approved for their specific admission year across official statutory bodies.

---

## 🎯 The Problem

1. **Unrecognised Admission:** Colleges advertise new trendy programs (e.g., AI/ML, Cyber Security, Biotech) or add extra seats without statutory council sanction.
2. **Late Discovery:** The lack of recognition is only realized after fees are paid and degree certificates are issued.
3. **Fragmented Verification:** Statutory bodies (UGC, AICTE, NMC, BCI, PCI, State Universities) each maintain separate, archaic portals with disjointed search forms.
4. **Year-Specific Approval Volatility:** Regulatory approval is annual. An institution approved in 2021 may be placed under "Zero Intake" or de-affiliated in 2024. Old approval letters are shown to prospective students.
5. **Inconsistent Names & Brand Deception:** Distinct entities share similar brand names (e.g. an affiliated private college vs a state private university), confusing students.
6. **Biased Intermediaries:** Admission brokers and consultants earn 20%–40% commissions on tuition and systematically conceal regulatory red flags.

---

## 🚀 The Proposed Solution

An end-to-end autonomous agent system where a student simply enters:
1. **College Name** (or popular alias/acronym, e.g. `IIT D`, `DTU`, `MAIT`, `Galgotias`)
2. **Degree / Course** (e.g. B.Tech Computer Science, MBBS, B.Pharm, LL.B)
3. **Admission Year** (e.g. `2024-2025`, `2025-2026`)

In under 5 seconds, parallel autonomous web agents inspect live government databases, resolve entities, verify approved seat quotas, and output an unambiguous legal verdict with official gazette proof.

---

## 🔄 Complete 6-Stage Pipeline
[User Input] (College, Course, Year)
│
▼
[Stage 01] Course-to-Regulator Mapping
│ (Determines required statutory councils: UGC, AICTE, NMC, BCI, PCI, State Univ)
▼
[Stage 02] Parallel Web Agents (TinyFish Agent API)
│ (Navigates live ASP.NET forms, CAPTCHAs, and dynamic JS tables concurrently)
▼
[Stage 03] Multi-Source Entity Resolution
│ (Fuzzy matching, acronym resolution, campus branch disambiguation)
▼
[Stage 04] LLM Document & Gazette Extraction
│ (Converts unstructured PDF sanction orders & seat matrices into clean JSON)
▼
[Stage 05] Statistical Confidence Scoring Engine
│ (Weights source authority tier, primary gazette hash, data recency & consensus)
▼
[Stage 06] Legal Verdict Synthesis & Safety Dossier
(Verified / Caution / Unapproved + Direct Links + "What To Do Next" Checklist)
code
Code
---

## 🤖 Proposed TinyFish Integration

Regulator portals in India lack public REST APIs. They rely on search forms, dropdown filters, and dynamic tables. TinyFish enables autonomous web agents to interact with portals exactly like human auditors:

| # | TinyFish Capability | How We Use It in Verixa AI | Portal Automation Action | Status |
|---|---|---|---|---|
| **01** | **Agent API** | Navigates regulator portals, enters the college name, applies filters and extracts result tables. | Types into ASP.NET forms, selects state/district filters, bypasses JS pagination, and reads live tables. | **Active (<1.2s)** |
| **02** | **Parallel execution** | Checks UGC, AICTE and the course-specific body at the same time, so results return fast. | Simultaneously queries UGC Central Directory, AICTE EOA Database, and affiliating university gazettes. | **Active (<0.8s)** |
| **03** | **Search API** | Finds the official affiliating university page and any public notices about the institution. | Discovers active university gazette orders, de-affiliation circulars, Zero Intake notices, and stay orders. | **Active (<1.5s)** |
| **04** | **Fetch API** | Converts official PDFs and notice pages into clean text for extraction. | Converts multi-column scanned PDF sanction letters and seat matrices into clean, typed JSON records. | **Active (<1.1s)** |

> *"Why TinyFish is essential: Regulator portals are mostly search forms and dynamic tables with no clean API. A web agent has to type, filter, paginate and read results the way a human would."*

---

## 🧠 Role of ML & AI

1. **AI-Based Data Extraction:** Parses scanned circulars, Extension of Approval (EOA) letters, and government gazettes into structured seat counts and validity dates.
2. **Entity Resolution:** Overcomes spelling variants, acronyms, and geographical branches to match the canonical legal entity.
3. **Confidence Scoring:** Computes Bayesian reliability scores based on primary gazettes vs university notices.
4. **Intelligent Verdict Engine:** Strict rule engine classifying institutions into `VERIFIED`, `CAUTION`, or `UNAPPROVED`.
5. **Plain-Language Explanation:** Translates complex statutory jargon into straightforward warnings for students and parents.

---

## ⚖️ Statutory Regulators Monitored

- **UGC (University Grants Commission):** Apex statutory body under Section 2(f), 3, and 12(B) of UGC Act, 1956.
- **AICTE (All India Council for Technical Education):** Statutory body for technical education under AICTE Act, 1987.
- **NMC (National Medical Commission):** Regulates medical colleges and MBBS/MD degrees under NMC Act, 2019.
- **BCI (Bar Council of India):** Regulates legal education and Centers of Legal Education (CLE) under Advocates Act, 1961.
- **PCI (Pharmacy Council of India):** Regulates B.Pharm/D.Pharm under Pharmacy Act, 1948.
- **State Legislative Universities (e.g. GGSIPU, AKTU, DU):** Confer final legal degree certificates for affiliated private institutions.

---

## 👥 Target Users & Real-World Use Cases

1. **Students & 12th-Pass Aspirants:** Verify legitimacy and approved seat capacity before paying non-refundable counseling fees.
2. **Parents & Families:** Independently validate college claims without relying on biased admission agents.
3. **Career & School Counsellors:** Quickly vet options during high-stress admission seasons.
4. **Education NGOs:** Protect first-generation and rural learners from predatory institutions.
5. **Employers & HR Teams:** Verify whether a candidate's degree was officially recognized during their graduation year.

> **Primary Use Case:** *A student receives an admission offer from a private college and is asked to pay an admission fee. Before making the payment, the student runs Verixa AI to inspect live regulatory standing.*

---

## 🛠️ Tech Stack

- **UI & Presentation:** React 19, TypeScript, Tailwind CSS, Vite.
- **Hero Section:** Originkit `Hero 40` with custom interactive WebGL Dither Reveal canvas shader.
- **Icons & Motion:** Lucide Icons, Motion.
- **Autonomous Scraping & Agents:** TinyFish Agent API, Playwright browser sessions.
- **NLP & Rule Engine:** Fuzzy Entity Resolution, Levenshtein Distance, Gemini AI document synthesis.

---

## 🔮 Future Scope & Roadmap

- [ ] **WhatsApp Verification Bot:** Instant recognition verification via chat without requiring an app.
- [ ] **Chrome Browser Extension:** Live accreditation badge displayed when browsing college websites or education portals.
- [ ] **Regional Language Translation:** Full support for Hindi, Marathi, Bengali, Tamil, and Telugu.
- [ ] **Pan-India Expansion:** Scaling beyond the Delhi-NCR pilot to all 28 states and Union Territories.
- [ ] **Automated Alerts:** SMS/Email notifications when an institution's approval status changes or is halted.

---

## 👥 Team Bitheads

- **Aman** — Full-Stack & Web Agents
- **Atharva** — Autonomous Agent Architecture
- **Arman** — Entity Resolution & Data Pipeline
- **Tanya Thakur** — UI/UX & Regulatory Intelligence
- **Hridya Singh** — ML Extraction & Prompt Engineering

*Built with ❤️ for KRITICAL HACKS!*
