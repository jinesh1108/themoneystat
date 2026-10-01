/* ============================================================
   themoneystat · Engine v4 — Heavenly Animated
   ============================================================ */

const ICO = {
    arrowUp:    `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 16V4m0 0L5 9m5-5l5 5"/></svg>`,
    arrowDown:  `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4v12m0 0l5-5m-5 5L5 11"/></svg>`,
    wallet:     `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="16" height="12" rx="2"/><path d="M2 9h16"/><circle cx="14" cy="13" r="1"/></svg>`,
    trophy:     `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h8v6a4 4 0 01-8 0V2z"/><path d="M6 4H3a1 1 0 00-1 1v1a3 3 0 003 3h1m8-5h3a1 1 0 011 1v1a3 3 0 01-3 3h-1"/><path d="M7 12v2h6v-2"/><path d="M8 14v3h4v-3"/></svg>`,
    barChart:   `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 15V8m4 7V5m4 10V3m4 12V7"/></svg>`,
    pieChart:   `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 2a7 7 0 107 7h-7V2z"/><path d="M13 2.26A7 7 0 0115.74 5H13V2.26z"/></svg>`,
    store:      `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-6h9L15 9"/><path d="M3 9v7a1 1 0 001 1h10a1 1 0 001-1V9"/><path d="M3 9h12"/><path d="M7 13h4"/></svg>`,
    users:      `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="6" r="3"/><path d="M1 16v-1a4 4 0 014-4h4a4 4 0 014 4v1"/><circle cx="14" cy="6" r="2"/><path d="M14 11a3 3 0 013 3v1"/></svg>`,
    clock:      `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="7"/><path d="M9 5v4l3 2"/></svg>`,
    trendUp:    `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 14l4-4 3 3 7-7"/><path d="M12 6h4v4"/></svg>`,
    calendar:   `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="14" height="13" rx="2"/><path d="M6 1v4m6-4v4M2 8h14"/></svg>`,
    layers:     `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l7 4 7-4"/><path d="M2 13l7 4 7-4"/><path d="M9 1L2 5l7 4 7-4L9 1z"/></svg>`,
    s_calendar: `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="44" height="38" rx="6"/><path d="M18 4v10m20-10v10M6 22h44"/><circle cx="20" cy="33" r="3"/><circle cx="36" cy="33" r="3"/></svg>`,
    s_walletIn: `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="44" height="32" rx="5"/><path d="M6 24h44"/><circle cx="38" cy="34" r="3"/><path d="M28 6v10m0 0l-4-4m4 4l4-4"/></svg>`,
    s_walletOut:`<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="44" height="32" rx="5"/><path d="M6 24h44"/><circle cx="38" cy="34" r="3"/><path d="M28 16V6m0 0l-4 4m4-4l4 4"/></svg>`,
    s_scale:    `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M28 8v40"/><path d="M10 18l18-8 18 8"/><path d="M10 18l-2 12h14l-2-12m16 0l-2 12h14l-2-12"/></svg>`,
    s_trophy:   `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h20v14a10 10 0 01-20 0V8z"/><path d="M18 14h-6a2 2 0 00-2 2v2a6 6 0 006 6h2m20-10h6a2 2 0 012 2v2a6 6 0 01-6 6h-2"/><path d="M22 32v4h12v-4"/><path d="M24 36v6h8v-6"/></svg>`,
    s_folder:   `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18V14a4 4 0 014-4h10l4 6h22a4 4 0 014 4v22a4 4 0 01-4 4H10a4 4 0 01-4-4V18z"/><path d="M20 30h16m-16 6h10"/></svg>`,
    s_user:     `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="20" r="9"/><path d="M8 48v-2a14 14 0 0140 0v2"/></svg>`,
    s_day:      `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="44" height="38" rx="6"/><path d="M18 4v10m20-10v10M6 22h44"/><rect x="14" y="28" width="8" height="8" rx="2" fill="currentColor" opacity=".2"/></svg>`,
    s_clock:    `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="28" r="22"/><path d="M28 14v14l10 6"/></svg>`,
    s_coins:    `<svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="22" cy="20" rx="14" ry="6"/><path d="M8 20v10c0 3.3 6.3 6 14 6s14-2.7 14-6V20"/><path d="M8 26c0 3.3 6.3 6 14 6s14-2.7 14-6"/><ellipse cx="36" cy="34" rx="12" ry="5" opacity=".3"/></svg>`,
};

// ── State ──────────────────────────────────────────────────
let DATA = null, charts = [], simple = false;
const PAGE_SIZE = 50;
let tblPage = 0;

// ── Background Effects ─────────────────────────────────────
// 1. Particle System (High Performance & GPU Friendly)
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let resizeTimer = null;
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resizeCanvas(); initParticles(); }, 150);
}, { passive: true });
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.4;
        this.spdX = (Math.random() - 0.5) * 0.15; 
        this.spdY = (Math.random() - 0.5) * 0.15;
        this.op = Math.random();
        this.opDir = (Math.random() * 0.015) + 0.005;
        if (Math.random() > 0.5) this.opDir *= -1;
    }
    update() {
        this.x += this.spdX; this.y += this.spdY;
        if (this.x < 0 || this.x > canvas.width) this.spdX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.spdY *= -1;
        
        this.op += this.opDir;
        if (this.op >= 0.8) { this.op = 0.8; this.opDir = -(Math.random() * 0.02 + 0.005); }
        if (this.op <= 0.1) { this.op = 0.1; this.opDir = (Math.random() * 0.02 + 0.005); }
    }
    draw(isLight) {
        ctx.fillStyle = isLight ? `rgba(13, 148, 136, ${this.op * 0.6})` : `rgba(255, 255, 255, ${this.op * 0.6})`;
        ctx.fillRect(this.x, this.y, this.size * 2, this.size * 2);
    }
}
function initParticles() {
    particles = [];
    const count = window.innerWidth < 768 ? 30 : 80; 
    for (let i = 0; i < count; i++) particles.push(new Particle());
}
function animParticles() {
    // Pause rendering when tab is hidden or when slideshow overlay covers the view
    if (document.hidden) {
        requestAnimationFrame(animParticles);
        return;
    }
    const sShow = document.getElementById('slideshow');
    if (sShow && !sShow.classList.contains('hidden')) {
        requestAnimationFrame(animParticles);
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(isLight);
    }
    requestAnimationFrame(animParticles);
}
initParticles(); animParticles();

// 2. Cursor Glow (Zero Idle CPU, GPU Hardware Accelerated)
const cursor = document.getElementById('cursorGlow');
let curX = window.innerWidth / 2, curY = window.innerHeight / 2;
let tgX = curX, tgY = curY;
let cursorActive = false;

document.addEventListener('mousemove', e => {
    tgX = e.clientX;
    tgY = e.clientY;
    if (!cursorActive && window.innerWidth >= 768) {
        cursorActive = true;
        requestAnimationFrame(animCursor);
    }
}, { passive: true });

function animCursor() {
    if (window.innerWidth < 768) {
        cursorActive = false;
        return;
    }
    const dx = tgX - curX, dy = tgY - curY;
    if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        curX = tgX; curY = tgY;
        cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate3d(-50%, -50%, 0)`;
        cursorActive = false;
        return;
    }
    curX += dx * 0.15; curY += dy * 0.15;
    cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate3d(-50%, -50%, 0)`;
    requestAnimationFrame(animCursor);
}

// 3. 3D Tilt Effect (Cached Layout to Eliminate Reflows)
function applyTilt() {
    if (window.innerWidth < 1024 || 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)) return;
    const cards = document.querySelectorAll('.panel, .kpi, .drop');
    cards.forEach(c => {
        if (c._tiltBound) return;
        c._tiltBound = true;
        let rect = null;
        c.addEventListener('mouseenter', () => { rect = c.getBoundingClientRect(); }, { passive: true });
        c.addEventListener('mousemove', e => {
            if (!rect) rect = c.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const cx = rect.width / 2, cy = rect.height / 2;
            const tx = ((x - cx) / cx) * 5; const ty = -((y - cy) / cy) * 5;
            c.style.transform = `perspective(1000px) rotateX(${ty}deg) rotateY(${tx}deg) scale3d(1.02, 1.02, 1.02)`;
        }, { passive: true });
        c.addEventListener('mouseleave', () => {
            rect = null;
            c.style.transform = '';
        }, { passive: true });
    });
}

// 4. Typewriter Effect (Idle When Landing Hidden)
const twEl = document.getElementById('typewriter');
const texts = ["Uncover your spending habits.", "Track every rupee beautifully.", "Your financial life, visualized.", "Money management, made heavenly."];
let txtIdx = 0, charIdx = 0, isDel = false;
function type() {
    const landing = document.getElementById('landing');
    if (landing && landing.classList.contains('hidden')) {
        setTimeout(type, 1500);
        return;
    }
    const cur = texts[txtIdx];
    if (isDel) {
        twEl.textContent = cur.substring(0, charIdx - 1); charIdx--;
    } else {
        twEl.textContent = cur.substring(0, charIdx + 1); charIdx++;
    }
    let speed = isDel ? 30 : 60;
    if (!isDel && charIdx === cur.length) { speed = 2500; isDel = true; }
    else if (isDel && charIdx === 0) { isDel = false; txtIdx = (txtIdx + 1) % texts.length; speed = 400; }
    setTimeout(type, speed);
}
setTimeout(type, 800);

// 5. Scroll Progress (Throttled via requestAnimationFrame)
const scFill = document.getElementById('scrollFill');
let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
            const wS = document.documentElement.scrollTop;
            const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scFill.style.width = h > 0 ? `${(wS / h) * 100}%` : '0%';
            scrollTicking = false;
        });
    }
}, { passive: true });

// ── Theme ──────────────────────────────────────────────────
const th = () => document.documentElement.getAttribute('data-theme') || 'dark';
const tv = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

function setChartDefaults() {
    const d = th() === 'dark';
    Chart.defaults.color = d ? 'rgba(255,255,255,0.85)' : '#000000';
    Chart.defaults.font.family = "'DM Sans',system-ui,sans-serif";
    Chart.defaults.plugins.legend.labels.color = d ? '#ffffff' : '#000000';
    Chart.defaults.plugins.legend.labels.padding = 16;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.pointStyleWidth = 10;
    Chart.defaults.plugins.tooltip.backgroundColor = d ? 'rgba(20,20,25,0.95)' : 'rgba(255,255,255,0.95)';
    Chart.defaults.plugins.tooltip.borderColor = tv('--brd-h');
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.cornerRadius = 10;
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.titleColor = d ? '#ffffff' : '#000000';
    Chart.defaults.plugins.tooltip.bodyColor = d ? 'rgba(255,255,255,0.9)' : '#000000';
    Chart.defaults.plugins.tooltip.titleFont = { weight: '600', size: 13 };
    Chart.defaults.plugins.tooltip.bodyFont = { size: 12 };
    Chart.defaults.animation.duration = 400;
    Chart.defaults.animation.easing = 'easeOutCubic';
}
setChartDefaults();

const PAL = ['#34d399','#60a5fa','#a78bfa','#fbbf24','#fb7185','#2dd4bf','#f97316','#818cf8','#38bdf8','#e879f9','#84cc16','#f43f5e'];
const SPAL = ['#059669','#dc2626','#2563eb','#d97706','#7c3aed','#0d9488','#e11d48','#0284c7'];
const pal = () => simple ? SPAL : PAL;

