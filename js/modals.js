/* ==========================================================================
   THE ORBIS PROJECT - MODAL ENGINE & PLANET BIG BANG ROUTER
   Fast, zero refresh, deeplinking support (#osint, #agenti-ai, etc.)
   ========================================================================== */

const modalData = {
    'agenti-ai': {
        title: "🧠 AGENTI AI VERTICALI",
        subtitle: "Gemini Gems, System Rules & Engineering Prompting",
        content: `
            <div style="line-height:1.6; color:#e2e8f0;">
                <p style="margin-bottom:1rem;">Progettiamo e rilasciamo <strong>Agenti AI su misura</strong> pronti all'uso immediato. Gli utenti possono integrarli direttamente nel proprio profilo Google Gemini come Gems o utilizzarli tramite API.</p>
                <div style="background:rgba(0, 243, 255, 0.05); padding:1rem; border-left:3px solid #00f3ff; margin-bottom:1rem;">
                    <strong>🔹 Caratteristiche chiave:</strong>
                    <ul style="margin-left:1.5rem; margin-top:0.5rem;">
                        <li>System Prompt ad alta precisione con logica anti-allucinazione.</li>
                        <li>Integrazione immediata nel tuo workflow senza formazione di codice.</li>
                        <li>Analisi verticale di documenti, contratti, log e contesti complessi.</li>
                    </ul>
                </div>
            </div>`
    },
    'osint': {
        title: "👁‍🗨️ OSINT DATA ANALYSIS",
        subtitle: "Data Mining Python, API Direct Integration & Lead Extraction",
        content: `
            <div style="line-height:1.6; color:#e2e8f0;">
                <p style="margin-bottom:1rem;">Sviluppiamo pipeline personalizzate in <strong>Python</strong> per l'estrazione, pulizia ed elaborazione dati ad alte prestazioni.</p>
                <div style="background:rgba(10, 25, 45, 0.8); border:1px solid rgba(0,255,157,0.3); padding:1rem; font-family:monospace; border-radius:6px; margin-bottom:1rem; color:#00ff9d;">
                    > [SYSTEM STATUS]: EXTRACTION COMPLETE<br>
                    > Data Cleaned: P.IVA, PEC, Phone, Contact Name<br>
                    > Format Output: Structured JSON / PostgreSQL Ready
                </div>
            </div>`
    },
    'suite-aziendale': {
        title: "⚙️ SUITE & AUTOMAZIONE AZIENDALE",
        subtitle: "Workflow Optimization, Internal Tools & B2B Dashboards",
        content: `
            <div style="line-height:1.6; color:#e2e8f0;">
                <p style="margin-bottom:1rem;">Riduciamo a zero i compiti ripetitivi ingegnerizzando automazioni custom che collegano i software che già utilizzi.</p>
                <p>Dai report periodici automatici ai sistemi di sincronizzazione inventario/gestionale tramite API dedicate.</p>
            </div>`
    },
    'telegram-bridge': {
        title: "⚡ SITO WEB INTELLIGENTE",
        subtitle: "Siti Web Custom su GitHub Pages & Gestione Telegram Bot",
        content: `
            <div style="line-height:1.6; color:#e2e8f0;">
                <p style="margin-bottom:1rem;">Creiamo Single-Page Application ultra-veloci ospitate su GitHub Pages, collegate direttamente ad un <strong>Bot Telegram aziendale</strong>.</p>
                <div style="background:rgba(0, 243, 255, 0.05); padding:1rem; border-radius:6px;">
                    <strong>Vantaggi dell'integrazione Telegram:</strong>
                    <ul style="margin-left:1.5rem; margin-top:0.5rem;">
                        <li>Ricevi notifiche di contatto e lead in tempo reale direttamente in chat.</li>
                        <li>Gestisci gli aggiornamenti del tuo sito via comandi Telegram.</li>
                        <li>Zero costi mensili di server: architettura serverless al 100%.</li>
                    </ul>
                </div>
            </div>`
    },
    'compliance': {
        title: "🛡️ ETICA & CODICE // COMPLIANCE CENTER",
        subtitle: "EU AI Act, GDPR & Human-in-the-Loop Architecture",
        content: `
            <div style="line-height:1.6; color:#e2e8f0;">
                <p style="margin-bottom:1rem;">Sviluppare tecnologia nel mondo moderno significa garantire la massima sicurezza legale e tutela della privacy.</p>
                <ul style="margin-left:1.5rem; margin-bottom:1rem;">
                    <li><strong>Conformità EU AI Act:</strong> Trasparenza degli algoritmi e valutazione del livello di rischio.</li>
                    <li><strong>Privacy by Design & GDPR:</strong> Offuscamento dati sensibili e protezione rigorosa delle informazioni aziendali.</li>
                    <li><strong>Human-in-the-Loop:</strong> L'intelligenza artificiale potenziata, guidata e validata dal controllo umano.</li>
                </ul>
            </div>`
    },
    'chi-siamo': {
        title: "🏢 CHI SIAMO",
        subtitle: "The Orbis Project Architecture",
        content: "<p style='color:#e2e8f0;'>Siamo ingegneri e sviluppatori software focalizzati sulle prestazioni e sull'efficienza. Creiamo soluzioni tecnologiche su misura, eliminando ogni zavorra inutile per offrire velocità e valore concreto alle imprese.</p>"
    },
    'info': {
        title: "ℹ️ INFORMAZIONI",
        subtitle: "Specifiche di Sistema",
        content: "<p style='color:#e2e8f0;'>Sito realizzato con tecnologia Vanilla Web. Nessun framework (React/Angular), nessun server intermedio. Tempo di risposta globale &lt; 150ms.</p>"
    },
    'lavora-con-noi': {
        title: "🤝 LAVORA CON NOI",
        subtitle: "Opportunità e Collaborazioni",
        content: "<p style='color:#e2e8f0;'>Sei uno sviluppatore Python, specialista OSINT o esperto di conformità legale tech? Scrivici per collaborare sui nostri progetti B2B.</p>"
    },
    'contatti': {
        title: "✉️ CONTATTACI",
        subtitle: "Canale Diretto",
        content: "<p style='color:#e2e8f0;'>Contattaci via email o direttamente tramite il nostro canale Telegram per discutere la tua soluzione custom.</p>"
    },
    'sostienici': {
        title: "✨ SOSTIENICI",
        subtitle: "Supporta la Ricerca Indipendente",
        content: "<p style='color:#e2e8f0;'>Sostieni il nostro impegno nello sviluppo di software etico, aperto e conforme alle normative europee sulla riservatezza dei dati.</p>"
    }
};

