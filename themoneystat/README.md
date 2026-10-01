# themoneystat 💸

> **Fast, Privacy-First Multi-UPI Transaction Analyzer & Financial Dashboard**  
> 100% Client-Side. Zero backend tracking. Your financial data never leaves your browser.

---

## 🌟 Overview

**themoneystat** is a lightweight, high-performance web application designed to analyze and visualize UPI transaction statements from India's leading digital payment apps. 

Whether analyzing a single statement or combining statements across multiple payment apps, **themoneystat** instantly extracts, normalizes, categorizes, and charts your spending habits without uploading your financial data to any external server.

---

## 📱 Supported Payment Providers

| Provider | Supported Formats | Statement Details |
|---|---|---|
| **PhonePe** | `.csv`, `.pdf` | PhonePe official transaction history export |
| **Google Pay** | `.pdf` | GPay monthly/custom transaction statement |
| **Paytm** | `.pdf`, `.xlsx` | Paytm Payments Bank / UPI statement exports |
| **super.money** | `.pdf` | super.money transaction receipts / statement |
| **Slice** | `.pdf` | Slice account transaction statement |
| **MobiKwik** | `.pdf` | MobiKwik wallet & UPI statement |

---

## ✨ Key Features

### 1. Single App Analysis
- Drop or browse statements directly for any of the 6 supported apps.
- Automatic parser detection for PDFs, CSVs, and Excel (`.xlsx`) files.
- High-speed parsing with local **PDF.js v4** (no cross-origin latency).

### 2. Multiple Apps Combined Mode
- **Unified Finances**: Combine statements from **any 2 or more apps** (e.g., Slice + MobiKwik, or PhonePe + GPay + Paytm).
- **Responsive Selection Grid**: Interactive cards for each provider with green status badges (`✓ Uploaded`) upon file selection.
- **Dynamic Activation**: The *"Analyze Combined Data"* button unlocks automatically once 2 or more statements are added.
- **Provider Tags**: Every transaction is badged with the source provider (`PhonePe`, `GPay`, `Paytm`, `super.money`, `Slice`, `MobiKwik`) in the transaction ledger.
- **Dynamic Combined Badge**: Top bar displays provider icons representing all apps included in the active analysis.

### 3. Comprehensive Dashboard Analytics
- **KPI Metrics**: Total Debits (Spending), Total Credits (Inflow), Net Cash Flow, Total Transactions, Average Transaction Size, and Active Date Range.
- **Categorization Engine**: Automatically sorts expenses into intuitive categories (Food & Dining, Shopping, Transfers, Utilities/Bills, Groceries, Travel, Entertainment, Health, and more).
- **Interactive Visualizations** (powered by Chart.js):
  - Category breakdown donut & bar charts with percentages.
  - Cash flow timelines & daily/monthly spending distribution.
  - Merchant leaderboard (top frequent and highest spend destinations).
  - Time-of-day & peak spending day patterns.
- **Interactive Story Mode ("Insights")**:
  - Story-style presentation summarizing your biggest spends, monthly breakdowns, and financial highlights.
- **Filterable & Searchable Ledger**:
  - Filter by transaction type (`All`, `Debits`, `Credits`).
  - Filter by spending category.
  - Real-time search by merchant name, description, or notes.
  - Sortable and paginated.

### 4. Privacy & Performance by Design
- **100% Client-Side**: All parsing and math are executed directly inside your browser via JavaScript Web Workers and `FileReader` APIs.
- **Zero Network Transmission**: Your bank balance, names, UPI IDs, and transaction amounts are never sent over the internet.
- **Offline & Low-Bandwidth Resilient**: Bundled local PDF rendering engine with automatic CDN fallback.
- **Responsive & Accessible**:
  - Adaptive layouts for Mobile, Tablet, and Desktop.
  - Smooth dark/light theme switching with preference persistence.
  - Interactive background particle canvas and hover effects.

---

## 🛠 Tech Stack

- **HTML5 / CSS3**: Modern glassmorphism design, CSS variables, responsive grid & flexbox layouts.
- **JavaScript (ES6+)**: Modular vanilla JS (`app.js`) with zero heavyweight framework overhead.
- **PDF.js v4**: Client-side PDF text extraction and layout reconstruction (`pdf.min.mjs`, `pdf.worker.min.mjs`).
- **SheetJS (`xlsx`)**: Browser-based Excel parsing for Paytm spreadsheets.
- **Chart.js v4 & Chartjs Plugin Datalabels**: Hardware-accelerated canvas data visualization.

---

## 🚀 Getting Started

### Prerequisites
- Python 3 installed on your system (or any standard static HTTP server).

### Running Locally

1. **Clone or navigate to the repository directory**:
   ```bash
   cd themoneystat
   ```

2. **Start the local HTTP server**:
   ```bash
   python3 -m http.server 0253
   ```
   *(Or choose any custom port such as `python3 -m http.server 8000`)*

3. **Open in your web browser**:
   - [http://localhost:253/](http://localhost:253/)
   - [http://127.0.0.1:253/](http://127.0.0.1:253/)

---

## 📂 Project Structure

```
themoneystat/
├── index.html                           # Main web page layout and upload views
├── style.css                            # Glassmorphic styles, responsive layouts & themes
├── app.js                               # Parsers, analytics crunching, UI logic & charts
│
├── pdf.min.mjs                          # Local PDF.js library
├── pdf.worker.min.mjs                   # Local PDF.js web worker
│
├── favicon.ico                          # Site favicon
├── favicon-16x16.png                    # Favicon (16x16)
├── favicon-32x32.png                    # Favicon (32x32)
├── apple-touch-icon.png                 # Apple Touch icon
├── themoneystat-icon.png                # App branding logo
│
├── phonepe-icon.png                     # PhonePe brand icon
├── gpay-icon.png                        # Google Pay brand icon
├── paytm-icon.png                       # Paytm brand icon
├── super-money-icon.png                 # super.money brand icon
├── slice.png                            # Slice brand icon
├── mobikwik.png                         # MobiKwik brand icon
│
└── README.md                            # Project documentation
```

---

## 🔒 Security & Privacy Guarantee

- **themoneystat** does not require user registration, logins, or API keys.
- Statements are parsed strictly in memory and garbage collected upon closing or clicking **"New"**.
- No cookies or remote telemetry trackers are used.

---

## 📄 License

This project is intended for personal and community financial management and analysis. All trademarks and brand icons belong to their respective owners.
