# MCIT AI — Sovereign Enterprise AI Platform

**Owner:** Ministry of Communications and Information Technology (MCIT)  
**Lead Developer:** Eng Ahmed Arfa  
**Default Assistant:** Tut Agent (`/avatars/mcit/tutankhamun.webp`)  
**Official Portal:** [https://mcit.gov.eg](https://mcit.gov.eg)  

---

## Strategic Overview

MCIT AI is the sovereign, private AI platform designed specifically for the Ministry of Communications and Information Technology (MCIT). It delivers localized intelligent agents, interactive document craft tools (PowerPoint, PDF, Infographics), and private local inference with zero data leakage.

---

## Core Pillars & Capabilities

| Module | Features & Capabilities |
| :--- | :--- |
| **Ownership & Identity** | Fully owned by **MCIT**, developed by **Eng Ahmed Arfa**. Complete de-branding of external logos; official Seshat MCIT logo and Tutankhamun default identity. |
| **Authentication & Governance** | **Public Registration is Strictly Disabled**. Accounts are provisioned and monitored exclusively by the MCIT Administrator via `/admin`. |
| **Local AI Inference Engine** | Primary model: **Gemma 4 e4b** (via on-premise Ollama). Fallback / analytical models: **Qwen 2.5 7B**, **Qwen 2.5 14B**, **Qwen 3 4B**. |
| **DeckCraft (PPTX Studio)** | Full slide generation and live interactive editor with direct Microsoft PowerPoint (`.pptx`) export powered by `pptxgenjs`. |
| **PDF Craft (Report Studio)** | Structured executive briefing generator with summary, headings, recommendations, and direct `.pdf` export powered by `jspdf`. |
| **Infographic Visualizer** | Interactive metrics dashboard with KPI callouts, stat cards, and printable summaries. |
| **Egyptian Avatar Gallery** | 9 historical avatars in WebP format (`akhenaten`, `cleopatra`, `hatshepsut`, `khufu`, `nefertari`, `nefertiti`, `ramesses`, `thoth-avatar`, `tutankhamun`). |
| **Zero-Telemetry Assurance** | All third-party analytics (PostHog, Sentry, Langfuse) are fully disabled (`TELEMETRY_DISABLED=1`). Data never leaves premise. |

---

## Administrator Control Center

Operators manage users, credentials, and telemetry at:
- **URL:** `http://localhost:3010/admin`
- **Authentication:** Gated by `MCIT_ADMIN_BOOTSTRAP_TOKEN` (configured in server `.env`).
- **Capabilities:** Provision new users with passwords, assign roles (`admin` / `user`), view system health, and monitor active models.