// ── Categories ─────────────────────────────────────────────
const CAT_RULES = [
    { p: /irctc|indian railways|railway/i, c: 'Travel & Transport', s: 'Travel' },
    { p: /petrol|petroleum|fuel|bp petrol/i, c: 'Fuel', s: 'Fuel' },
    { p: /metro|pune metro/i, c: 'Metro', s: 'Metro' },
    { p: /zomato|swiggy|zepto|instamart/i, c: 'Food Delivery', s: 'Delivery' },
    { p: /biryani|shawarma|chicken|chaha|tea|lassi|simply south/i, c: 'Dining Out', s: 'Dining' },
    { p: /snack|moraya|swami snacks|shivam snak/i, c: 'Snacks', s: 'Snacks' },
    { p: /dairy|tikona|farm/i, c: 'Grocery & Dairy', s: 'Grocery' },
    { p: /electricity|bill paid|recharge|mobile recharged/i, c: 'Bills & Utilities', s: 'Bills' },
    { p: /atm|hdfc atm/i, c: 'ATM Withdrawal', s: 'ATM' },
    { p: /pine labs/i, c: 'POS Payment', s: 'Card' },
    { p: /ganesh enterprises/i, c: 'Shopping', s: 'Shopping' },
    { p: /cashfree|dreamplug/i, c: 'Platform Transfer', s: 'Transfer' },
    { p: /interest|interest cr/i, c: 'Interest & Earnings', s: 'Interest' },
    { p: /round ups|weekly saver|saver atom/i, c: 'Savings & Investments', s: 'Savings' },
    { p: /groww|zerodha|broker|securities/i, c: 'Investments', s: 'Invest' },
    { p: /snapmint|northern arc|credit advi|emi/i, c: 'Loans & EMI', s: 'Loan' },
    { p: /amazon|flipkart|blinkit|qwikcilver/i, c: 'Shopping', s: 'Shopping' },
    { p: /goibibo|makemytrip|redbus|zingbus|confirm ticket|confirmtkt/i, c: 'Travel & Transport', s: 'Travel' },
    { p: /bill payment/i, c: 'Bills & Utilities', s: 'Bills' },
    { p: /cashback|reward/i, c: 'Cashback & Rewards', s: 'Rewards' },
    { p: /add money|wallet/i, c: 'Wallet Topup', s: 'Topup' },
];
function catOf(d) { for (const r of CAT_RULES) if (r.p.test(d)) return r.c; return 'Person / Other'; }
function sCat(c) { const r = CAT_RULES.find(x => x.c === c); return r ? r.s : 'Other'; }

// ── CSV Parser ─────────────────────────────────────────────
function parseCSV(txt) {
    const lines = txt.split('\n').map(l => l.replace(/\r$/, ''));
    let hi = lines.findIndex(l => /^Date,Time,Transaction/i.test(l));
    if (hi < 0) hi = lines.findIndex(l => /Date.*Time.*Transaction/i.test(l));
    if (hi < 0) throw new Error('Header row not found');
    const txs = [];
    for (let i = hi + 1; i < lines.length; i++) {
        const l = lines[i].trim();
        if (!l || /^(This is|Disclaimer)/i.test(l)) continue;
        const f = csvLine(l); if (f.length < 8) continue;
        const amt = parseFloat(f[7].replace(/,/g, '')); if (isNaN(amt)) continue;
        const dt = pDate(f[0], f[1]); if (!dt) continue;
        txs.push({ date: dt, ds: f[0].replace(/"/g, ''), ts: f[1].trim(), det: f[2].trim(),
            type: f[5].trim().toUpperCase(), amt, cat: catOf(f[2]), merch: mName(f[2]) });
    }
    return txs.sort((a, b) => a.date - b.date);
}
function csvLine(l) { const f = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { f.push(c); c = ''; } else c += ch; } f.push(c); return f; }
function pDate(d, t) { const v = new Date(`${d.replace(/"/g, '').trim()} ${t.trim()}`); return isNaN(v) ? null : v; }
function mName(d) { let n = d.replace(/^(Paid to|Received from)\s*/i, '').trim().replace(/PRIVATE LIMI$/, 'PRIVATE LIMITED'); if (n === n.toUpperCase() && n.length > 4) n = n.split(' ').map(w => w[0] + w.slice(1).toLowerCase()).join(' '); return n; }

// ── Analytics ──────────────────────────────────────────────
function crunch(txs) {
    const cr = txs.filter(t => t.type === 'CREDIT'), db = txs.filter(t => t.type === 'DEBIT');
    const ti = cr.reduce((s, t) => s + t.amt, 0), te = db.reduce((s, t) => s + t.amt, 0), nf = ti - te;
    const big = db.reduce((m, t) => t.amt > m.amt ? t : m, { amt: 0 });

    const cm = {}; db.forEach(t => cm[t.cat] = (cm[t.cat] || 0) + t.amt);
    let cats = Object.entries(cm).sort((a, b) => b[1] - a[1]);
    if (cats.length > 8) { const top = cats.slice(0, 7), rest = cats.slice(7).reduce((s, [, v]) => s + v, 0); cats = [...top, ['Others', rest]]; }

    const mm = {}; db.forEach(t => { if (!mm[t.merch]) mm[t.merch] = { t: 0, n: 0 }; mm[t.merch].t += t.amt; mm[t.merch].n++; });
    const merch = Object.entries(mm).map(([k, v]) => ({ name: k, ...v })).sort((a, b) => b.t - a.t).slice(0, simple ? 7 : 10);

    const im = {}; cr.forEach(t => im[t.merch] = (im[t.merch] || 0) + t.amt);
    let inc = Object.entries(im).sort((a, b) => b[1] - a[1]);
    if (inc.length > 8) { const top = inc.slice(0, 7), rest = inc.slice(7).reduce((s, [, v]) => s + v, 0); inc = [...top, ['Others', rest]]; }

    const dm = {}; txs.forEach(t => { const k = t.date.toISOString().slice(0, 10); if (!dm[k]) dm[k] = { i: 0, e: 0 }; if (t.type === 'CREDIT') dm[k].i += t.amt; else dm[k].e += t.amt; });
    const dks = Object.keys(dm).sort();
    if (dks.length > 1) { const s = new Date(dks[0]), e = new Date(dks[dks.length - 1]); for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) { const k = d.toISOString().slice(0, 10); if (!dm[k]) dm[k] = { i: 0, e: 0 }; } }
    let daily = Object.entries(dm).sort((a, b) => a[0].localeCompare(b[0]));

    let weeklyMode = false;
    if (daily.length > 60) {
        weeklyMode = true; const wm = {};
        daily.forEach(([d, v]) => {
            const dt = new Date(d); const wk = new Date(dt); wk.setDate(dt.getDate() - dt.getDay());
            const k = wk.toISOString().slice(0, 10);
            if (!wm[k]) wm[k] = { i: 0, e: 0 }; wm[k].i += v.i; wm[k].e += v.e;
        });
        daily = Object.entries(wm).sort((a, b) => a[0].localeCompare(b[0]));
    }

    let cum = 0; const cumd = daily.map(([d, v]) => { cum += v.i - v.e; return { d, v: cum }; });



    const dn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dbSorted = [...db].sort((a, b) => b.amt - a.amt);
    const outlierCount = Math.max(1, Math.floor(db.length * 0.01));
    const outliers = new Set(dbSorted.slice(0, outlierCount));
    
    const dow = new Array(7).fill(0); 
    db.forEach(t => { 
        if (!outliers.has(t)) dow[t.date.getDay()] += t.amt; 
    });

    const tb = { 'Morning': 0, 'Afternoon': 0, 'Evening': 0, 'Night': 0 };
    db.forEach(t => { 
        if (!outliers.has(t)) {
            const h = t.date.getHours(); 
            if (h >= 6 && h < 12) tb.Morning += t.amt; 
            else if (h >= 12 && h < 17) tb.Afternoon += t.amt; 
            else if (h >= 17 && h < 21) tb.Evening += t.amt; 
            else tb.Night += t.amt; 
        }
    });

    const sz = { '< ₹50': 0, '₹50–200': 0, '₹200–500': 0, '₹500–1K': 0, '₹1K–5K': 0, '> ₹5K': 0 };
    db.forEach(t => { if (t.amt < 50) sz['< ₹50']++; else if (t.amt < 200) sz['₹50–200']++; else if (t.amt < 500) sz['₹200–500']++; else if (t.amt < 1000) sz['₹500–1K']++; else if (t.amt < 5000) sz['₹1K–5K']++; else sz['> ₹5K']++; });

    const nd = Object.keys(dm).length || 1;
    return { ti, te, nf, cr, db, big, cats, merch, inc, daily, weeklyMode, cumd, tb, dow, dn, sz, nd, avg: te / nd, maxDay: dow.indexOf(Math.max(...dow)), topCat: cats[0] || ['None', 0], topInc: inc[0] || ['None', 0], d0: txs[0]?.date, d1: txs[txs.length - 1]?.date, txs };
}

const fc  = n => '₹' + Math.abs(n).toLocaleString('en-IN', { maximumFractionDigits: 0 });
const fc2 = n => '₹' + Math.abs(n).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function fcs(n) { const a = Math.abs(n); if (a >= 100000) return '₹' + (a / 100000).toFixed(1) + 'L'; if (a >= 1000) return '₹' + (a / 1000).toFixed(1) + 'K'; return '₹' + Math.round(a); }
const fd = d => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

function countUp(el, target, dur = 700) {
    const t0 = performance.now(), neg = target < 0, abs = Math.abs(target);
    (function step(now) {
        const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4); // Quartic ease out
        el.textContent = (neg ? '-₹' : '₹') + Math.round(abs * e).toLocaleString('en-IN');
        if (p < 1) requestAnimationFrame(step);
    })(t0);
}
function nuke() { charts.forEach(c => c.destroy()); charts = []; }

// ── Slideshow ──────────────────────────────────────────────
function mkSlides(D) {
    const sr = D.ti > 0 ? ((D.nf / D.ti) * 100) : 0;
    const tp = Object.entries(D.tb).sort((a, b) => b[1] - a[1])[0];
    const microTxs = D.db.filter(t => t.amt < 100);
    const smC = microTxs.length;
    const smP = D.db.length > 0 ? ((smC / D.db.length) * 100).toFixed(0) : 0;
    const smTotalAmt = microTxs.reduce((s, t) => s + t.amt, 0);
    const smAmtP = D.te > 0 ? ((smTotalAmt / D.te) * 100).toFixed(1) : 0;
    return [
        { ico: ICO.s_calendar, cls: 'teal', lbl: 'STATEMENT PERIOD', val: `${D.nd} Days`, vc: 'teal', desc: `${fd(D.d0)} — ${fd(D.d1)} · ${D.txs.length} transactions processed` },
        { ico: ICO.s_walletIn, cls: 'green', lbl: 'TOTAL INCOME', val: fc(D.ti), vc: 'green', desc: `${D.cr.length} credits from ${D.inc.length} sources` },
        { ico: ICO.s_walletOut, cls: 'red', lbl: 'TOTAL SPENT', val: fc(D.te), vc: 'red', desc: `${D.db.length} debits — about ${fc(D.avg)} per day on average` },
        { ico: ICO.s_scale, cls: D.nf >= 0 ? 'green' : 'red', lbl: 'NET CASH FLOW', val: (D.nf >= 0 ? '+' : '−') + fc(D.nf), vc: D.nf >= 0 ? 'green' : 'red', desc: D.nf >= 0 ? `You saved ${sr.toFixed(1)}% of your income` : `You overspent by ${fc(Math.abs(D.nf))}` },
        { ico: ICO.s_trophy, cls: 'amber', lbl: 'BIGGEST SINGLE SPEND', val: fc(D.big.amt), vc: 'amber', desc: `Paid to ${D.big.merch}` },
        { ico: ICO.s_folder, cls: 'violet', lbl: 'TOP CATEGORY', val: simple ? sCat(D.topCat[0]) : D.topCat[0], vc: 'violet', desc: `${fc(D.topCat[1])} — ${((D.topCat[1] / D.te) * 100).toFixed(1)}% of all spending` },
        { ico: ICO.s_user, cls: 'blue', lbl: 'TOP INCOME SOURCE', val: D.topInc[0], vc: 'blue', desc: `Sent you ${fc(D.topInc[1])} — ${((D.topInc[1] / D.ti) * 100).toFixed(1)}% of income` },
        { ico: ICO.s_day, cls: 'teal', lbl: 'MOST EXPENSIVE DAY', val: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][D.maxDay], vc: 'teal', desc: `Total of ${fc(D.dow[D.maxDay])} spent on ${['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][D.maxDay]}s (excluding top outliers)` },
        { ico: ICO.s_clock, cls: 'violet', lbl: 'PEAK SPENDING TIME', val: tp[0], vc: 'violet', desc: `${fc(tp[1])} spent during ${tp[0].toLowerCase()} hours (excluding top outliers)` },
        { ico: ICO.s_coins, cls: 'amber', lbl: 'MICRO TRANSACTIONS', val: `${smP}%`, vc: 'amber', desc: `${smC}/${D.db.length} spends under ₹100, totaling ${fc(smTotalAmt)} (${smAmtP}% of total amount)` },
    ];
}