let isBigBangTriggered = false;

// Funzione per scatenare l'esplosione a raggiera dei Nodi (Big Bang)
function triggerBigBang() {
    const hiddenNodes = document.querySelectorAll('.hud-node-hidden');
    hiddenNodes.forEach((node, index) => {
        setTimeout(() => {
            node.classList.remove('hud-node-hidden');
        }, index * 90); // Rilascio progressivo elusivo
    });

    // Aggiorna il messaggio di Xenon
    const xenonText = document.getElementById('xenon-text');
    if (xenonText) {
        xenonText.innerText = "Eccellente! Gli artefatti tecnologici sono stati sbloccati. Esplora i nodi o clicca su di me per assistenza.";
    }

    isBigBangTriggered = true;
}

function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    // Se si apre una modale direttamente da hash URL, sblocchiamo comunque il Big Bang
    if (!isBigBangTriggered) {
        triggerBigBang();
    }

    const overlay = document.getElementById('modal-overlay');
    const dynamicBody = document.getElementById('modal-dynamic-body');

    // SVG Mini Avatar di Xenon per l'intestazione della finestra modale
    const xenonMiniSvg = `
        <svg viewBox="0 0 120 120" class="xenon-mini-avatar">
            <ellipse cx="60" cy="75" rx="45" ry="12" fill="#0d1b2a" stroke="#00f3ff" stroke-width="1.8" />
            <path d="M 30,70 A 32,32 0 0,1 90,70 Z" fill="rgba(0, 243, 255, 0.15)" stroke="#00f3ff" stroke-width="1.2" />
            <path d="M 42,48 C 42,32 78,32 78,48 C 78,58 68,64 60,64 C 52,64 42,58 42,48 Z" fill="#94a3b8" stroke="#00ff9d" stroke-width="1" />
            <ellipse cx="51" cy="48" rx="7" ry="10" transform="rotate(-15 51 48)" fill="#020610" stroke="#00f3ff" stroke-width="1" />
            <ellipse cx="69" cy="48" rx="7" ry="10" transform="rotate(15 69 48)" fill="#020610" stroke="#00f3ff" stroke-width="1" />
            <circle cx="53" cy="45" r="2" fill="#00f3ff" />
            <circle cx="67" cy="45" r="2" fill="#00f3ff" />
            <circle cx="60" cy="22" r="3" fill="#00ff9d" />
        </svg>
    `;

    dynamicBody.innerHTML = `
        <div class="modal-xenon-bar">
            ${xenonMiniSvg}
            <p><strong>Xenon Guida:</strong> Stai analizzando l'artefatto <em>"${data.title}"</em>. Clicca su ESCI in alto a destra per tornare all'Universo Orbis.</p>
        </div>
        <h2 style="font-size:1.8rem; color:#00f3ff; margin-bottom:0.3rem;">${data.title}</h2>
        <h4 style="font-size:0.9rem; color:#00ff9d; margin-bottom:1.5rem; font-weight:400;">${data.subtitle}</h4>
        <hr style="border:0; border-top:1px solid rgba(0,243,255,0.2); margin-bottom:1.5rem;">
        ${data.content}
    `;

    overlay.classList.remove('hidden');
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('hidden');
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && modalData[hash]) {
        openModal(hash);
    } else {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // CLICK SUL PIANETA ORBIS -> SBLOCCO "BIG BANG" DEI NODI
    const planetCore = document.getElementById('hud-core');
    if (planetCore) {
        planetCore.addEventListener('click', () => {
            triggerBigBang();
        });
    }

    // CLICK SU XENON AVATAR -> INTERAZIONE E SBLOCCO
    const xenonAvatar = document.getElementById('xenon-avatar');
    if (xenonAvatar) {
        xenonAvatar.addEventListener('click', () => {
            if (!isBigBangTriggered) {
                triggerBigBang();
            } else {
                openModal('info');
            }
        });
    }

    // Close button click
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Backdrop click close
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    // ESC key close
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // URL Hash Routing Listeners
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check iniziale al caricamento della pagina
});
