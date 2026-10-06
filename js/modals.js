/* ==========================================================================
   THE ORBIS PROJECT - MODAL ENGINE & PLANET BIG BANG ROUTER
   Fast, zero refresh, deeplinking support (#osint, #agenti-ai, etc.)
   ========================================================================== */

const modalData = {
    'agenti-ai': {
        title: "🧠 AGENTI AI VERTICALI",
        subtitle: "Gemini Gems pre-ingegnerizzate per task specifici. Installale sul tuo account in un clic.",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem;">
                <p>Non offriamo semplici chatbot, ma <strong>Agenti AI specializzati</strong> con logica anti-allucinazione. Clicca su "Installa Gemma" per aggiungerli direttamente al tuo Google Gemini e usarli in sicurezza con i tuoi dati.</p>
            </div>
            
            <div class="agents-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                
                <!-- Burocrate -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🏛️ Burocrate</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Simula un ispettore statale severissimo. Ottimizza pratiche, contratti e documenti previdenziali per scovare errori e prevenire rigetti formali.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1xrRrEVQDK74NcMbbLNJJGtaFcNVJ4YiD?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Crypto Analista -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">📈 Crypto Analista</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Analizza dati di mercato per smontare le narrative dei fuffaguru. Tratta ogni moneta come una trappola per proteggerti dalle bolle finanziarie.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/13i7y0aH39k_WgMSxC_4Gcsuznp0h8j0h?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Dirittologo -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">⚖️ Dirittologo</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Esamina le leggi e simula le obiezioni avversarie. Ti dà la realtà nuda su cause civili calcolando le probabilità di successo e stilando checklist strategiche.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/17Xc4cBjuuo6uY5DMN2WlhxV-Bj6T_-nS?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Guida Gastronomica -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🍽️ Guida Gastronomica</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Incrocia recensioni, foto e metadati Maps per scartare spietatamente le trappole per turisti. Ti consegna 5 locali veraci nella tua zona esatta.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/18E4w0PlxZJ92RWZLUdeiDIugZYuijARh?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Guida Nightlife -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🪩 Guida Nightlife</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Mappatore dell'ecosistema notturno. Incrocia l'affollamento live con qualità dei drink e musica per evitarti code e pianificare la serata perfetta.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/15z_sx9wdptEoATeOb0qE6jlf8WT058sL?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- IA Detector -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🕵️‍♂️ IA Detector</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Scansiona testi in cerca di impronte digitali sintetiche. Smaschera Deepfake testuali, finte recensioni e articoli scritti da bot fornendo un verdetto matematico.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1MwKHkeRatOCSBcY3douB_LPErbTXGd5j?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Pessimista -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🖤 Pessimista</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">L'anti-chatbot cinico. Smonta il finto ottimismo servile delle IA commerciali rifiutando qualsiasi utilità pratica a colpi di tagliente realismo.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1reZciKeDHWFpAjnvtosHAanRa9H9lTfE?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Pokédect -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🃏 Pokédect</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Calcola al millimetro l'usura e i micro-graffi delle carte Pokémon da una foto. Fornisce la stima economica in base alle aste e ti consiglia se gradarla.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/10K2TejkByFq-8y1UThU4sx7shUPRX59r?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Politologo -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🏛️ Politologo</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Debunker istituzionale privo di partiti. Incrocia le dichiarazioni pubbliche con i dati ISTAT, traducendo il politichese per scovare bugie e omissioni di bilancio.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1OgveMhNNuiH3s2Z0qXtJsZfkDoCFAp2Z?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

                <!-- Youtuber -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">▶️️ Youtuber</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Analista numerico spietato. Studia i volumi di ricerca e i trucchi psicologici per farti fare views. Crea titoli micidiali e strutture per trattenere il pubblico.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1nFuZ30FBhA9L5-a5PBOS2RbPcp5imv_W?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALLA GEMMA</a>
                </div>

            </div>
            
            <style>
                .cyber-btn-install:hover {
                    background: rgba(0, 255, 157, 0.2) !important;
                    box-shadow: 0 0 15px rgba(0, 255, 157, 0.4) !important;
                    transform: translateY(-2px);
                }
            </style>
            `
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

function triggerBigBang() {
    if (isBigBangTriggered) return;

    const planetCore = document.getElementById('hud-core');
    if (planetCore) {
        planetCore.classList.add('planet-exploded');
    }

    const xenonContainer = document.getElementById('xenon-container');
    if (xenonContainer) {
        xenonContainer.classList.add('xenon-moved-center');
    }

    const hiddenNodes = document.querySelectorAll('.hud-node-hidden');
    hiddenNodes.forEach((node, index) => {
        setTimeout(() => {
            node.classList.remove('hud-node-hidden');
        }, 550 + index * 90);
    });

    const xenonText = document.getElementById('xenon-text');
    if (xenonText) {
        xenonText.innerText = "Eccellente! Il Pianeta si è rivelato. Esplora le schede dei nostri servizi o clicca su di me per assistenza.";
    }

    isBigBangTriggered = true;
}

function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    if (!isBigBangTriggered) {
        triggerBigBang();
    }

    const overlay = document.getElementById('modal-overlay');
    const dynamicBody = document.getElementById('modal-dynamic-body');

    const xenonHelpIcon = `
        <div class="xenon-help-icon" title="Clicca per la Guida di Xenon" style="cursor:pointer; width:36px; height:36px; border-radius:50%; background:rgba(0, 243, 255, 0.08); border:1px solid var(--glass-border); display:flex; align-items:center; justify-content:center; transition:all 0.3s ease;">
            <svg viewBox="0 0 120 120" style="width:24px; height:24px; filter:drop-shadow(0 0 4px rgba(0, 255, 157, 0.6));">
                <ellipse cx="60" cy="75" rx="45" ry="12" fill="#0d1b2a" stroke="#00f3ff" stroke-width="1.8" />
                <path d="M 30,70 A 32,32 0 0,1 90,70 Z" fill="rgba(0, 243, 255, 0.15)" stroke="#00f3ff" stroke-width="1.2" />
                <path d="M 42,48 C 42,32 78,32 78,48 C 78,58 68,64 60,64 C 52,64 42,58 42,48 Z" fill="#94a3b8" stroke="#00ff9d" stroke-width="1" />
                <ellipse cx="51" cy="48" rx="7" ry="10" transform="rotate(-15 51 48)" fill="#020610" stroke="#00f3ff" stroke-width="1" />
                <ellipse cx="69" cy="48" rx="7" ry="10" transform="rotate(15 69 48)" fill="#020610" stroke="#00f3ff" stroke-width="1" />
                <circle cx="53" cy="45" r="2" fill="#00f3ff" />
                <circle cx="67" cy="45" r="2" fill="#00f3ff" />
            </svg>
        </div>
    `;

    const closeBtnHtml = `
        <button class="cyber-btn-close-dynamic" style="background:rgba(255, 50, 50, 0.1); border:1px solid rgba(255, 50, 50, 0.3); color:#ff5555; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:600; font-size:0.85rem; font-family:var(--font-main); transition:all 0.2s ease;">✖ ESCI</button>
    `;

    dynamicBody.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.5rem; gap:1rem;">
            <div>
                <h2 style="font-size:1.8rem; color:#00f3ff; margin-bottom:0.3rem;">${data.title}</h2>
                <h4 style="font-size:0.9rem; color:#00ff9d; font-weight:400; line-height:1.4;">${data.subtitle}</h4>
            </div>
            
            <div style="display:flex; gap:12px; align-items:center; flex-shrink:0;">
                ${xenonHelpIcon}
                ${closeBtnHtml}
            </div>
        </div>
        
        <hr style="border:0; border-top:1px solid rgba(0,243,255,0.2); margin-bottom:1.5rem;">
        
        ${data.content}
        
        <style>
            .cyber-btn-close-dynamic:hover {
                background: rgba(255, 50, 50, 0.35) !important;
                color: #ffffff !important;
                box-shadow: 0 0 15px rgba(255, 50, 50, 0.4) !important;
            }
        </style>
    `;

    overlay.classList.remove('hidden');

    const dynamicCloseBtn = document.querySelector('.cyber-btn-close-dynamic');
    if (dynamicCloseBtn) {
        dynamicCloseBtn.addEventListener('click', closeModal);
    }

    const helpBtn = document.querySelector('.xenon-help-icon');
    if(helpBtn) {
        helpBtn.addEventListener('mouseover', () => {
            helpBtn.style.background = 'rgba(0, 255, 157, 0.15)';
            helpBtn.style.borderColor = '#00ff9d';
        });
        helpBtn.addEventListener('mouseout', () => {
            helpBtn.style.background = 'rgba(0, 243, 255, 0.08)';
            helpBtn.style.borderColor = 'rgba(0, 243, 255, 0.25)';
        });
        helpBtn.addEventListener('click', () => {
            alert('Xenon: Modalità Guida sarà attivata a breve per esplorare le Gems.');
        });
    }
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
    const planetCore = document.getElementById('hud-core');
    if (planetCore) {
        planetCore.addEventListener('click', () => {
            triggerBigBang();
        });
    }

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

    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
});