let si = 0, ss = [];
function openSlides(D) { ss = mkSlides(D); si = 0; document.getElementById('slideshow').classList.remove('hidden'); drawSlide(); }
function drawSlide() {
    const s = ss[si], b = document.getElementById('slideBody');
    b.innerHTML = `<div class="slide-ico ${s.cls}">${s.ico}</div><div class="slide-label">${s.lbl}</div><div class="slide-val ${s.vc}">${s.val}</div><div class="slide-desc">${s.desc}</div>`;
    document.getElementById('slideNum').textContent = `${si + 1} / ${ss.length}`;
    document.getElementById('slideFill').style.width = `${((si + 1) / ss.length) * 100}%`;
}
function sNx() { if (si < ss.length - 1) { si++; drawSlide(); } else closeS(); }
function sPv() { if (si > 0) { si--; drawSlide(); } }
function closeS() { document.getElementById('slideshow').classList.add('hidden'); }
document.getElementById('sNext').onclick = sNx;
document.getElementById('sPrev').onclick = sPv;
document.getElementById('sSkip').onclick = closeS;

// Story-style touch swipe and tap zone navigation for mobile
const slideOverlay = document.getElementById('slideshow');
let touchStartX = 0, touchStartY = 0, touchStartTime = 0;

slideOverlay.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = performance.now();
}, { passive: true });

slideOverlay.addEventListener('touchend', e => {
    if (slideOverlay.classList.contains('hidden')) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - touchStartX;
    const dy = endY - touchStartY;
    const elapsed = performance.now() - touchStartTime;

    // Ignore if touched on skip or navigation button
    if (e.target.closest('.s-btn') || e.target.closest('.slide-foot')) return;

    // Swipe gesture (horizontal distance > 40px and dominant over vertical)
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        if (dx < 0) sNx(); // swipe left -> next
        else sPv();       // swipe right -> previous
        return;
    }

    // Tap navigation (short tap < 300ms with minimal movement)
    if (elapsed < 300 && Math.abs(dx) < 15 && Math.abs(dy) < 15) {
        const screenWidth = window.innerWidth;
        if (endX > screenWidth * 0.5) sNx(); // tap right half -> next
        else sPv();                          // tap left half -> previous
    }
}, { passive: true });

document.addEventListener('keydown', e => {
    if (document.getElementById('slideshow').classList.contains('hidden')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); sNx(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); sPv(); }
    if (e.key === 'Escape') closeS();
});

// ── Chart Helper ───────────────────────────────────────────
function dlCfg(fmt, o = {}) {
    return { display: 'auto', color: tv('--lbl'), font: { size: simple ? 13 : 11, weight: '600', family: "'JetBrains Mono',monospace" }, anchor: o.anchor || 'end', align: o.align || 'end', offset: o.offset ?? 4, formatter: fmt, clamp: true, ...o };
}

// ── Render Dashboard ───────────────────────────────────────
function renderDash(D, isUpdate = false) {
    nuke(); setChartDefaults();
    
    if (!isUpdate) {
        const trans = document.getElementById('pageTrans');
        trans.classList.add('active');
        setTimeout(() => {
            buildDashUI(D);
            trans.classList.remove('active');
            openSlides(D);
        }, 800);
    } else {
        buildDashUI(D);
    }
}

function buildDashUI(D, showSlides = true) {
    if (typeof nuke === 'function') nuke();
    if (typeof setChartDefaults === 'function') setChartDefaults();
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('dash').classList.remove('hidden');
    document.getElementById('period').textContent = `${fd(D.d0)} — ${fd(D.d1)}`;

    const kr = document.getElementById('kpiRow');
    kr.innerHTML = `
    <div class="kpi"><div class="kpi-ico green">${ICO.arrowUp}</div><div class="kpi-body"><div class="kpi-label">Income</div><div class="kpi-val green" id="kvInc">₹0</div><div class="kpi-sub">${D.cr.length} transactions</div></div></div>
    <div class="kpi"><div class="kpi-ico red">${ICO.arrowDown}</div><div class="kpi-body"><div class="kpi-label">Spent</div><div class="kpi-val red" id="kvExp">₹0</div><div class="kpi-sub">${D.db.length} transactions</div></div></div>
    <div class="kpi"><div class="kpi-ico blue">${ICO.wallet}</div><div class="kpi-body"><div class="kpi-label">Net Flow</div><div class="kpi-val ${D.nf >= 0 ? 'green' : 'red'}" id="kvNet">₹0</div><div class="kpi-sub">${D.ti > 0 ? ((D.nf / D.ti) * 100).toFixed(1) : 0}% savings</div></div></div>
    <div class="kpi"><div class="kpi-ico amber">${ICO.trophy}</div><div class="kpi-body"><div class="kpi-label">Biggest Spend</div><div class="kpi-val amber" id="kvBig">₹0</div><div class="kpi-sub" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px;">${D.big.merch || '—'}</div></div></div>`;
    
    countUp(document.getElementById('kvInc'), D.ti, 700);
    countUp(document.getElementById('kvExp'), D.te, 700);
    countUp(document.getElementById('kvNet'), D.nf, 700);
    countUp(document.getElementById('kvBig'), D.big.amt, 700);

    const g = document.getElementById('chartGrid');
    g.innerHTML = `
    <div class="panel wide" style="animation-delay:0.05s"><h3 class="sec-title">${ICO.barChart} ${D.weeklyMode ? 'Weekly' : 'Daily'} Money Flow</h3><p class="sec-sub">Income vs spending ${D.weeklyMode ? '(aggregated by week)' : 'over time'}</p><div class="chart-box"><canvas id="cFlow"></canvas></div></div>
    <div class="panel" style="animation-delay:0.08s"><h3 class="sec-title">${ICO.pieChart} Spending Categories</h3><p class="sec-sub">Where your money goes</p><div class="chart-box donut"><canvas id="cCat"></canvas></div></div>
    <div class="panel" style="animation-delay:0.11s"><h3 class="sec-title">${ICO.store} Top Merchants</h3><p class="sec-sub">Ranked by total paid</p><div class="chart-box tall"><canvas id="cMerch"></canvas></div></div>
    <div class="panel" style="animation-delay:0.14s"><h3 class="sec-title">${ICO.users} Income Sources</h3><p class="sec-sub">Who pays you</p><div class="chart-box donut"><canvas id="cInc"></canvas></div></div>
    <div class="panel" style="animation-delay:0.17s"><h3 class="sec-title">${ICO.clock} Spending by Time</h3><p class="sec-sub">When you spend the most</p><div class="chart-box"><canvas id="cTime"></canvas></div></div>
    <div class="panel wide" style="animation-delay:0.20s"><h3 class="sec-title">${ICO.trendUp} Cumulative Cash Flow</h3><p class="sec-sub">Running balance over the period</p><div class="chart-box"><canvas id="cCum"></canvas></div></div>
    <div class="panel" style="animation-delay:0.23s"><h3 class="sec-title">${ICO.calendar} Spending by Day</h3><p class="sec-sub">Which days cost you most</p><div class="chart-box"><canvas id="cDow"></canvas></div></div>
    <div class="panel" style="animation-delay:0.26s"><h3 class="sec-title">${ICO.layers} Transaction Sizes</h3><p class="sec-sub">Distribution of spend amounts</p><div class="chart-box donut"><canvas id="cSize"></canvas></div></div>`;

    if (showSlides) openSlides(D);

    // Stagger chart and table initialization across animation frames to eliminate frame drops
    requestAnimationFrame(() => {
        chFlow(D); chCat(D);
        requestAnimationFrame(() => {
            chMerch(D); chInc(D);
            requestAnimationFrame(() => {
                chTime(D); chCum(D);
                requestAnimationFrame(() => {
                    chDow(D); chSize(D);
                    tblPage = 0; renderTbl(D); setupFilt(D);
                    applyTilt();
                });
            });
        });
    });
}

// ── Charts Implementation ──────────────────────────────────
const isMobile = () => window.innerWidth < 640;
const fs = simple ? 13 : (isMobile() ? 10 : 11);

function chFlow(D) {
    const lbl = D.daily.map(([d]) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }));
    const iD = D.daily.map(([, v]) => v.i), eD = D.daily.map(([, v]) => -v.e);
    const ctx = document.getElementById('cFlow');
    const c = new Chart(ctx, {
        type: 'bar',
        data: { labels: lbl, datasets: [
            { label: 'Income', data: iD, backgroundColor: tv('--green') + 'AA', borderColor: tv('--green'), borderWidth: 1, borderRadius: simple ? 8 : 4, borderSkipped: false, hoverBackgroundColor: tv('--green') },
            { label: 'Expense', data: eD, backgroundColor: tv('--red') + 'AA', borderColor: tv('--red'), borderWidth: 1, borderRadius: simple ? 8 : 4, borderSkipped: false, hoverBackgroundColor: tv('--red') },
        ]},
        options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
            scales: { x: { grid: { color: tv('--cgrid') }, ticks: { maxRotation: 50, autoSkip: true, maxTicksLimit: isMobile() ? 6 : (simple ? 10 : 20), font: { size: fs } } }, y: { grid: { color: tv('--cgrid') }, ticks: { callback: v => fcs(v), font: { size: fs } } } },
            plugins: { datalabels: dlCfg(v => Math.abs(v) < (simple ? 200 : (isMobile() ? 1000 : 500)) ? '' : fcs(v)), legend: { labels: { font: { size: simple ? 14 : 12 } } }, tooltip: { callbacks: { label: c => `${c.dataset.label}: ${fc2(Math.abs(c.raw))}` } } }
        }, plugins: [ChartDataLabels]
    }); charts.push(c);
}

function chCat(D) {
    const lbl = D.cats.map(([c]) => simple ? sCat(c) : c), val = D.cats.map(([, v]) => v), tot = val.reduce((s, v) => s + v, 0);
    const ctx = document.getElementById('cCat');
    const mobile = isMobile();
    const c = new Chart(ctx, {
        type: simple ? 'pie' : 'doughnut',
        data: { labels: lbl, datasets: [{ data: val, backgroundColor: pal().slice(0, lbl.length), borderColor: tv('--card'), borderWidth: 3, hoverOffset: 12 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: simple ? 0 : (mobile ? '50%' : '65%'),
            plugins: { legend: { position: mobile ? 'bottom' : 'right', labels: { font: { size: simple ? 13 : (mobile ? 10 : 11) }, padding: mobile ? 8 : (simple ? 14 : 10), generateLabels: chart => {
                const ds = chart.data.datasets[0];
                const cColor = th() === 'dark' ? '#ffffff' : '#000000';
                return chart.data.labels.map((l, i) => ({ text: `${l}  ${fcs(ds.data[i])}`, fontColor: cColor, fillStyle: ds.backgroundColor[i], strokeStyle: ds.backgroundColor[i], lineWidth: 0, hidden: !chart.getDataVisibility(i), index: i, pointStyle: 'rectRounded' }));
            } } },
                tooltip: { callbacks: { label: c => { const p = ((c.raw / tot) * 100).toFixed(1); return `${c.label}: ${fc(c.raw)} (${p}%)`; } } },
                datalabels: dlCfg(v => { const p = (v / tot) * 100; return p > (mobile ? 12 : 7) ? p.toFixed(0) + '%' : ''; }, { anchor: 'center', align: 'center', color: '#fff', font: { size: simple ? 14 : (mobile ? 11 : 12), weight: '700' }, textShadowBlur: 4, textShadowColor: 'rgba(0,0,0,0.5)' })
            }
        }, plugins: [ChartDataLabels]
    }); charts.push(c);
}

function chMerch(D) {
    const lbl = D.merch.map(m => m.name), val = D.merch.map(m => m.t), cnt = D.merch.map(m => m.n);
    const ctx = document.getElementById('cMerch');
    const c = new Chart(ctx, {
        type: 'bar',
        data: { labels: lbl, datasets: [{ data: val, backgroundColor: pal().slice(0, lbl.length).map(c => c + 'CC'), borderColor: pal().slice(0, lbl.length), borderWidth: 1, borderRadius: 6, borderSkipped: false }] },
        options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `${fc(c.raw)} · ${cnt[c.dataIndex]} txns` } }, datalabels: dlCfg(v => fcs(v), { anchor: 'end', align: 'right', offset: 6 }) },
            scales: {
                x: { grid: { color: tv('--cgrid') }, ticks: { callback: v => fcs(v), font: { size: fs } } },
                y: {
                    grid: { display: false },
                    ticks: {
                        font: { size: simple ? 13 : (isMobile() ? 10 : 11) },
                        callback: function(val) {
                            const l = this.getLabelForValue(val) || '';
                            if (isMobile() && l.length > 13) return l.slice(0, 12) + '…';
                            return l;
                        }
                    }
                }
            }
        }, plugins: [ChartDataLabels]
    }); charts.push(c);
}

