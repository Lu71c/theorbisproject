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
        compliance_btn: "ETICA & CODICE // Compliance Center (EU AI Act & GDPR)"
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
        compliance_btn: "ETHICS & CODE // Compliance Center (EU AI Act & GDPR)"
    }
};

let currentLang = 'it';

function toggleLanguage() {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.innerText = currentLang === 'it' ? '🇬🇧 EN' : '🇮🇹 IT';
    }

    const t = translations[currentLang];
    
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) mainTitle.innerText = t.title;

    const mainSubtitle = document.getElementById('main-subtitle');
    if (mainSubtitle) mainSubtitle.innerText = t.subtitle;

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

    const compBtn = document.querySelector('.bottom-node');
    if (compBtn) {
        compBtn.innerHTML = `<span class="pulse-dot"></span> ${t.compliance_btn}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});
