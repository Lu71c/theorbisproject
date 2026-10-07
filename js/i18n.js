/* ==========================================================================
   THE ORBIS PROJECT - SYSTEM I18N (IT / EN DYNAMIC DICTIONARY)
   ========================================================================== */

const translations = {
    it: {
        title: "Sistemi Smart e Strutture Tech Senza Confini",
        subtitle: "Applichiamo la tecnologia del domani per risolvere i problemi di oggi.",
        nav_info: "Info",
        nav_about: "Chi Siamo",
        nav_work: "Lavora con Noi",
        nav_contact: "Contatti",
        nav_support: "Sostienici",
        node1_title: "Agenti AI Verticali",
        node1_sub: "Gemini Gems & Custom Prompts",
        node2_title: "OSINT Data Analysis",
        node2_sub: "Data Mining Python & API",
        node3_title: "Suite & Automazione",
        node3_sub: "Workflow Optimization B2B",
        node4_title: "Sito Web Intelligente",
        node4_sub: "GitHub Pages Custom & Bot Mgmt",
        compliance_btn: "ETICA & CODICE // Compliance Center (EU AI Act & GDPR)",
        xenon_initial: "Saluti umano! Sono Xenon, la tua interfaccia guida. Clicca sul Pianeta Orbis e scopri i nostri artefatti tecnologici."
    },
    en: {
        title: "Smart Systems & Boundaryless Tech Structures",
        subtitle: "Applying tomorrow's technology to solve today's problems.",
        nav_info: "Info",
        nav_about: "About Us",
        nav_work: "Work With Us",
        nav_contact: "Contact",
        nav_support: "Support Us",
        node1_title: "Vertical AI Agents",
        node1_sub: "Gemini Gems & Custom Prompts",
        node2_title: "OSINT Data Analysis",
        node2_sub: "Python Data Mining & API",
        node3_title: "Suite & Automation",
        node3_sub: "B2B Workflow Optimization",
        node4_title: "Intelligent Website",
        node4_sub: "Custom GitHub Pages & Bot Mgmt",
        compliance_btn: "ETHICS & CODE // Compliance Center (EU AI Act & GDPR)",
        xenon_initial: "Greetings human! I am Xenon, your guide interface. Click on Planet Orbis to discover our tech artifacts."
    }
};

window.currentLang = 'it';

function toggleLanguage() {
    window.currentLang = window.currentLang === 'it' ? 'en' : 'it';
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.innerText = window.currentLang === 'it' ? '🇬🇧 EN' : '🇮🇹 IT';
    }

    const t = translations[window.currentLang];
    
    // 1. Titolo e Sottotitolo Principali
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) mainTitle.innerText = t.title;

    const mainSubtitle = document.getElementById('main-subtitle');
    if (mainSubtitle) mainSubtitle.innerText = t.subtitle;

    // 2. Link della Navbar Superiore
    const navLinks = document.querySelectorAll('.center-links a');
    if (navLinks.length >= 5) {
        navLinks[0].innerText = t.nav_info;
        navLinks[1].innerText = t.nav_about;
        navLinks[2].innerText = t.nav_work;
        navLinks[3].innerText = t.nav_contact;
        navLinks[4].innerText = t.nav_support;
    }

    // 3. I 4 Nodi Principali dell'HUD
    const node1 = document.querySelector('[data-target="agenti-ai"] .node-text');
    if (node1) {
        const h3 = node1.querySelector('h3');
        const span = node1.querySelector('span');
        if (h3) h3.innerText = t.node1_title;
        if (span) span.innerText = t.node1_sub;
    }

    const node2 = document.querySelector('[data-target="osint"] .node-text');
    if (node2) {
        const h3 = node2.querySelector('h3');
        const span = node2.querySelector('span');
        if (h3) h3.innerText = t.node2_title;
        if (span) span.innerText = t.node2_sub;
    }

    const node3 = document.querySelector('[data-target="suite-aziendale"] .node-text');
    if (node3) {
        const h3 = node3.querySelector('h3');
        const span = node3.querySelector('span');
        if (h3) h3.innerText = t.node3_title;
        if (span) span.innerText = t.node3_sub;
    }

    const node4 = document.querySelector('[data-target="telegram-bridge"] .node-text');
    if (node4) {
        const h3 = node4.querySelector('h3');
        const span = node4.querySelector('span');
        if (h3) h3.innerText = t.node4_title;
        if (span) span.innerText = t.node4_sub;
    }

    // 4. Barra Compliance Center
    const compBtn = document.querySelector('.bottom-node');
    if (compBtn) {
        compBtn.innerHTML = `<span class="pulse-dot"></span> ${t.compliance_btn}`;
    }

    // 5. Fumetto Guida di Xenon
    const xenonText = document.getElementById('xenon-text');
    if (xenonText && !window.isBigBangTriggered) {
        xenonText.innerText = t.xenon_initial;
    }

    // 6. Aggiornamento istantaneo della scheda modale aperta (se attiva)
    const hash = window.location.hash.replace('#', '');
    if (hash && typeof openModal === 'function') {
        const overlay = document.getElementById('modal-overlay');
        if (overlay && !overlay.classList.contains('hidden')) {
            openModal(hash);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});