function chInc(D) {
    const lbl = D.inc.map(([n]) => n), val = D.inc.map(([, v]) => v), tot = val.reduce((s, v) => s + v, 0);
    const ctx = document.getElementById('cInc');
    const mobile = isMobile();
    const c = new Chart(ctx, {
        type: simple ? 'pie' : 'doughnut',
        data: { labels: lbl, datasets: [{ data: val, backgroundColor: pal().slice(0, lbl.length).map(c => c + 'EE'), borderColor: tv('--card'), borderWidth: 3, hoverOffset: 12 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: simple ? 0 : (mobile ? '50%' : '65%'),
            plugins: { legend: { position: mobile ? 'bottom' : 'right', labels: { font: { size: simple ? 13 : (mobile ? 10 : 11) }, padding: mobile ? 8 : (simple ? 12 : 9), generateLabels: chart => {
                const ds = chart.data.datasets[0]; 
                const cColor = th() === 'dark' ? '#ffffff' : '#000000';
                return chart.data.labels.map((l, i) => ({ text: `${l}  ${fcs(ds.data[i])}`, fontColor: cColor, fillStyle: ds.backgroundColor[i], strokeStyle: ds.backgroundColor[i], lineWidth: 0, hidden: !chart.getDataVisibility(i), index: i, pointStyle: 'rectRounded' }));
            } } },
                tooltip: { callbacks: { label: c => `${fc(c.raw)} (${((c.raw / tot) * 100).toFixed(1)}%)` } },
                datalabels: dlCfg(v => { const p = (v / tot) * 100; return p > (mobile ? 14 : 10) ? fcs(v) : ''; }, { anchor: 'center', align: 'center', color: '#fff', font: { size: simple ? 14 : (mobile ? 10 : 11), weight: '700' }, textShadowBlur: 4, textShadowColor: 'rgba(0,0,0,0.5)' })
            }
        }, plugins: [ChartDataLabels]
    }); charts.push(c);
}

function chTime(D) {
    const lbl = Object.keys(D.tb), val = Object.values(D.tb);
    const cols = [tv('--amber'), tv('--blue'), tv('--violet'), tv('--teal')];
    const ctx = document.getElementById('cTime');
    const c = new Chart(ctx, {
        type: 'bar',
        data: { labels: lbl, datasets: [{ data: val, backgroundColor: cols.map(c => c + 'AA'), borderColor: cols, borderWidth: 1.5, borderRadius: simple ? 12 : 8, borderSkipped: false, hoverBackgroundColor: cols }] },
        options: { responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => fc(c.raw) } }, datalabels: dlCfg(v => fc(v), { anchor: 'end', align: 'top', offset: 6, font: { size: simple ? 14 : 12, weight: '600' } }) },
            scales: { x: { grid: { display: false }, ticks: { font: { size: simple ? 14 : 12, weight: '500' } } }, y: { grid: { color: tv('--cgrid') }, ticks: { callback: v => fcs(v), font: { size: fs } } } }
        }, plugins: [ChartDataLabels]
    }); charts.push(c);
}

function chCum(D) {
    const lbl = D.cumd.map(d => new Date(d.d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }));
    const val = D.cumd.map(d => d.v), pos = val[val.length - 1] >= 0;
    const ctx = document.getElementById('cCum').getContext('2d');
    const grd = ctx.createLinearGradient(0, 0, 0, 350);
    grd.addColorStop(0, pos ? tv('--green') + '44' : tv('--red') + '44');
    grd.addColorStop(1, 'transparent');
    const lc = pos ? tv('--green') : tv('--red');
    const c = new Chart(ctx, {
        type: 'line',
        data: { labels: lbl, datasets: [{ data: val, borderColor: lc, borderWidth: simple ? 4 : 3, pointRadius: simple ? 5 : 3, pointHoverRadius: simple ? 8 : 6, pointBackgroundColor: lc, pointBorderColor: tv('--card'), pointBorderWidth: 2, tension: simple ? 0.2 : 0.4, fill: true, backgroundColor: grd }] },
        options: { responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `${c.raw >= 0 ? '+' : '−'}${fc(c.raw)}` } },
                datalabels: dlCfg((v, c) => { const a = c.dataset.data, i = c.dataIndex; if (i === 0 || i === a.length - 1 || v === Math.max(...a) || v === Math.min(...a)) return fcs(v); return ''; }, { anchor: 'end', align: 'top', offset: 8 })
            },
            scales: { x: { grid: { color: tv('--cgrid') }, ticks: { maxRotation: 50, autoSkip: true, maxTicksLimit: isMobile() ? 6 : (simple ? 8 : 16), font: { size: fs } } }, y: { grid: { color: tv('--cgrid') }, ticks: { callback: v => (v >= 0 ? '+' : '−') + fcs(v), font: { size: fs } } } }
        }, plugins: [ChartDataLabels]
    }); charts.push(c);
}

function chDow(D) {
    const mx = Math.max(...D.dow) || 1;
    const bg = D.dow.map(v => `rgba(45,212,191,${0.3 + (v / mx) * 0.7})`);
    const ctx = document.getElementById('cDow');
    const c = new Chart(ctx, {
        type: 'bar',
        data: { labels: D.dn, datasets: [{ data: D.dow, backgroundColor: bg, borderColor: tv('--teal'), borderWidth: 1, borderRadius: simple ? 12 : 8, borderSkipped: false }] },
        options: { responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => fc(c.raw) } }, datalabels: dlCfg(v => fcs(v), { anchor: 'end', align: 'top', offset: 5 }) },
            scales: { x: { grid: { display: false }, ticks: { font: { size: simple ? 14 : 12, weight: '500' } } }, y: { grid: { color: tv('--cgrid') }, ticks: { callback: v => fcs(v), font: { size: fs } } } }
        }, plugins: [ChartDataLabels]
    }); charts.push(c);
}

function chSize(D) {
    const lbl = Object.keys(D.sz), val = Object.values(D.sz), tot = val.reduce((s, v) => s + v, 0);
    const cols = [tv('--green'), tv('--teal'), tv('--blue'), tv('--violet'), tv('--amber'), tv('--red')];
    const ctx = document.getElementById('cSize');
    if (simple) {
        const c = new Chart(ctx, {
            type: 'bar', data: { labels: lbl, datasets: [{ data: val, backgroundColor: cols.map(c => c + 'BB'), borderColor: cols, borderWidth: 1.5, borderRadius: 8, borderSkipped: false }] },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `${c.raw} transactions` } }, datalabels: dlCfg(v => v, { anchor: 'end', align: 'right', font: { size: 14, weight: '700' } }) },
                scales: { x: { grid: { color: tv('--cgrid') }, ticks: { font: { size: 13 } } }, y: { grid: { display: false }, ticks: { font: { size: 13, weight: '500' } } } }
            }, plugins: [ChartDataLabels]
        }); charts.push(c);
    } else {
        const mobile = isMobile();
        const c = new Chart(ctx, {
            type: 'doughnut', data: { labels: lbl, datasets: [{ data: val, backgroundColor: cols, borderColor: tv('--card'), borderWidth: 3, hoverOffset: 12 }] },
            options: { responsive: true, maintainAspectRatio: false, cutout: mobile ? '50%' : '60%',
                plugins: { legend: { position: mobile ? 'bottom' : 'right', labels: { font: { size: mobile ? 10 : 12 }, padding: mobile ? 8 : 12 } }, tooltip: { callbacks: { label: c => `${c.label}: ${c.raw} txns` } },
                    datalabels: dlCfg(v => { const p = tot > 0 ? (v / tot) * 100 : 0; return p > 8 ? v : ''; }, { anchor: 'center', align: 'center', color: '#fff', font: { size: mobile ? 10 : 12, weight: '700' }, textShadowBlur: 4, textShadowColor: 'rgba(0,0,0,0.5)' })
                }
            }, plugins: [ChartDataLabels]
        }); charts.push(c);
    }
}

// ── Table ──────────────────────────────────────────────────
function renderTbl(D, filt = {}) {
    let txs = [...D.txs].reverse();
    if (filt.type && filt.type !== 'all') txs = txs.filter(t => t.type === filt.type);
    if (filt.cat && filt.cat !== 'all') txs = txs.filter(t => t.cat === filt.cat);
    if (filt.q) { const q = filt.q.toLowerCase(); txs = txs.filter(t => t.det.toLowerCase().includes(q) || t.merch.toLowerCase().includes(q)); }

    const total = txs.length, paged = txs.slice(0, (tblPage + 1) * PAGE_SIZE);

    const SRC_TAGS = {
        gpay: '<span class="tag tag-src tag-gpay"><img src="gpay-icon.png" alt="GPay" class="tag-icon">GPay</span>',
        paytm: '<span class="tag tag-src tag-paytm"><img src="paytm-icon.png" alt="Paytm" class="tag-icon" style="background:white; border-radius:50%;">Paytm</span>',
        supermoney: '<span class="tag tag-src tag-supermoney" style="background:rgba(255,255,255,0.1); color:var(--tx1)"><img src="super-money-icon.png" alt="super.money" class="tag-icon" style="border-radius:4px;">super.money</span>',
        slice: '<span class="tag tag-src tag-slice"><img src="slice.png" alt="Slice" class="tag-icon" style="border-radius:3px;">Slice</span>',
        mobikwik: '<span class="tag tag-src tag-mobikwik"><img src="mobikwik.png" alt="MobiKwik" class="tag-icon" style="border-radius:3px;">MobiKwik</span>',
        phonepe: '<span class="tag tag-src tag-phonepe"><img src="phonepe-icon.png" alt="PhonePe" class="tag-icon">PhonePe</span>'
    };

    document.getElementById('tblBody').innerHTML = paged.map(t => {
        const srcTag = SRC_TAGS[t.source] || SRC_TAGS.phonepe;
        return `<tr>
        <td><div style="font-weight:500">${t.ds}</div><div style="font-size:0.75rem;color:var(--tx3);margin-top:2px">${t.ts}</div></td>
        <td style="max-width:260px;white-space:normal">${t.det}</td>
        <td><span class="tag tag-cat">${simple ? sCat(t.cat) : t.cat}</span></td>
        <td>${srcTag}</td>
        <td><span class="tag ${t.type === 'CREDIT' ? 'tag-in' : 'tag-out'}">${t.type === 'CREDIT' ? 'IN' : 'OUT'}</span></td>
        <td class="r ${t.type === 'CREDIT' ? 'amt-in' : 'amt-out'}">${t.type === 'CREDIT' ? '+' : '−'}${fc2(t.amt)}</td>
    </tr>`;
    }).join('');

    const foot = document.getElementById('tblFoot');
    if (paged.length < total) {
        foot.innerHTML = `<button class="link-btn" id="loadMore">Show more (${paged.length} of ${total})</button>`;
        document.getElementById('loadMore').onclick = () => { tblPage++; renderTbl(D, filt); };
    } else foot.textContent = `${total} transaction${total !== 1 ? 's' : ''}`;
}

