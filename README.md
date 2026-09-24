# ESGPulse — Enterprise ESG Data Aggregation, Gap Analysis & Framework Compliance Tracking Platform

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3.10-22c55e?style=flat)](https://recharts.org/)
[![Portfolio](https://img.shields.io/badge/Target_Company-Benchmark_Gensuite-1A2B4A?style=flat)](#context--why-this-product-exists)

**Target Company**: Benchmark Gensuite (Enterprise ESG & EHS SaaS)  
**Target Role**: Product Manager — ESG and Sustainability Portfolio  
**Builder**: Danwantari Sree Satya Sai (APM, 3 years, Darwinbox / DashLoc / Bosch)  
**Repository**: [github.com/Danwantari/esgpulse](https://github.com/Danwantari/esgpulse)

---

## Context — Why This Product Exists

Benchmark Gensuite is a 20-year-old enterprise SaaS company whose platform helps large corporations (GE, Boeing, Honeywell, Tata Steel) manage ESG (Environmental Social Governance) reporting and EHS (Environmental Health Safety) compliance.

### The Problem ESGPulse Solves
Large enterprises collect ESG data from dozens of internal systems — smart energy meters, waste management manifests, HR diversity census databases, supplier scorecards, water consumption loggers. This data is scattered across departments, formats, and geographies. When it is time to file an ESG disclosure report (to investors, statutory regulators like SEBI/SEC, or rating agencies like MSCI/Sustainalytics), nobody has a clean, consolidated view of what data they have, what is missing, and whether they are compliant with the reporting framework they are targeting.

**ESGPulse** is an ESG data aggregation, gap analysis, and compliance tracking platform that helps sustainability managers:
1. **Aggregate ESG metrics** from all business units (India Operations, UK Operations, Southeast Asia) into one verified single source of truth.
2. **Map each metric** to the major reporting frameworks (**GRI, SASB, TCFD**).
3. **See an interactive Compliance Heatmap** (198 disclosure units) showing which framework requirements are met, at risk/partial, or missing.
4. **Track progress toward strategic sustainability targets** (Net Zero SBTi trajectories, 60% renewable energy, 40% gender diversity in leadership, water intensity reduction).
5. **Orchestrate decentralized BU data collection** with built-in outlier detection, methodology audits, and approval workflows.
6. **Generate disclosure-ready exports** per framework in **PDF**, **Excel/CSV** (for auditors), and **JSON** (for regulatory filing systems).

---

## Domain Glossary & Framework Breakdown

| Framework | Full Name | Focus & Structure in ESGPulse |
| :--- | :--- | :--- |
| **GRI** | Global Reporting Initiative | The most widely used global ESG reporting framework. Structured into **GRI 200 (Economic)**, **GRI 300 (Environmental: 302 Energy, 303 Water, 305 Emissions, 306 Waste)**, and **GRI 400 (Social: 401 Employment, 403 Safety, 404 Training, 405 Diversity, 418 Privacy)**. TechCorp tracks 133 disclosures (89 complete = 67% compliant). |
| **SASB** | Sustainability Accounting Standards Board | Industry-specific financial materiality standards. ESGPulse implements the **Technology Sector (Software & IT Services TC-SI / Hardware TC-HW)** standards covering Data Center Energy, Data Privacy & User Security, Workforce Diversity, and Systemic Risk Management (41 standards, 29 met = 71% compliant). |
| **TCFD** | Task Force on Climate-related Financial Disclosures | Structured climate risk framework across **4 Core Pillars**: Governance, Strategy (1.5°C scenario analysis), Risk Management (ERM integration), and Metrics & Targets (Scope 1-3 GHG accounting) (24 requirements, 13 complete = 54% compliant). |

### Core Metrics & Data Integrity
- **Scope 1 Emissions**: Direct emissions from owned backup diesel generators and corporate fleet: `12,450 tCO2e` (-12.3% YoY reduction ✓).
- **Scope 2 Emissions**: Indirect market-based emissions from purchased electricity: `8,730 tCO2e` (-5.1% YoY reduction ✓).
- **Scope 3 Emissions**: Value chain emissions (travel, suppliers, cloud hosting): `67,200 tCO2e` (+2.1% YoY increase ✗).
- **Total Consolidated Carbon Footprint**: `88,380 tCO2e`.
- **Total Energy Consumption**: `47,230 MWh` (Renewable clean power: `20,310 MWh` / 43.0%).
- **Water & Waste**: `1.2M L` water consumed (`340K L` recycled / 28.3%); `450 tons` waste generated (`312 tons` diverted from landfill / 69.3%).
- **Workforce**: `24,700` global employees; `38%` women overall; `31%` women in leadership; `0.12` Lost Time Injury Rate (LTIR).
- **Governance**: `67%` independent board; `98.7%` anti-corruption training completion; `0` data breaches.

---

## Application Architecture & Routes

- **`/` — Compliance Dashboard**: Company header (`TechCorp Industries Ltd | FY 2025-26`), 3 framework KPI cards, the signature **198-cell Compliance Heatmap** with filter/search and inspection drawer, **Priority Action List (Top 10 Critical Gaps)**, and annual target progress trackers.
- **`/metrics` — ESG Metrics Hub**: Three pillar tabs (**Environmental**, **Social**, **Governance**) with Recharts 5-year emissions trajectory AreaChart, BU energy mix stacked bar chart, water/waste metrics, and workforce/CSR metrics.
- **`/frameworks` — Framework Mapper**: Filterable disclosure registers for **GRI (40+ rows)**, **SASB (TC-SI standards)**, and **TCFD (4 Pillars)**. Features **"View Disclosure Draft"** assurance modals, **"Assign Data Collection"** modals, and interactive TCFD narrative draft editors.
- **`/collection` — Data Collection & Quality Review**: Multi-tenant data request intake queue with status filters (Pending, In Progress, Submitted, Approved, Overdue). Includes operational BU data submission modal with evidence upload and sustainability manager audit review (outlier detection check, plausibility audit, approve/reject workflow).
- **`/reports` — Disclosure Reports & Exports**: Multi-format reporting engine with parameter selector (GRI, SASB, TCFD, Integrated), live preview with official content indexes, printable PDF mode, auditor CSV export, XBRL-ready JSON download, and historical report registry.

---

## Tech Stack & Color Tokens

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Data Visualizations**: Recharts (AreaChart, Stacked BarChart)
- **Icons**: Lucide React
- **Brand Palette**:
  - Primary Navy: `#1A2B4A`
  - Accent Green (Sustainability Brand): `#16A34A`
  - Success: `#22C55E`
  - Warning / Partial: `#F59E0B`
  - Danger / Gap: `#EF4444`
  - Background Tint: `#F0FDF4`
  - Framework Badges: GRI (Blue `#2563EB`), SASB (Purple `#7C3AED`), TCFD (Teal `#0D9488`)

---

## Local Development Instructions

```bash
# Navigate to the project folder
cd "c:\Users\Danwantari\Downloads\New projects\esgpulse"

# Install dependencies (if not already installed)
npm install

# Start Next.js development server on port 3001
npm run dev -- -p 3001

# Open in browser
http://localhost:3001
```

---

## Vercel Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. **Import Repository**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository: `Danwantari/esgpulse`
2. **Framework Preset**: Next.js (automatically detected)
3. **Build Command**: `next build` (default)
4. **Output Directory**: `.next` (default)
5. **Install Command**: `npm install` (default)
6. Click **Deploy**. Vercel will build and assign an instant production URL with automatic SSL.

---

## Resume Bullets Produced by This Project

1. *"Designed ESGPulse — an enterprise ESG data aggregation and compliance tracking platform; mapped 133 GRI disclosures, 41 SASB technology standards, and 24 TCFD requirements into a compliance heatmap showing gap status, responsible ownership, and data collection workflows."*
2. *"Built framework mapper and disclosure report generator supporting GRI, SASB, and TCFD; modeled multi-tenant data collection across 3 business units with data quality review, approval workflows, and regulatory-ready export in PDF, Excel, and JSON."*
