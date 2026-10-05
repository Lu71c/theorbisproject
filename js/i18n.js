/* ==========================================================================
   THE ORBIS PROJECT - CANVAS 2D ENGINE (DNA WAVE + REACTIVE PARTICLES)
   ========================================================================== */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let waveOffset = 0;
let clickPulse = 0;
let pulseAnim = null;
let isTabActive = true;

const mouse = {
    x: -1000,
    y: -1000,
    radius: 130,
    isTouch: false
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

function initParticles() {
    particles = [];
    const isMobile = width < 768;
    const count = isMobile ? 35 : 85;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.8 + 0.5,
            baseAlpha: Math.random() * 0.5 + 0.2
        });
    }
}

window.addEventListener('resize', resize);

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isTouch = false;
});

window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isTouch = true;
    }
}, { passive: true });

window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

// Impulso d'energia di 500ms al click
window.addEventListener('click', (e) => {
    if (e.target.tagName === 'CANVAS' || e.target.classList.contains('cyber-vignette')) {
        clickPulse = 1.0;
        const startTime = performance.now();
        
        function animatePulse(now) {
            const elapsed = now - startTime;
            if (elapsed < 500) {
                clickPulse = 1 - (elapsed / 500);
                pulseAnim = requestAnimationFrame(animatePulse);
            } else {
                clickPulse = 0;
            }
        }
        if (pulseAnim) cancelAnimationFrame(pulseAnim);
        pulseAnim = requestAnimationFrame(animatePulse);
    }
});

// Battery Saver: Pausa rendering se la scheda non è in primo piano
document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive) {
        requestAnimationFrame(render);
    }
});

function render() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);

    // 1. Campo Particelle Reattivo
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        Ottimo lavoro! Ora diamo vita al sito creando la logica in JavaScript nella cartella **`js`**. 

Come fatto per il CSS, su GitHub creeremo 4 file distinti dentro la cartella `js`:
1. `js/i18n.js` (Gestione della lingua IT/EN istantanea)
2. `js/audio.js` (Sintetizzatore sonoro Web Audio API)
3. `js/canvas.js` (Sfondo animato 2D a 60 FPS con onde DNA ed effetti particellari)
4. `js/modals.js` (Navigazione ad altissima velocità e schede sovrapposte)

Procediamo creando un file alla volta direttamente su GitHub (`+` -> **Create new file**).

---

### 1. FILE: `js/i18n.js`
Crea un nuovo file chiamato **`js/i18n.js`** e incolla questo codice:

```javascript
/* ==========================================================================
   THE ORBIS PROJECT - SYSTEM I18N (IT / EN DYNAMIC DICTIONARY)
   ========================================================================== */

const translations = {
    it: {
        title: "Sistemi Intelligenti e Architetture Tech Senza Confini",
        subtitle: "Uniamo data intelligence, script avanzati, sviluppo web e automazione per trasformare la complessità tecnologica nel vantaggio competitivo della tua azienda.",
        node1_title: "Agenti AI Verticali",
        node1_sub: "Gemini Gems & Custom Prompts",
        node2_title: "OSINT Data Analysis",
        node2_sub: "Data Mining Python & API",
        node3_title: "Suite & Automazione",
        node3_sub: "Workflow Optimization B2B",
        node4_title: "Web App & Telegram Bridge",
        node4_sub: "GitHub Pages Custom & Bot Mgmt",
        compliance_btn: "ETICA & CODICE // Compliance Center (EU AI Act & GDPR)",
        sfx_on: "[ 🔊 SFX ON ]",
        sfx_off: "[ 🔇 SFX OFF ]"
    },
    en: {
        title: "Intelligent Systems & Boundaryless Tech Architectures",
        subtitle: "We unify data intelligence, advanced scripting, custom web development, and automation to turn tech complexity into your business's core edge.",
        node1_title: "Vertical AI Agents",
        node1_sub: "Gemini Gems & Custom Prompts",
        node2_title: "OSINT Data Analysis",
        node2_sub: "Python Data Mining & APIs",
        node3_title: "Suite & Automation",
        node3_sub: "B2B Workflow Optimization",
        node4_title: "Web App & Telegram Bridge",
        node4_sub: "Custom GitHub Pages & Bot Mgmt",
        compliance_btn: "ETHICS & CODE // Compliance Center (EU AI Act & GDPR)",
        sfx_on: "[ 🔊 SFX ON ]",
        sfx_off: "[ 🔇 SFX OFF ]"
    }
};

let currentLang = 'it';

function toggleLanguage() {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.innerText = currentLang === 'it' ? '[ 🇮🇹 IT | 🇬🇧 EN ]' : '[ 🇬🇧 EN | 🇮🇹 IT ]';
    }

    const t = translations[currentLang];
    
    // Update main titles
    document.getElementById('main-title').innerText = t.title;
    document.getElementById('main-subtitle').innerText = t.subtitle;

    // Update nodes
    const node1 = document.querySelector('[data-target="agenti-ai"] .node-text');
    if (node1) {
        node1.querySelector('h3').innerText = t.node1_title;
        node1.querySelector('span').innerText = t.node1_sub;
    }

    const node2 = document.querySelector('[data-target="osint"] .node-text');
    if (node2) {
        node2.querySelector('h3').innerText = t.node2_title;
        node2.querySelector('span').innerText = t.node2_sub;
    }

    const node3 = document.querySelector('[data-target="suite-aziendale"] .node-text');
    if (node3) {
        node3.querySelector('h3').innerText = t.node3_title;
        node3.querySelector('span').innerText = t.node3_sub;
    }

    const node4 = document.querySelector('[data-target="telegram-bridge"] .node-text');
    if (node4) {
        node4.querySelector('h3').innerText = t.node4_title;
        node4.querySelector('span').innerText = t.node4_sub;
    }

    const compBtn = document.querySelector('.bottom-node');
    if (compBtn) {
        compBtn.childNodes[1].nodeValue = " " + t.compliance_btn;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});