function setupFilt(D) {
    const cs = document.getElementById('fCat');
    cs.innerHTML = '<option value="all">All Categories</option>';
    [...new Set(D.txs.map(t => t.cat))].sort().forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = simple ? sCat(c) : c; cs.appendChild(o); });

    const gf = () => ({ type: document.getElementById('fType').value, cat: document.getElementById('fCat').value, q: document.getElementById('fSearch').value });
    ['fType', 'fCat'].forEach(id => { const el = document.getElementById(id); const cl = el.cloneNode(true); el.parentNode.replaceChild(cl, el); cl.addEventListener('change', () => { tblPage = 0; renderTbl(D, gf()); }); });
    const se = document.getElementById('fSearch'); const sc = se.cloneNode(true); se.parentNode.replaceChild(sc, se); sc.addEventListener('input', () => { tblPage = 0; renderTbl(D, gf()); });
}

// ── PDF.js Readiness Helper ───────────────────────────────
async function waitForPDFLib() {
    if (window.pdfjsLib) return window.pdfjsLib;
    for (let i = 0; i < 30; i++) {
        await new Promise(r => setTimeout(r, 100));
        if (window.pdfjsLib) return window.pdfjsLib;
    }
    throw new Error('PDF library is still loading. Please wait a moment and try again.');
}

// ── GPay PDF Parser ────────────────────────────────────────
async function parseGPayPDF(arrayBuffer) {
    const pdfjsLib = await waitForPDFLib();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let allText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        // Group text items by Y position to reconstruct lines
        const items = content.items.filter(item => item.str.trim().length > 0);
        let lastY = null;
        let line = '';
        for (const item of items) {
            const y = Math.round(item.transform[5]); // Y position
            if (lastY !== null && Math.abs(y - lastY) > 3) {
                // New line
                allText += line.trim() + '\n';
                line = item.str;
            } else {
                line += (line ? ' ' : '') + item.str;
            }
            lastY = y;
        }
        if (line.trim()) allText += line.trim() + '\n';
    }
    return parseGPayText(allText);
}

function parseGPayText(text) {
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const txs = [];
    // GPay format: date line → time line → detail line → UPI ID line → instrument line → amount line
    // We look for date patterns and then read subsequent lines
    const dateRe = /^(\d{1,2}\s+\w{3},?\s+\d{4})$/;
    const timeRe = /^(\d{1,2}:\d{2}\s*(?:AM|PM))$/i;
    const amtRe = /^₹([\d,]+(?:\.\d{1,2})?)$/;

    for (let i = 0; i < lines.length; i++) {
        const dm = lines[i].match(dateRe);
        if (!dm) continue;
        const dateStr = dm[1];
        // Next line should be time
        if (i + 1 >= lines.length) continue;
        const tm = lines[i + 1].match(timeRe);
        if (!tm) continue;
        const timeStr = tm[1];
        // Next line(s) should be the detail — find it
        if (i + 2 >= lines.length) continue;
        const detailLine = lines[i + 2];
        // Skip page headers
        if (/^(Transaction statement|Note:|Page \d|Date & time|Transaction details|Amount)$/i.test(detailLine)) continue;

        // Determine type from detail line
        let type, det;
        if (/^Paid to /i.test(detailLine)) {
            type = 'DEBIT';
            det = detailLine;
        } else if (/^Received from /i.test(detailLine)) {
            type = 'CREDIT';
            det = detailLine;
        } else if (/^Self transfer/i.test(detailLine)) {
            // Skip self transfers
            i += 2;
            continue;
        } else {
            continue;
        }

        // Find amount — scan forward for the ₹ line (usually 2-3 lines after detail)
        let amt = null;
        for (let j = i + 3; j < Math.min(i + 7, lines.length); j++) {
            const am = lines[j].match(amtRe);
            if (am) {
                amt = parseFloat(am[1].replace(/,/g, ''));
                break;
            }
        }
        if (amt === null || isNaN(amt)) continue;

        // Parse date
        const dt = pDate(dateStr, timeStr);
        if (!dt) continue;

        txs.push({
            date: dt,
            ds: dateStr,
            ts: timeStr,
            det: det,
            type: type,
            amt: amt,
            cat: catOf(det),
            merch: mName(det.replace(/^(Paid to|Received from)\s*/i, '')),
            source: 'gpay'
        });

        i += 2; // skip processed lines
    }
    return txs.sort((a, b) => a.date - b.date);
}


// ── Core PDF Parsers ───────────────────────────────────────────
async function parsePaytmXLSX(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                const sheetName = workbook.SheetNames.length > 1 ? workbook.SheetNames[1] : workbook.SheetNames[0];
                let json = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1});
                
                let headerIdx = -1;
                for (let i = 0; i < Math.min(20, json.length); i++) {
                    if (json[i] && json[i].includes('Date') && json[i].includes('Time')) {
                        headerIdx = i; break;
                    }
                }
                if (headerIdx === -1) {
                    const sheet0 = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header: 1});
                    for (let i = 0; i < Math.min(20, sheet0.length); i++) {
                        if (sheet0[i] && sheet0[i].includes('Date') && sheet0[i].includes('Time')) {
                            headerIdx = i; json = sheet0; break;
                        }
                    }
                }
                
                if (headerIdx === -1) throw new Error("Could not find Date/Time header in Paytm XLSX");
                
                const txs = [];
                for (let i = headerIdx + 1; i < json.length; i++) {
                    const row = json[i];
                    if (!row || row.length < 5) continue;
                    const dateStr = row[0]; 
                    const timeStr = row[1]; 
                    let det = row[2] || '';
                    if (row[3]) det += ' - ' + row[3];
                    let amtRaw = String(row[5] || '').replace(/,/g, '').trim();
                    if (!amtRaw) continue;
                    
                    let type = amtRaw.startsWith('-') ? 'DEBIT' : 'CREDIT';
                    let amt = parseFloat(amtRaw.replace(/[+-]/g, ''));
                    if (isNaN(amt)) continue;
                    
                    const parts = dateStr.split('/');
                    if (parts.length < 3) continue;
                    const dt = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T${timeStr}`);
                    
                    txs.push({
                        date: dt, ds: dateStr, ts: timeStr, det: det, type: type, amt: amt,
                        cat: catOf(det), merch: mName(det.replace(/^(Paid to|Received from)\\s*/i, '')), source: 'paytm'
                    });
                }
                resolve(txs);
            } catch (err) { reject(err); }
        };
        reader.onerror = () => reject(new Error("File read failed"));
        reader.readAsArrayBuffer(file);
    });
}



async function parsePaytmPDF(arrayBuffer) {
    const pdfjsLib = await waitForPDFLib();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const pagePromises = Array.from({ length: pdf.numPages }, async (_, idx) => {
        const page = await pdf.getPage(idx + 1);
        const content = await page.getTextContent();
        const items = content.items.filter(item => item.str.trim().length > 0);
        let pageText = '';
        let lastY = null;
        let line = '';
        for (const item of items) {
            const y = Math.round(item.transform[5]);
            if (lastY !== null && Math.abs(y - lastY) > 3) {
                pageText += line.trim() + '\n';
                line = item.str;
            } else {
                line += (line ? ' ' : '') + item.str;
            }
            lastY = y;
        }
        if (line.trim()) pageText += line.trim() + '\n';
        return pageText;
    });
    const pageTexts = await Promise.all(pagePromises);
    const allText = pageTexts.join('');
    
    const txs = [];
    let startYear = new Date().getFullYear();
    let endYear = startYear;
    let startMonth = 0;
    const periodRe = /(\d{1,2}\s+[A-Za-z]{3}[' ]?\d{2,4})\s*-\s*(\d{1,2}\s+[A-Za-z]{3}[' ]?\d{2,4})/;
    const pMatch = allText.match(periodRe);
    if (pMatch) {
        const parseYear = (str) => {
            let m = str.match(/\d{2,4}$/);
            if (!m) return new Date().getFullYear();
            let y = parseInt(m[0]);
            return y < 100 ? 2000 + y : y;
        };
        startYear = parseYear(pMatch[1]);
        endYear = parseYear(pMatch[2]);
        let dStr = pMatch[1].replace(/'/g, ' ');
        let tempDate = new Date(dStr);
        if (!isNaN(tempDate)) startMonth = tempDate.getMonth();
    }
    
    const txPattern = /(\d{1,2}\s+[A-Za-z]{3})\s+(\d{1,2}:\d{2}\s+(?:AM|PM))\s+((?:(?!\d{1,2}\s+[A-Za-z]{3}\s+\d{1,2}:\d{2}\s+(?:AM|PM))[\s\S])*?)(-\s*Rs\.?|\+\s*Rs\.?|Rs\.?)\s*([\d,]+(?:\.\d{1,2})?)/gi;
    
    let m;
    while ((m = txPattern.exec(allText)) !== null) {
        const dateStr = m[1];
        const timeStr = m[2];
        let detLines = m[3].split('\n').map(l => l.trim()).filter(l => l.length > 0);
        let signStr = m[4].trim();
        let amtRaw = m[5].replace(/,/g, '');
        
        let isDebit = signStr.startsWith('-');
        let isCredit = signStr.startsWith('+');
        if (!isDebit && !isCredit) {
            isDebit = detLines.join(' ').toLowerCase().includes('paid to');
        }
        let type = (!isDebit) ? 'CREDIT' : 'DEBIT';
        let amt = parseFloat(amtRaw);
        
        let det = detLines[0] || '';
        
        const txMonth = new Date(dateStr + " 2000").getMonth();
        let year = (txMonth >= startMonth) ? startYear : endYear;
        const dt = new Date(`${dateStr} ${year} ${timeStr}`);
        if (isNaN(dt)) continue;
        
        txs.push({
            date: dt,
            ds: `${dateStr} ${year}`,
            ts: timeStr,
            det: det,
            type: type,
            amt: amt,
            cat: catOf(det),
            merch: mName(det.replace(/^(Paid to|Received from)\s*/i, '')),
            source: 'paytm'
        });
    }
    return txs;
}

async function parsePhonePePDF(arrayBuffer) {
    const pdfjsLib = await waitForPDFLib();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    const pagePromises = Array.from({ length: pdf.numPages }, async (_, idx) => {
        const page = await pdf.getPage(idx + 1);
        const content = await page.getTextContent();
        return content.items
            .filter(item => item.str.trim().length > 0)
            .map(item => item.str.trim())
            .join('\n') + '\n';
    });
    const pageTexts = await Promise.all(pagePromises);
    const allText = pageTexts.join('');
    
    const txPattern = /([A-Za-z]{3}\s+\d{1,2},\s+\d{4})\s+(\d{1,2}:\d{2}\s+(?:AM|PM))\s+(DEBIT|CREDIT)\s*(?:₹|Rs\.?)\s*([\d,]+(?:\.\d{1,2})?)\s+([\s\S]*?)(?=[A-Za-z]{3}\s+\d{1,2},\s+\d{4}\s+\d{1,2}:\d{2}\s+(?:AM|PM)|$)/gi;
    const txs = [];
    let m;
    while ((m = txPattern.exec(allText)) !== null) {
        const dStr = m[1] + ' ' + m[2];
        const dateObj = new Date(dStr);
        if (isNaN(dateObj.getTime())) continue;
        
        const type = m[3];
        const amt = parseFloat(m[4].replace(/,/g, ''));
        
        const detLines = m[5].split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.startsWith('Page ') && !l.includes('system generated statement'));
        
        const cleanDetLines = detLines.filter(l => !l.startsWith('Transaction ID') && !l.startsWith('UTR No') && !l.startsWith('Bharat Connect') && !l.startsWith('Paid by') && !l.startsWith('Credited to') && !l.match(/^[X]+[0-9]+$/) && !l.startsWith('₹'));
        const det = cleanDetLines.join(' ') || 'Unknown';
        
        txs.push({
            date: dateObj,
            ds: m[1],
            ts: m[2],
            det: det,
            type: type,
            amt: amt,
            cat: catOf(det),
            merch: mName(det),
            source: 'phonepe'
        });
    }
    return txs;
}

async function parsePDF(arrayBuffer) {
    const pdfjsLib = await waitForPDFLib();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    const pagePromises = Array.from({ length: pdf.numPages }, async (_, idx) => {
        const page = await pdf.getPage(idx + 1);
        const content = await page.getTextContent();
        return content.items
            .filter(item => item.str.trim().length > 0)
            .map(item => item.str.trim())
            .join('\n') + '\n';
    });
    const pageTexts = await Promise.all(pagePromises);
    const allText = pageTexts.join('');
    
    // GPay Format: Date \n Time \n Details... \n ₹Amount
    const txPattern = /(\d{1,2}\s+[A-Za-z]{3},\s+\d{4})\s+(\d{1,2}:\d{2}\s+[AP]M)\s+([\s\S]*?)(?:₹|Rs\.?)\s*([\d,]+(?:\.\d{1,2})?)(?=\s*\d{1,2}\s+[A-Za-z]{3},\s+\d{4}|$)/gi;
    const txs = [];
    let m;
    while ((m = txPattern.exec(allText)) !== null) {
        const dateStr = m[1];
        const timeStr = m[2];
        const detLines = m[3].split('\n').map(l => l.trim()).filter(l => l.length > 0);
        let amtRaw = m[4].replace(/,/g, '');
        
        let det = detLines[0] || 'Unknown';
        
        let isDebit = true;
        if (det.toLowerCase().includes('received') || det.toLowerCase().includes('cashback')) {
            isDebit = false;
        }
        
        let type = isDebit ? 'DEBIT' : 'CREDIT';
        let amt = parseFloat(amtRaw);
        
        const dt = new Date(`${dateStr} ${timeStr}`);
        if (isNaN(dt.getTime())) continue;
        
        // Exclude 'Self transfer' from total spending optionally? The user didn't ask, but GPay does have it.
        // Let's just process it as debit/credit.
        if (det.toLowerCase().includes('self transfer')) continue; // usually ignored in expenses
        
        txs.push({
            date: dt,
            ds: dateStr,
            ts: timeStr,
            det: det,
            type: type,
            amt: amt,
            cat: catOf(det),
            merch: mName(det.replace(/^(Paid to|Received from)\s*/i, '')),
            source: 'gpay'
        });
    }
    return txs;
}

// ── Source State ───────────────────────────────────────────
let currentSource = null;
let bothFiles = { pp: null, gp: null, pt: null, sm: null, sl: null, mk: null };

function bothPPSelected(file) {
    if (!file.name.toLowerCase().endsWith('.csv') && !file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a CSV or PDF file for PhonePe'); return; }
    bothFiles.pp = file;
    const statusEl = document.getElementById('bothPPStatus');
    if (statusEl) statusEl.textContent = '✓ Uploaded';
    const slotEl = document.getElementById('dropBothPP');
    if (slotEl) slotEl.classList.add('file-ready');
    checkAnalyzeBoth();
}
function bothGPSelected(file) {
    if (!file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file for Google Pay'); return; }
    bothFiles.gp = file;
    const statusEl = document.getElementById('bothGPStatus');
    if (statusEl) statusEl.textContent = '✓ Uploaded';
    const slotEl = document.getElementById('dropBothGP');
    if (slotEl) slotEl.classList.add('file-ready');
    checkAnalyzeBoth();
}
function bothPTSelected(file) {
    if (!file.name.toLowerCase().endsWith('.pdf') && !file.name.toLowerCase().endsWith('.xlsx')) { alert('Please upload a PDF or XLSX file for Paytm'); return; }
    bothFiles.pt = file;
    const statusEl = document.getElementById('bothPTStatus');
    if (statusEl) statusEl.textContent = '✓ Uploaded';
    const slotEl = document.getElementById('dropBothPT');
    if (slotEl) slotEl.classList.add('file-ready');
    checkAnalyzeBoth();
}
function bothSMSelected(file) {
    if (!file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file for super.money'); return; }
    bothFiles.sm = file;
    const statusEl = document.getElementById('bothSMStatus');
    if (statusEl) statusEl.textContent = '✓ Uploaded';
    const slotEl = document.getElementById('dropBothSM');
    if (slotEl) slotEl.classList.add('file-ready');
    checkAnalyzeBoth();
}
function bothSLSelected(file) {
    if (!file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file for Slice'); return; }
    bothFiles.sl = file;
    const statusEl = document.getElementById('bothSLStatus');
    if (statusEl) statusEl.textContent = '✓ Uploaded';
    const slotEl = document.getElementById('dropBothSL');
    if (slotEl) slotEl.classList.add('file-ready');
    checkAnalyzeBoth();
}
function bothMKSelected(file) {
    if (!file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file for MobiKwik'); return; }
    bothFiles.mk = file;
    const statusEl = document.getElementById('bothMKStatus');
    if (statusEl) statusEl.textContent = '✓ Uploaded';
    const slotEl = document.getElementById('dropBothMK');
    if (slotEl) slotEl.classList.add('file-ready');
    checkAnalyzeBoth();
}

function checkAnalyzeBoth() {
    let count = 0;
    if (bothFiles.pp) count++;
    if (bothFiles.gp) count++;
    if (bothFiles.pt) count++;
    if (bothFiles.sm) count++;
    if (bothFiles.sl) count++;
    if (bothFiles.mk) count++;
    const btn = document.getElementById('analyzeBoth');
    const hint = document.getElementById('bothHint');
    if (btn) {
        if (count >= 2) {
            btn.classList.remove('hidden');
            if (hint) hint.textContent = `(${count} statements selected. Ready to analyze!)`;
        } else {
            btn.classList.add('hidden');
            if (hint) {
                if (count === 1) {
                    hint.textContent = '(1 statement selected. Please select at least 1 more)';
                } else {
                    hint.textContent = '(Upload any 2 or more statements to unlock analysis)';
                }
            }
        }
    }
}


function showLoader(txt) {
    const el = document.createElement('div');
    el.id = 'activeLoader';
    el.className = 'loader';
    el.innerHTML = `<div class="spinner"></div><div class="loader-txt">${txt}</div>`;
    document.body.appendChild(el);
    return el;
}

function hideLoader(el) { 
    if (el) el.remove();
    const ld = document.getElementById('activeLoader'); 
    if (ld) ld.remove(); 
}

function setSourceBadge(src) {
    const badge = document.getElementById('sourceBadge');
    if (!badge) return;
    badge.className = 'topbar-source ' + src;
    if (src === 'phonepe') {
        badge.innerHTML = '<img src="phonepe-icon.png" alt="PhonePe" class="badge-icon"><span>PhonePe</span>';
    } else if (src === 'gpay') {
        badge.innerHTML = '<img src="gpay-icon.png" alt="Google Pay" class="badge-icon"><span>Google Pay</span>';
    } else if (src === 'paytm') {
        badge.innerHTML = '<img src="paytm-icon.png" alt="Paytm" class="badge-icon" style="background:white; border-radius:50%;"><span>Paytm</span>';
    } else if (src === 'supermoney') {
        badge.innerHTML = '<img src="super-money-icon.png" alt="super.money" class="badge-icon"><span>super.money</span>';
    } else if (src === 'slice') {
        badge.innerHTML = '<img src="slice.png" alt="Slice" class="badge-icon"><span>Slice</span>';
    } else if (src === 'mobikwik') {
        badge.innerHTML = '<img src="mobikwik.png" alt="MobiKwik" class="badge-icon"><span>MobiKwik</span>';
    } else if (src === 'both') {
        let activeIcons = [];
        const map = [
            { k: 'pp', icon: 'phonepe-icon.png', alt: 'PhonePe' },
            { k: 'gp', icon: 'gpay-icon.png', alt: 'Google Pay' },
            { k: 'pt', icon: 'paytm-icon.png', alt: 'Paytm', bgWhite: true },
            { k: 'sm', icon: 'super-money-icon.png', alt: 'super.money' },
            { k: 'sl', icon: 'slice.png', alt: 'Slice' },
            { k: 'mk', icon: 'mobikwik.png', alt: 'MobiKwik' }
        ];
        map.forEach(m => {
            if (bothFiles && bothFiles[m.k]) {
                const style = m.bgWhite ? 'style="background:white;border-radius:50%;"' : '';
                activeIcons.push(`<img src="${m.icon}" alt="${m.alt}" class="badge-icon" ${style}>`);
            }
        });
        if (!activeIcons.length) {
            activeIcons.push('<img src="phonepe-icon.png" class="badge-icon">', '<img src="gpay-icon.png" class="badge-icon">');
        }
        badge.innerHTML = `<div style="display:flex;align-items:center;gap:4px;">${activeIcons.join('')}</div><span>Combined (${activeIcons.length} Apps)</span>`;
    }
}

// ── UI Wiring ──────────────────────────────────────────────
function showZone(z) {
    document.getElementById('sourcePicker').classList.add('hidden');
    document.querySelectorAll('.upload-zone').forEach(el => el.classList.add('hidden'));
    
    if (z === 'phonepe') document.getElementById('zonePhonePe').classList.remove('hidden');
    else if (z === 'gpay') document.getElementById('zoneGPay').classList.remove('hidden');
    else if (z === 'paytm') document.getElementById('zonePaytm').classList.remove('hidden');
    else if (z === 'supermoney') document.getElementById('zoneSuperMoney').classList.remove('hidden');
    else if (z === 'slice') document.getElementById('zoneSlice').classList.remove('hidden');
    else if (z === 'mobikwik') document.getElementById('zoneMobiKwik').classList.remove('hidden');
    else if (z === 'both') document.getElementById('zoneBoth').classList.remove('hidden');
}

function showPicker() {
    document.querySelectorAll('.upload-zone').forEach(el => el.classList.add('hidden'));
    document.getElementById('sourcePicker').classList.remove('hidden');
}

document.getElementById('pickPhonePe').onclick = () => showZone('phonepe');
document.getElementById('pickGPay').onclick = () => showZone('gpay');
document.getElementById('pickPaytm').onclick = () => showZone('paytm');
document.getElementById('pickSuperMoney').onclick = () => showZone('supermoney');
if (document.getElementById('pickSlice')) document.getElementById('pickSlice').onclick = () => showZone('slice');
if (document.getElementById('pickMobiKwik')) document.getElementById('pickMobiKwik').onclick = () => showZone('mobikwik');
document.getElementById('pickBoth').onclick = () => showZone('both');

document.getElementById('backPhonePe').onclick = showPicker;
document.getElementById('backGPay').onclick = showPicker;
document.getElementById('backPaytm').onclick = showPicker;
document.getElementById('backSuperMoney').onclick = showPicker;
if (document.getElementById('backSlice')) document.getElementById('backSlice').onclick = showPicker;
if (document.getElementById('backMobiKwik')) document.getElementById('backMobiKwik').onclick = showPicker;
document.getElementById('backBoth').onclick = showPicker;


// ── Drop Zone Wiring ──────────────────────────────────────
function wireDropZone(dropEl, fileInput, handler) {
    if (!dropEl || !fileInput) return;
    
    // Prevent double triggering when clicking dropEl
    dropEl.onclick = e => {
        if (e.target !== fileInput) {
            fileInput.click();
        }
    };
    
    // Prevent input's own click from bubbling back to dropEl
    fileInput.onclick = e => {
        e.stopPropagation();
    };

    // Keyboard trigger (Enter or Space)
    dropEl.onkeydown = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInput.click();
        }
    };

    fileInput.onchange = e => {
        if (e.target.files && e.target.files.length) {
            const f = e.target.files[0];
            e.target.value = ''; // Reset value so same file can be re-selected
            handler(f);
        }
    };

    dropEl.ondragover = e => {
        e.preventDefault();
        e.stopPropagation();
        dropEl.classList.add('over');
    };

    dropEl.ondragleave = e => {
        e.preventDefault();
        e.stopPropagation();
        dropEl.classList.remove('over');
    };

    dropEl.ondrop = e => {
        e.preventDefault();
        e.stopPropagation();
        dropEl.classList.remove('over');
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
            handler(e.dataTransfer.files[0]);
        }
    };
}

wireDropZone(document.getElementById('dropPhonePe'), document.getElementById('csvFilePhonePe'), handlePhonePe);
wireDropZone(document.getElementById('dropGPay'), document.getElementById('pdfFileGPay'), handleGPay);
wireDropZone(document.getElementById('dropPaytm'), document.getElementById('filePaytm'), handlePaytm);
wireDropZone(document.getElementById('dropSuperMoney'), document.getElementById('pdfFileSuperMoney'), handleSuperMoney);
wireDropZone(document.getElementById('dropSlice'), document.getElementById('pdfFileSlice'), handleSlice);
wireDropZone(document.getElementById('dropMobiKwik'), document.getElementById('pdfFileMobiKwik'), handleMobiKwik);

wireDropZone(document.getElementById('dropBothPP'), document.getElementById('csvFileBothPP'), bothPPSelected);
wireDropZone(document.getElementById('dropBothGP'), document.getElementById('pdfFileBothGP'), bothGPSelected);
wireDropZone(document.getElementById('dropBothPT'), document.getElementById('fileBothPT'), bothPTSelected);
wireDropZone(document.getElementById('dropBothSM'), document.getElementById('pdfFileBothSM'), bothSMSelected);
wireDropZone(document.getElementById('dropBothSL'), document.getElementById('pdfFileBothSL'), bothSLSelected);
wireDropZone(document.getElementById('dropBothMK'), document.getElementById('pdfFileBothMK'), bothMKSelected);

async function handleBoth() {
    const ld = showLoader('Analyzing multiple sources…');
    try {
        let allTx = [];
        if (bothFiles.pp) {
            if (bothFiles.pp.name.toLowerCase().endsWith('.csv')) {
                const text = await bothFiles.pp.text();
                const ppTx = parseCSV(text);
                ppTx.forEach(t => t.source = 'phonepe');
                allTx.push(...ppTx);
            } else {
                const buf = await bothFiles.pp.arrayBuffer();
                const ppTx = await parsePhonePePDF(buf);
                ppTx.forEach(t => t.source = 'phonepe');
                allTx.push(...ppTx);
            }
        }
        if (bothFiles.gp) {
            const buf = await bothFiles.gp.arrayBuffer();
            const gpTx = await parsePDF(buf);
            gpTx.forEach(t => t.source = 'gpay');
            allTx.push(...gpTx);
        }
        if (bothFiles.pt) {
            if (bothFiles.pt.name.toLowerCase().endsWith('.xlsx')) {
                const buf = await bothFiles.pt.arrayBuffer();
                const ptTx = await parsePaytmXLSX(buf);
                ptTx.forEach(t => t.source = 'paytm');
                allTx.push(...ptTx);
            } else {
                const buf = await bothFiles.pt.arrayBuffer();
                const ptTx = await parsePaytmPDF(buf);
                ptTx.forEach(t => t.source = 'paytm');
                allTx.push(...ptTx);
            }
        }
        if (bothFiles.sm) {
            const buf = await bothFiles.sm.arrayBuffer();
            const smTx = await parseSuperMoneyPDF(buf);
            smTx.forEach(t => t.source = 'supermoney');
            allTx.push(...smTx);
        }
        if (bothFiles.sl) {
            const buf = await bothFiles.sl.arrayBuffer();
            const slTx = await parseSlicePDF(buf);
            slTx.forEach(t => t.source = 'slice');
            allTx.push(...slTx);
        }
        if (bothFiles.mk) {
            const buf = await bothFiles.mk.arrayBuffer();
            const mkTx = await parseMobiKwikPDF(buf);
            mkTx.forEach(t => t.source = 'mobikwik');
            allTx.push(...mkTx);
        }
        if (!allTx.length) throw new Error('No transactions found in selected files');
        allTx = allTx.sort((a,b) => a.date - b.date);
        DATA = crunch(allTx);
        buildDashUI(DATA);
        setSourceBadge('both');
    } catch(err) {
        alert('Error parsing files: ' + err.message);
    } finally {
        hideLoader(ld);
    }
}
document.getElementById('analyzeBoth').onclick = handleBoth;

function handlePhonePe(file) {
    if (!file || (!file.name.toLowerCase().endsWith('.csv') && !file.name.toLowerCase().endsWith('.pdf'))) { alert('Please upload a CSV or PDF file'); return; }
    currentSource = 'phonepe';
    const ld = showLoader('Analyzing PhonePe transactions…');
    const r = new FileReader();
    
    if (file.name.toLowerCase().endsWith('.csv')) {
        r.onload = e => {
            try {
                const txs = parseCSV(e.target.result);
                txs.forEach(t => t.source = 'phonepe');
                if (!txs.length) throw new Error('No transactions found');
                DATA = crunch(txs);
                buildDashUI(DATA);
                setSourceBadge('phonepe');
            } catch(err) { alert('Error: ' + err.message); }
            finally { hideLoader(ld); }
        };
        r.readAsText(file);
    } else {
        r.onload = async e => {
            try {
                let txs = await parsePhonePePDF(e.target.result);
                txs.forEach(t => t.source = 'phonepe');
                if (!txs.length) throw new Error('No transactions found');
                txs = txs.sort((a,b) => a.date - b.date);
                DATA = crunch(txs);
                buildDashUI(DATA);
                setSourceBadge('phonepe');
            } catch (err) { alert('Error: ' + err.message); }
            finally { hideLoader(ld); }
        };
        r.readAsArrayBuffer(file);
    }
}

async function handleGPay(file) {
    if (!file || !file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file'); return; }
    currentSource = 'gpay';
    const ld = showLoader('Analyzing Google Pay transactions…');
    const r = new FileReader();
    r.onload = async e => {
        try {
            let txs = await parsePDF(e.target.result);
            txs.forEach(t => t.source = 'gpay');
            if (!txs.length) throw new Error('No transactions found');
            txs = txs.sort((a,b) => a.date - b.date);
            DATA = crunch(txs);
            buildDashUI(DATA);
            setSourceBadge('gpay');
        } catch(err) { alert('Error: ' + err.message); }
        finally { hideLoader(ld); }
    };
    r.readAsArrayBuffer(file);
}

function handlePaytm(file) {
    if (!file || (!file.name.toLowerCase().endsWith('.pdf') && !file.name.toLowerCase().endsWith('.xlsx'))) { alert('Please upload a PDF or XLSX file'); return; }
    currentSource = 'paytm';
    const ld = showLoader('Analyzing Paytm transactions…');
    const r = new FileReader();
    r.onload = async e => {
        try {
            let txs = [];
            if (file.name.toLowerCase().endsWith('.xlsx')) {
                txs = await parsePaytmXLSX(e.target.result);
            } else {
                txs = await parsePaytmPDF(e.target.result);
            }
            txs.forEach(t => t.source = 'paytm');
            if (!txs.length) throw new Error('No transactions found');
            txs = txs.sort((a,b) => a.date - b.date);
            DATA = crunch(txs);
            buildDashUI(DATA);
            setSourceBadge('paytm');
        } catch(err) { alert('Error: ' + err.message); }
        finally { hideLoader(ld); }
    };
    r.readAsArrayBuffer(file);
}


async function parseSuperMoneyPDF(arrayBuffer) {
    const pdfjsLib = await waitForPDFLib();
    const data = new Uint8Array(arrayBuffer);
    const doc = await pdfjsLib.getDocument({ data }).promise;
    const pagePromises = Array.from({ length: doc.numPages }, async (_, idx) => {
        const page = await doc.getPage(idx + 1);
        const content = await page.getTextContent();
        const pageLines = [];
        for (const item of content.items) {
            const str = item.str.trim();
            if (str && str !== 'Transaction History' && !str.match(/^[0-9]+\s+[A-Za-z]+\s+[0-9]{4}\s+to\s+/i) && str !== 'Name' && str !== 'Bank' && str !== 'Amount' && str !== 'Date' && str !== 'Status') {
                pageLines.push(str);
            }
        }
        return pageLines;
    });
    const pagesResults = await Promise.all(pagePromises);
    const lines = pagesResults.flat();
    
    const txs = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] === 'SUCCESS' && i >= 4) {
            const dateStr = lines[i-1];
            const amtStr = lines[i-2].replace(/[+,]/g, '').trim();
            let amt = parseFloat(amtStr);
            const isDebit = amt < 0 || lines[i-2].includes('-');
            amt = Math.abs(amt);
            
            const bank = lines[i-3];
            const name = lines[i-4];
            
            // super.money has no time, use 00:00:00
            const dateObj = new Date(dateStr + " 00:00:00");
            if (isNaN(dateObj.getTime())) continue;
            
            txs.push({
                date: dateObj,
                ds: dateStr,
                ts: '00:00',
                amt: amt,
                type: isDebit ? 'DEBIT' : 'CREDIT',
                det: name,
                cat: catOf(name),
                merch: mName(name),
                source: 'supermoney'
            });
        }
    }
    return txs;
}

function handleSuperMoney(file) {
    if (!file || !file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file for super.money'); return; }
    currentSource = 'supermoney';
    const ld = showLoader('Analyzing super.money transactions…');
    const r = new FileReader();
    r.onload = async e => {
        try {
            let txs = await parseSuperMoneyPDF(e.target.result);
            if (!txs.length) throw new Error('No transactions found');
            txs = txs.sort((a,b) => a.date - b.date);
            DATA = crunch(txs);
            buildDashUI(DATA);
            setSourceBadge('supermoney');
        } catch(err) { alert('Error: ' + err.message); }
        finally { hideLoader(ld); }
    };
    r.readAsArrayBuffer(file);
}

async function parseSlicePDF(arrayBuffer) {
    const pdfjsLib = await waitForPDFLib();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    const pagePromises = Array.from({ length: pdf.numPages }, async (_, idx) => {
        const page = await pdf.getPage(idx + 1);
        const content = await page.getTextContent();
        const tokens = [];
        for (const item of content.items) {
            const s = item.str.trim();
            if (s) tokens.push(s);
        }
        return tokens;
    });
    const pageResults = await Promise.all(pagePromises);
    const rawTokens = pageResults.flat();
    
    // Filter out page header dates, page counters, and footer contact lines
    const filtered = rawTokens.filter(t => {
        if (/^\d{1,2}\s+[A-Za-z]{3}\s+'?\d{2,4}\s+-\s+\d{1,2}\s+[A-Za-z]{3}\s+'?\d{2,4}$/.test(t)) return false;
        if (/^\d+\s*\/\s*\d+$/.test(t)) return false;
        if (t.includes('Need help?') || t.includes('slice small finance bank') || t.startsWith('Generated on ')) return false;
        return true;
    });
    
    // Find table start header
    let startIdx = 0;
    const balanceIdx = filtered.findIndex(t => t === 'BALANCE');
    if (balanceIdx !== -1) {
        startIdx = balanceIdx + 1;
    } else {
        const firstDateIdx = filtered.findIndex(t => /^\d{1,2}\s+[A-Za-z]{3}\s+'?\d{2,4}$/.test(t));
        if (firstDateIdx !== -1) startIdx = firstDateIdx;
    }
    
    const dateRe = /^\d{1,2}\s+[A-Za-z]{3,9}\s+'?\d{2,4}$/;
    const groups = [];
    let curr = [];
    
    for (let i = startIdx; i < filtered.length; i++) {
        const t = filtered[i];
        if (dateRe.test(t)) {
            if (curr.length) groups.push(curr);
            curr = [t];
        } else {
            if (curr.length) curr.push(t);
        }
    }
    if (curr.length) groups.push(curr);
    
    const txs = [];
    for (const g of groups) {
        if (g.length < 3) continue;
        const dateStr = g[0];
        
        // Parse date: e.g. "01 Jun '26" -> "01 Jun 2026"
        const cleanDateStr = dateStr.replace(/'(\d{2})$/, '20$1');
        const dt = new Date(cleanDateStr + " 00:00:00");
        if (isNaN(dt.getTime())) continue;
        
        // Amount and debit/credit detection
        let amtIdx = g.length - 2;
        let isDebit = false;
        let refIdx = amtIdx - 1;
        const amtStr = g[amtIdx];
        const prev = g[amtIdx - 1];
        
        // Detection across formats:
        // Format A (separate token '-' or '+'): [...details, ref, "-", "₹5,000", "₹12,345"]
        // Format B (sign embedded in amount): [...details, ref, "3₹900", "₹2,345"]
        // Note: In custom Slice PDF embedded fonts, the minus '-' glyph is extracted as ASCII '3'
        if (/^[3–—−\-]\s*₹/.test(amtStr) || amtStr.startsWith('-') || amtStr.startsWith('–') || amtStr.startsWith('—')) {
            isDebit = true;
            refIdx = amtIdx - 1;
        } else if (amtIdx - 1 >= 1 && (prev === '-' || prev === '–' || prev === '—' || prev === '3')) {
            isDebit = true;
            refIdx = amtIdx - 2;
        } else if (amtIdx - 1 >= 1 && prev === '+') {
            isDebit = false;
            refIdx = amtIdx - 2;
        } else if (/^\+\s*₹/.test(amtStr) || amtStr.startsWith('+')) {
            isDebit = false;
            refIdx = amtIdx - 1;
        } else {
            isDebit = false;
            refIdx = amtIdx - 1;
        }
        
        // Clean amount:
        // Strip any leading sign ('3', '-', '+', unicode dashes) and rupee/currency symbol
        let numStr = amtStr.replace(/^[3+–—−\-]\s*/, '').replace(/^[₹Rs\.]+\s*/, '');
        numStr = numStr.replace(/,/g, '').trim();
        const amt = parseFloat(numStr);
        if (isNaN(amt) || amt <= 0) continue;
        
        // Details tokens
        const detTokens = g.slice(1, Math.max(1, refIdx + 1));
        let rawDet = detTokens.join(' ').trim();
        let det = rawDet;
        
        // Normalize font '3' delimiter if present in UPI/interest descriptions
        if (/UPI\s*(?:Debit|Credit)3/i.test(det) || /Interest Cr.*3/i.test(det)) {
            det = det.replace(/([A-Za-z0-9@.])3([A-Za-z0-9@.])/g, '$1 - $2');
        }
        
        // Extract merchant / party
        let merchName = det;
        const oldUpi = det.match(/UPI-(?:Debit|Credit|Reversal)-\d+-([^-]+)/i);
        const newUpi = det.match(/UPI\s*(?:Debit|Credit|Reversal)\s*[3\-–—]\s*([A-Za-z0-9\s.]+?)(?:[3\-–—]|$)/i);
        const impsMatch = det.match(/IMPS[-–\s]*(?:Debit|Credit)[-–\s]*REF\s+\d+[-–\s]*TO\s+([^-3]+)/i);
        const dcMatch = det.match(/DC\s+ECOM[-–\s]*(?:Debit|Refund)[-–\s]*(?:\d+[-–\s]*)?([^-3]+)/i);
        const atmMatch = det.match(/ATM[-–\s]*(?:Debit|Credit)[-–\s]*(?:\d+[-–\s]*)?([^-3]+)/i);
        
        if (oldUpi) {
            merchName = oldUpi[1].trim();
        } else if (newUpi) {
            merchName = newUpi[1].trim();
        } else if (impsMatch) {
            merchName = impsMatch[1].trim();
        } else if (dcMatch) {
            merchName = dcMatch[1].trim();
        } else if (atmMatch) {
            merchName = atmMatch[1].trim();
        } else if (/Interest Cr/i.test(det)) {
            merchName = 'Interest Credit';
        } else if (/Round ups/i.test(det)) {
            merchName = 'Round ups';
        } else if (/monies transfer/i.test(det)) {
            merchName = 'Monies Transfer';
        } else if (/Bill payment/i.test(det)) {
            merchName = 'Bill Payment';
        } else if (/Weekly saver/i.test(det)) {
            merchName = 'Weekly Saver';
        }
        
        merchName = merchName.replace(/^\d+\s*[-–]?\s*/, '').trim();
        
        txs.push({
            date: dt,
            ds: dateStr,
            ts: '00:00',
            det: det,
            amt: amt,
            type: isDebit ? 'DEBIT' : 'CREDIT',
            cat: catOf(merchName || det),
            merch: mName(merchName),
            source: 'slice'
        });
    }
    
    return txs;
}

function handleSlice(file) {
    if (!file || !file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file for Slice'); return; }
    currentSource = 'slice';
    const ld = showLoader('Analyzing Slice transactions…');
    const r = new FileReader();
    r.onload = async e => {
        try {
            let txs = await parseSlicePDF(e.target.result);
            if (!txs.length) throw new Error('No valid transactions found in Slice statement');
            txs = txs.sort((a,b) => a.date - b.date);
            DATA = crunch(txs);
            buildDashUI(DATA);
            setSourceBadge('slice');
        } catch(err) { alert('Error: ' + err.message); }
        finally { hideLoader(ld); }
    };
    r.readAsArrayBuffer(file);
}

async function parseMobiKwikPDF(arrayBuffer) {
    const pdfjsLib = await waitForPDFLib();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    const pagePromises = Array.from({ length: pdf.numPages }, async (_, idx) => {
        const page = await pdf.getPage(idx + 1);
        const content = await page.getTextContent();
        const pts = [];
        for (const item of content.items) {
            const s = item.str.trim();
            if (s) pts.push(s);
        }
        return pts;
    });
    const pageResults = await Promise.all(pagePromises);
    const tokens = pageResults.flat();
    
    // Find table start: following 'Wallet Balance' or 'Transaction Summary'
    let startIdx = 0;
    const wbIdx = tokens.findIndex(t => t === 'Wallet Balance');
    if (wbIdx !== -1) {
        startIdx = wbIdx + 1;
    } else {
        const tsIdx = tokens.findIndex(t => t.includes('Transaction Summary'));
        if (tsIdx !== -1) startIdx = tsIdx + 1;
    }
    
    const dateRe = /^\d{2}[-/]\d{2}[-/]\d{4}$|^\d{4}[-/]\d{2}[-/]\d{2}$/;
    const groups = [];
    let curr = [];
    
    for (let i = startIdx; i < tokens.length; i++) {
        const t = tokens[i];
        if (t.startsWith('NOTE:') || t.includes('computer generated receipt')) {
            break;
        }
        if (dateRe.test(t)) {
            if (curr.length) groups.push(curr);
            curr = [t];
        } else {
            if (curr.length) curr.push(t);
        }
    }
    if (curr.length) groups.push(curr);
    
    const txs = [];
    for (const g of groups) {
        if (g.length < 3) continue;
        const dateStr = g[0];
        
        let dt = null;
        if (/^\d{2}[-/]\d{2}[-/]\d{4}$/.test(dateStr)) {
            const sep = dateStr.includes('-') ? '-' : '/';
            const parts = dateStr.split(sep);
            const d = parseInt(parts[0], 10);
            const m = parseInt(parts[1], 10) - 1;
            const y = parseInt(parts[2], 10);
            dt = new Date(y, m, d);
        } else {
            dt = new Date(dateStr + " 00:00:00");
        }
        if (!dt || isNaN(dt.getTime())) continue;
        
        const amtIdx = g.length - 2;
        let isDebit = false;
        let isCredit = false;
        let detEnd = amtIdx;
        
        const amtToken = g[amtIdx];
        if (amtToken.startsWith('Rs') || amtToken.startsWith('₹')) {
            if (amtIdx - 1 >= 1 && (g[amtIdx - 1] === '-' || g[amtIdx - 1] === '+')) {
                const sign = g[amtIdx - 1];
                if (sign === '-') isDebit = true;
                else isCredit = true;
                detEnd = amtIdx - 1;
            } else {
                detEnd = amtIdx;
            }
        } else if (amtToken.startsWith('-')) {
            isDebit = true;
            detEnd = amtIdx;
        } else if (amtToken.startsWith('+')) {
            isCredit = true;
            detEnd = amtIdx;
        } else {
            detEnd = amtIdx;
        }
        
        const cleanAmtStr = amtToken.replace(/^[^0-9]*/, '').replace(/,/g, '');
        const amt = parseFloat(cleanAmtStr);
        if (isNaN(amt) || amt <= 0) continue;
        
        const detTokens = g.slice(1, detEnd);
        const det = detTokens.join(' ').trim();
        
        if (!isDebit && !isCredit) {
            if (/\b(received|cashback|refund)\b/i.test(det)) {
                isCredit = true;
            } else {
                isDebit = true;
            }
        }
        
        txs.push({
            date: dt,
            ds: dateStr,
            ts: '00:00',
            det: det,
            amt: amt,
            type: isDebit ? 'DEBIT' : 'CREDIT',
            cat: catOf(det),
            merch: mName(det),
            source: 'mobikwik'
        });
    }
    
    return txs;
}

function handleMobiKwik(file) {
    if (!file || !file.name.toLowerCase().endsWith('.pdf')) { alert('Please upload a PDF file for MobiKwik'); return; }
    currentSource = 'mobikwik';
    const ld = showLoader('Analyzing MobiKwik transactions…');
    const r = new FileReader();
    r.onload = async e => {
        try {
            let txs = await parseMobiKwikPDF(e.target.result);
            if (!txs.length) throw new Error('No valid transactions found in MobiKwik statement');
            txs = txs.sort((a,b) => a.date - b.date);
            DATA = crunch(txs);
            buildDashUI(DATA);
            setSourceBadge('mobikwik');
        } catch(err) { alert('Error: ' + err.message); }
        finally { hideLoader(ld); }
    };
    r.readAsArrayBuffer(file);
}


// ── Topbar Actions ─────────────────────────────────────────
if (document.getElementById('themeBtn')) {
    document.getElementById('themeBtn').onclick = () => {
        const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', t);
        
        // Update Chart globally
        if (typeof Chart !== 'undefined') {
            Chart.defaults.color = (t === 'light') ? '#000000' : 'rgba(255, 255, 255, 0.7)';
            Chart.defaults.borderColor = (t === 'light') ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
        }
        
        // Re-render dashboard if active so charts redraw with new colors
        if (typeof DATA !== 'undefined' && DATA && !document.getElementById('dash').classList.contains('hidden')) {
            buildDashUI(DATA, false);
        }
    };
}

if (document.getElementById('replayBtn')) {
    document.getElementById('replayBtn').onclick = () => {
        if (typeof DATA !== 'undefined' && DATA) openSlides(DATA);
    };
}

if (document.getElementById('newBtn')) {
    document.getElementById('newBtn').onclick = () => {
        document.getElementById('dash').classList.add('hidden');
        document.getElementById('landing').classList.remove('hidden');
        document.getElementById('sourcePicker').classList.remove('hidden');
        document.querySelectorAll('.upload-zone').forEach(el => el.classList.add('hidden'));
        
        if (typeof bothFiles !== 'undefined') {
            bothFiles = { pp: null, gp: null, pt: null, sm: null, sl: null, mk: null };
            const defaults = {
                PP: 'Upload (.csv or .pdf)',
                GP: 'Upload (.pdf)',
                PT: 'Upload (.pdf or .xlsx)',
                SM: 'Upload (.pdf)',
                SL: 'Upload (.pdf)',
                MK: 'Upload (.pdf)'
            };
            ['PP', 'GP', 'PT', 'SM', 'SL', 'MK'].forEach(k => {
                const statusEl = document.getElementById(`both${k}Status`);
                if (statusEl) statusEl.textContent = defaults[k];
                const slotEl = document.getElementById(`dropBoth${k}`);
                if (slotEl) slotEl.classList.remove('file-ready');
            });
            if (typeof checkAnalyzeBoth === 'function') checkAnalyzeBoth();
        }
        
        document.querySelectorAll('input[type="file"]').forEach(el => el.value = '');
        currentSource = null;
    };
}

if (document.getElementById('simpleChk')) {
    document.getElementById('simpleChk').onchange = (e) => {
        simple = e.target.checked;
        if (typeof DATA !== 'undefined' && DATA) {
            DATA = crunch(DATA.txs);
            buildDashUI(DATA, false);
        }
    };
}
