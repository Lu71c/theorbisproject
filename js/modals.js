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
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🏛 Burocrate</h3>
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
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">▶ Youtuber</h3>
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
        title: "👁‍🗨️ OSINT & DATA INTELLIGENCE",
        subtitle: "Data Mining Python, Analisi Concorrenza & Lead Generation B2B",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem;">
                <p>Nel mercato odierno, chi ha i dati detta le regole. La nostra infrastruttura <strong>OSINT (Open Source Intelligence)</strong> trasforma il caos del web pubblico in database commerciali strutturati e legali.</p>
                <p style="margin-top:0.8rem;">Sviluppiamo pipeline personalizzate in Python per estrarre, pulire ed elaborare informazioni pubbliche, consegnandoti insight azionabili direttamente nel tuo CRM o nelle tue dashboard direzionali.</p>
            </div>

            <!-- I 3 PILASTRI DEL SERVIZIO -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:1rem; margin-bottom:2.5rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🎯 Lead Generation Automatica</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Estrazione di anagrafiche aziendali, contatti B2B e decision maker da registri, fiere e directory pubbliche nel pieno rispetto del GDPR (Dati di Persone Giuridiche).</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">📉 Price & Competitor Intelligence</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Monitoraggio in tempo reale dei cataloghi e dei prezzi della concorrenza. Ricevi alert automatici non appena un competitor modifica le sue offerte strategiche.</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🌐 Sentiment & Reputation Mining</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Analisi massiva delle recensioni e delle opinioni online tramite IA per individuare i punti deboli dei tuoi concorrenti e usarli come leva nelle tue vendite.</p>
                </div>
            </div>

            <h3 style="color:#ffffff; font-size:1.1rem; margin-bottom:1rem; letter-spacing:1px;">🧭 ANALISI SWOT STRATEGICA DELL'OSINT</h3>
            
            <!-- GRIGLIA SWOT 2x2 PERFETTA -->
            <div class="swot-grid-2x2">
                
                <!-- STRENGTHS -->
                <div style="background:rgba(0, 255, 157, 0.05); border-left:4px solid #00ff9d; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>S - PUNTI DI FORZA</span> <span>💪</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>Dati 100% Legali:</strong> Estrazione limitata a fonti pubbliche, zero violazioni.</li>
                        <li><strong>Scalabilità Immediata:</strong> Python permette di analizzare 10 o 100.000 record con lo stesso sforzo.</li>
                        <li><strong>Zero Costi di Acquisizione:</strong> Nessun budget bruciato in Ads per trovare i lead.</li>
                    </ul>
                </div>

                <!-- WEAKNESSES -->
                <div style="background:rgba(255, 153, 0, 0.05); border-left:4px solid #ff9900; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#ff9900; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>W - DEBOLEZZE (Mitigate)</span> <span>🔧</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>Dipendenza Strutturale:</strong> Se il sito target cambia codice, lo script va aggiornato (gestito dalla nostra manutenzione).</li>
                        <li><strong>Dati "Sporchi":</strong> Il web è caotico. I nostri script includono moduli IA di data-cleaning per consegnare solo dati puri.</li>
                    </ul>
                </div>

                <!-- OPPORTUNITIES -->
                <div style="background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>O - OPPORTUNITÀ</span> <span>🚀</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>Oceano Blu:</strong> Scoprire "zone scoperte" e nicchie di mercato dove i competitor non sono ancora arrivati.</li>
                        <li><strong>Vantaggio Temporale:</strong> Prevedere le mosse dei concorrenti analizzando le loro assunzioni (Job Posting Analysis).</li>
                    </ul>
                </div>

                <!-- THREATS -->
                <div style="background:rgba(255, 50, 100, 0.05); border-left:4px solid #ff3264; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#ff3264; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>T - MINACCE (Gestite)</span> <span>🛡️</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>Sistemi Anti-Bot:</strong> I siti moderni bloccano il traffico anomalo. Usiamo proxy rotanti e simulazione del comportamento umano.</li>
                        <li><strong>GDPR e Privacy:</strong> Rischio multe. Il nostro filtro esclude in automatico le PII (Personally Identifiable Information) fisiche.</li>
                    </ul>
                </div>

            </div>
        `
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
        subtitle: "Vanilla JS, Zero Hosting & Gestione IA via Telegram",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:1.5rem;">
                <p>Rivoluzioniamo la presenza online delle PMI offrendo siti in puro codice Vanilla JS ultraveloci <strong>(&lt;150ms)</strong>. Garantiamo la <strong>proprietà totale e perpetua del codice</strong> sul tuo account GitHub (zero lock-in) e abbattiamo a zero i costi di hosting.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:1rem; margin-bottom:2rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🤖 Gestione IA Istantanea</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Nessun pannello complicato. Chiedi le modifiche al tuo assistente IA via Telegram (voce o testo) per aggiornamenti istantanei con funzione di rollback automatico.</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🔐 Zero-Knowledge Security</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Dimentica le password rubate. Autenticazione sicura tramite ID Telegram anonimo, nel pieno rispetto del GDPR e dell'EU AI Act (Human-in-the-Loop).</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">⚙️ Diagnostica Automatica</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Infrastruttura IA (a soli 15-20€/mese) che esegue check giornalieri su integrità, performance e analytics, avvisandoti solo se necessario.</p>
                </div>
            </div>

            <h3 style="color:#ffffff; font-size:1.1rem; margin-bottom:1rem; letter-spacing:1px;">📊 ANALISI COMPETITIVA</h3>
            
            <div style="overflow-x:auto; background:rgba(2, 6, 16, 0.4); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px;">
                <table style="width:100%; min-width:600px; text-align:left; border-collapse:collapse; font-size:0.85rem;">
                    <thead>
                        <tr style="background:rgba(0, 243, 255, 0.05); border-bottom:2px solid #00f3ff;">
                            <th style="padding:12px; color:#94a3b8; font-weight:600;">CARATTERISTICA</th>
                            <th style="padding:12px; color:#e2e8f0; font-weight:600;">Agency Tradizionale</th>
                            <th style="padding:12px; color:#e2e8f0; font-weight:600;">Piattaforme DIY</th>
                            <th style="padding:12px; color:#00ff9d; font-weight:800; text-shadow:0 0 8px rgba(0,255,157,0.4);">THE ORBIS PROJECT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Velocità</td>
                            <td style="padding:12px; color:#94a3b8;">Lenta (2-5s)</td>
                            <td style="padding:12px; color:#94a3b8;">Media (1-3s)</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Istantanea (&lt;150ms)</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Proprietà Codice</td>
                            <td style="padding:12px; color:#94a3b8;">In prestito / Vincolata</td>
                            <td style="padding:12px; color:#94a3b8;">Nessuna (Lock-in)</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">100% Tua su GitHub</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Costi di Hosting</td>
                            <td style="padding:12px; color:#94a3b8;">100-300€/anno</td>
                            <td style="padding:12px; color:#94a3b8;">15-40€/mese</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">0€ (Gratis a vita)</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Aggiornamenti</td>
                            <td style="padding:12px; color:#94a3b8;">Lenti (2-4 giorni)</td>
                            <td style="padding:12px; color:#94a3b8;">Manuali (Fai-da-te)</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Istantanei via IA Telegram</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Sicurezza e Privacy</td>
                            <td style="padding:12px; color:#94a3b8;">Richiede Password</td>
                            <td style="padding:12px; color:#94a3b8;">Traccia dati utenti</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Zero-Knowledge (ID Telegram)</td>
                        </tr>
                        <tr>
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">EU AI Act</td>
                            <td style="padding:12px; color:#94a3b8;">Non conforme</td>
                            <td style="padding:12px; color:#94a3b8;">Non conforme</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Garantita (Human-in-loop)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    'compliance': {
        title: "🛡️ ETICA & CODICE // COMPLIANCE CENTER",
        subtitle: "Manifesto Tecnologico: GDPR, EU AI Act & Human-in-the-Loop",
        content: `
            <!-- BANNER INTRODUTTIVO -->
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:1.05rem; font-weight:bold; color:#00f3ff; margin-bottom:0.4rem;">🏛️ IL NOSTRO MANIFESTO: TECNOLOGIA ANTROPOCENTRICA E PRIVACY ASSOLUTA</p>
                <p style="font-size:0.88rem; color:#cbd5e1;">In un ecosistema digitale dominato da tracciamenti invasivi e algoritmi opachi, <strong>The Orbis Project</strong> dimostra che è possibile offrire soluzioni software e Agenti AI ad altissime prestazioni nel pieno rispetto della dignità dell'utente e dei quadri normativi europei <strong>(GDPR Reg. UE 2016/679 & EU AI Act Reg. UE 2024/1689)</strong>.</p>
            </div>

            <!-- 4 PILASTRI DI COMPLIANCE -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:1.2rem; margin-bottom:2rem;">
                
                <!-- PILASTRO 1: GDPR PRIVACY BY DESIGN -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">🔐 Privacy by Design & Default</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 25 GDPR</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Nessun cookie tracciante di terze parti, nessuna profilazione invisibile e zero raccolte di dati superflui. Il sito gira su codice puro Vanilla JS e offre form con opzioni Zero-Knowledge per garantire l'anonimato delle comunicazioni.</p>
                </div>

                <!-- PILASTRO 2: HUMAN-IN-THE-LOOP & AI ACT -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">🧠 Human-in-the-Loop (IA)</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 14 AI Act / Art. 22 GDPR</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">I nostri Agenti AI (Gems) sono ingegnerizzati con logiche anti-allucinazione e anti-bias. Nessun automatismo sostituisce il giudizio umano: l'IA lavora esclusivamente come copilota ad alta precisione sotto la supervisione dell'utente.</p>
                </div>

                <!-- PILASTRO 3: OSINT B2B LEGALE -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">👁️ Data Mining B2B Legale</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 14 & Recit. 14 GDPR</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Le nostre pipeline Python OSINT estraggono unicamente informazioni pubbliche di persone giuridiche e mercati B2B. I nostri script integrano filtri automatici di data-cleaning che scartano qualsiasi PII (Dato Personale Fisico).</p>
                </div>

                <!-- PILASTRO 4: ACCOUNTABILITY & CODE OWNERSHIP -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">⚙️ Open Code & Copyright</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 5.2 GDPR / Art. 53 AI Act</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Garantiamo la trasparenza e la proprietà totale del codice su GitHub senza 'scatole nere' o server intermedi trasparenti. Rispettiamo rigorosamente il diritto d'autore e le regole europee TDM (Text and Data Mining opt-out).</p>
                </div>

            </div>

            <!-- TRUST MATRIX FOOTER -->
            <div style="background:rgba(2, 6, 16, 0.5); border:1px solid rgba(0, 255, 157, 0.25); border-radius:8px; padding:1rem; display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem; text-align:center;">
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ GDPR COMPLIANT</strong><br><span style="color:#94a3b8; font-size:0.75rem;">Reg. UE 2016/679</span></div>
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ EU AI ACT READY</strong><br><span style="color:#94a3b8; font-size:0.75rem;">Reg. UE 2024/1689</span></div>
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ ZERO-KNOWLEDGE</strong><br><span style="color:#94a3b8; font-size:0.75rem;">Nessun tracciamento dati</span></div>
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ FULL CODE OWNERSHIP</strong><br><span style="color:#94a3b8; font-size:0.75rem;">Zero Vendor Lock-in</span></div>
            </div>
        `
    },
    'chi-siamo': {
        title: "🏢 CHI SIAMO",
        subtitle: "The Orbis Project Architecture",
        content: "<p style='color:#e2e8f0;'>Siamo ingegneri e sviluppatori software focalizzati sulle prestazioni e sull'efficienza. Creiamo soluzioni tecnologiche su misura, eliminando ogni zavorra inutile per offrire velocità e valore concreto alle imprese.</p>"
    },
    'info': {
        title: "ℹ INFORMAZIONI // THE ORBIS PROJECT",
        subtitle: "Democratizzare la tecnologia avanzata con un'architettura etica e Privacy-First",
        content: `
            <!-- MANIFESTO TECNOLOGICO E FILOSOFICO -->
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:1.05rem; font-weight:bold; color:#00f3ff; margin-bottom:0.4rem;">💡 DALLA SILICON VALLEY AL NEGOZIO SOTTO CASA</p>
                <p style="font-size:0.9rem; color:#94a3b8; line-height:1.65;">La tecnologia più avanzata del pianeta non deve essere un privilegio riservato alle multinazionali, né un cavallo di Troia per sottrarre e monetizzare i dati aziendali. <strong>The Orbis Project</strong> nasce con una missione precisa: democratizzare l'innovazione radicale, mettendo nelle mani di chiunque, dal piccolo commerciante locale al professionista indipendente, le stesse capacità analitiche, la potenza dell'IA e l'efficienza strutturale sviluppate nei grandi laboratori tech della California.</p>
            </div>

            <!-- I 3 PILASTRI DEL PROGETTO -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:1.2rem; margin-bottom:1.5rem;">
                
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🚀 Accessibilità Senza Attrito</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Portiamo soluzioni di livello enterprise a costi abbattuti e con una curva di apprendimento pari a zero, eliminando qualsiasi complessità inutile.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem; font-size:1rem;">🔐 Sovranità dei Dati (Zero-Knowledge)</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Nessun tracciamento, nessuna profilazione, nessuna vendita di informazioni a terzi. La tecnologia deve lavorare <em>per</em> l'utente, non <em>sull'utente</em>.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">⚙️ Architettura Pura</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Niente framework pesanti, niente abbonamenti vincolanti o infrastrutture opache. Solo codice reattivo, pulito e di proprietà diretta del cliente.</p>
                </div>

            </div>

            <!-- CHIUSA SINTETICA -->
            <div style="text-align:center; padding:1rem; background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px;">
                <p style="font-size:0.85rem; color:#e2e8f0; margin:0;">Non vendiamo software "in prestito" con trappole di rinnovo: progettiamo strumenti di emancipazione digitale etici, veloci e accessibili a tutti.</p>
            </div>
        `
    },
    'lavora-con-noi': {
        title: "🤝 LAVORA CON NOI // OPEN CALL & TESTING",
        subtitle: "Stress Test, Red Teaming AI e programma per Hacker Etici",
        content: `
            <!-- INTRODUZIONE -->
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:1.05rem; font-weight:bold; color:#00f3ff; margin-bottom:0.4rem;">🎯 METTI ALLA PROVA IL NOSTRO ECOSISTEMA</p>
                <p style="font-size:0.9rem; color:#94a3b8; line-height:1.65;">Prima di consegnare le nostre tecnologie ai clienti B2B, vogliamo che vengano messe alla prova da menti brillanti e utenti spietati. Se ami scovare vulnerabilità, testare i limiti degli algoritmi o provare nuove soluzioni in anteprima, questo è il posto giusto.</p>
            </div>

            <!-- I 3 PROFILI RICERCATI -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:1.2rem; margin-bottom:1.5rem;">
                
                <!-- PROFILO 1: ETHICAL HACKERS -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">🛡️ Hacker Etici (Security)</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Penetration Testing</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Cerchiamo esperti di cibersicurezza per scovare eventuali falle nel codice Vanilla JS, nell'infrastruttura web e nei form Zero-Knowledge. <em>Regola fondamentale:</em> definiremo insieme le regole d'ingaggio preventivamente via email prima di qualsiasi test.</p>
                </div>

                <!-- PROFILO 2: AI RED TEAMING -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00ff9d; font-size:1rem;">🧠 AI Stress Tester (Red Team)</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Prompt Injection</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Il tuo compito sarà tentare di forzare le istruzioni di sistema dei nostri Agenti AI (Gems), cercare di provocare allucinazioni o aggirare le logiche di controllo, aiutandoci a renderli invulnerabili alle tecniche di prompt injection.</p>
                </div>

                <!-- PROFILO 3: BETA TESTERS -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">⚡ Beta Tester & Early Adopters</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">UX & Field Testing</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Utenti reali, professionisti e commercianti disposti a testare in anteprima i nuovi prototipi B2B, le automazioni e gli script OSINT, fornendo feedback critici su usabilità, velocità e valore pratico nel mondo reale.</p>
                </div>

            </div>

            <!-- CALL TO ACTION -->
            <div style="text-align:center; padding:1.2rem; background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px;">
                <p style="font-size:0.88rem; color:#e2e8f0; margin-bottom:0.8rem;">Vuoi collaborare con noi o metterti alla prova come tester?</p>
                <button onclick="openModal('contatti')" style="background:rgba(0, 255, 157, 0.12); border:1px solid #00ff9d; color:#00ff9d; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.85rem; font-family:var(--font-main); transition:all 0.3s ease;">✉️ CANDIDATI O PROPONI UN TEST</button>
            </div>
        `
    },
    'contatti': {
        title: "✉️ CENTRO COMANDO & COMUNICAZIONI",
        subtitle: "Routing Diretto & Form Privacy-First (Zero-Knowledge)",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:1.5rem;">
                <p>Nessun form infinito e nessuna attesa. Risposte dirette entro 24 ore nel pieno rispetto della privacy.</p>
            </div>

            <!-- 3 CARDS ROUTING EMAIL -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:1rem; margin-bottom:2rem;">
                
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="color:#00f3ff; margin-bottom:0.4rem; font-size:1rem;">💡 Info & Agenti AI</h4>
                        <p style="font-size:0.82rem; color:#94a3b8; margin-bottom:0.8rem;">Informazioni generali, supporto sull'installazione delle Gems Gemini e quesiti tecnici.</p>
                    </div>
                    <div style="font-family:monospace; font-size:0.85rem; color:#00ff9d; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:4px; border:1px solid rgba(0,255,157,0.2);">info@theorbisproject.com</div>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="color:#00f3ff; margin-bottom:0.4rem; font-size:1rem;">⚙️ Business & Progetti Custom</h4>
                        <p style="font-size:0.82rem; color:#94a3b8; margin-bottom:0.8rem;">OSINT Data Analysis, Siti Web Intelligenti e Automazioni Aziendali B2B.</p>
                    </div>
                    <div style="font-family:monospace; font-size:0.85rem; color:#00ff9d; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:4px; border:1px solid rgba(0,255,157,0.2);">business@theorbisproject.com</div>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="color:#00f3ff; margin-bottom:0.4rem; font-size:1rem;">🛡️ Direzione & Partnership</h4>
                        <p style="font-size:0.82rem; color:#94a3b8; margin-bottom:0.8rem;">Canale diretto con Simone Clemente per collaborazioni, invio CV e partnership.</p>
                    </div>
                    <div style="font-family:monospace; font-size:0.85rem; color:#00ff9d; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:4px; border:1px solid rgba(0,255,157,0.2);">simone@theorbisproject.com</div>
                </div>

            </div>

            <!-- FORM PRIVACY-FIRST INTEGRATO -->
            <div style="background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.25); border-radius:12px; padding:1.8rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h3 style="color:#ffffff; font-size:1.15rem; margin-bottom:1.2rem; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>📨 INVIO MESSAGGIO DIRECT</span>
                    <span style="font-size:0.75rem; color:#00ff9d; font-weight:normal; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:12px; border:1px solid rgba(0,255,157,0.3);">Zero-Knowledge Ready</span>
                </h3>

                <form id="cyber-contact-form" onsubmit="handleContactSubmit(event)">
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; margin-bottom:1rem;">
                        <div>
                            <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">REPARTO DESTINATARIO</label>
                            <select id="contact-dept" class="cyber-input" style="width:100%;">
                                <option value="info@theorbisproject.com">💡 Info & Agenti AI (info@...)</option>
                                <option value="business@theorbisproject.com">⚙️ Business B2B & Progetti (business@...)</option>
                                <option value="simone@theorbisproject.com">🛡️ Direzione & Partnership (simone@...)</option>
                            </select>
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">IL TUO RECAPITO (Email / Telefono) <span style="color:#00ff9d; font-size:0.75rem;">[OPZIONALE]</span></label>
                            <input type="text" id="contact-recapito" class="cyber-input" placeholder="es. nome@azienda.it oppure +39 333..." style="width:100%;">
                        </div>
                    </div>

                    <div style="margin-bottom:1rem;">
                        <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">OGGETTO DEL MESSAGGIO</label>
                        <input type="text" id="contact-subject" class="cyber-input" placeholder="Inserisci il motivo del contatto..." required style="width:100%;">
                    </div>

                    <div style="margin-bottom:1.5rem;">
                        <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">MESSAGGIO</label>
                        <textarea id="contact-message" class="cyber-textarea" rows="4" placeholder="Scrivi qui il tuo messaggio o la tua richiesta custom..." required style="width:100%;"></textarea>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                        <span style="font-size:0.78rem; color:#94a3b8; display:flex; align-items:center; gap:6px;">
                            <span style="color:#00ff9d;">🛡️</span> Risposta garantita entro 24 ore nel rispetto del GDPR.
                        </span>
                        <button type="submit" class="cyber-btn-submit" style="background:rgba(0, 255, 157, 0.12); border:1px solid #00ff9d; color:#00ff9d; padding:10px 24px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.9rem; transition:all 0.3s ease;">
                            🚀 INVIA MESSAGGIO DIRECT
                        </button>
                    </div>
                </form>
                <div id="form-status-msg" style="margin-top:1rem; font-family:monospace; font-size:0.85rem; display:none;"></div>
            </div>
        `
    },
    'sostienici': {
        title: "✨ SOSTIENICI",
        subtitle: "Supporta la Tecnologia Indipendente e Privacy-First",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p><strong>La tecnologia non deve spiarti per essere utile.</strong></p>
                <p style="margin-top:0.5rem; font-size:0.9rem; color:#94a3b8;">Offriamo infrastrutture ad alte prestazioni e Agent AI specializzati senza cookie traccianti, senza banner pubblicitari e senza vendere i tuoi dati. Se il nostro lavoro ti ha fatto risparmiare tempo o denaro, puoi aiutarci a mantenere i server accesi e la ricerca indipendente attiva.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; margin-bottom:2rem;">
                
                <!-- PAYPAL CARD -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.5rem; display:flex; flex-direction:column; align-items:center; text-align:center; transition:all 0.3s ease;">
                    <div style="font-size:2rem; margin-bottom:0.5rem;">💙</div>
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem;">PayPal</h4>
                    <p style="font-size:0.8rem; color:#94a3b8; margin-bottom:1.5rem; flex-grow:1;">Supporto rapido, tracciabile e sicuro tramite il circuito più diffuso al mondo.</p>
                    <a href="#" target="_blank" style="width:100%; background:rgba(0, 243, 255, 0.1); border:1px solid #00f3ff; color:#00f3ff; padding:10px; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">SUPPORTA CON PAYPAL</a>
                </div>

                <!-- STRIPE / CARTA CARD -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.5rem; display:flex; flex-direction:column; align-items:center; text-align:center; transition:all 0.3s ease;">
                    <div style="font-size:2rem; margin-bottom:0.5rem;">💳</div>
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem;">Carta di Credito</h4>
                    <p style="font-size:0.8rem; color:#94a3b8; margin-bottom:1.5rem; flex-grow:1;">Transazione diretta e sicura garantita dai gateway crittografati Stripe.</p>
                    <a href="#" target="_blank" style="width:100%; background:rgba(0, 243, 255, 0.1); border:1px solid #00f3ff; color:#00f3ff; padding:10px; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">SUPPORTA CON CARTA</a>
                </div>

                <!-- CRYPTO CARD (ANONIMATO TOTALE) -->
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.5rem; display:flex; flex-direction:column; align-items:center; text-align:center; transition:all 0.3s ease; position:relative; overflow:hidden;">
                    <div style="position:absolute; top:0; right:0; background:#00ff9d; color:#020610; font-size:0.65rem; font-weight:bold; padding:2px 10px; border-bottom-left-radius:8px;">Zero-Knowledge</div>
                    <div style="font-size:2rem; margin-bottom:0.5rem;">₿</div>
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem;">Crypto Wallet</h4>
                    <p style="font-size:0.8rem; color:#94a3b8; margin-bottom:1.5rem; flex-grow:1;">L'unico metodo per un supporto 100% anonimo e decentralizzato (BTC/ETH).</p>
                    <button onclick="alert('Indirizzo BTC: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa\\n(L\\'indirizzo reale verrà inserito qui)')" style="width:100%; background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:10px; border-radius:4px; cursor:pointer; font-size:0.85rem; font-weight:bold; font-family:var(--font-main); transition:all 0.3s ease;">MOSTRA INDIRIZZO</button>
                </div>

            </div>

            <div style="display:flex; justify-content:center; align-items:center; gap:10px; padding-top:1rem; border-top:1px solid rgba(0, 243, 255, 0.1);">
                <span style="font-size:1.2rem;">🛡️</span>
                <p style="font-size:0.75rem; color:#94a3b8; margin:0;"><strong>Trasparenza Zero-Knowledge:</strong> Nessun dato personale transita o viene salvato sui server di The Orbis Project. Le transazioni vengono processate esclusivamente dai gateway bancari esterni (Stripe/PayPal).</p>
            </div>
        `
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
        
        setTimeout(() => {
            const xenonSpeech = document.getElementById('xenon-speech');
            if (xenonSpeech) {
                xenonSpeech.classList.add('fade-out');
            }
        }, 2500);
    }

    isBigBangTriggered = true;
}

function handleContactSubmit(event) {
    event.preventDefault();
    const statusDiv = document.getElementById('form-status-msg');
    const dept = document.getElementById('contact-dept').value;
    const recapito = document.getElementById('contact-recapito').value || 'Anonimo (Zero-Knowledge)';

    if (statusDiv) {
        statusDiv.style.display = 'block';
        statusDiv.style.color = '#00ff9d';
        statusDiv.style.border = '1px solid rgba(0, 255, 157, 0.3)';
        statusDiv.style.padding = '12px';
        statusDiv.style.borderRadius = '6px';
        statusDiv.style.background = 'rgba(0, 255, 157, 0.08)';
        statusDiv.innerHTML = `> [TRANSMISSION VERIFIED]: Messaggio inviato con successo a <strong>${dept}</strong>.<br>> Recapito riscontro: ${recapito}<br>> Presa in carico completata (< 24h).`;
    }

    document.getElementById('cyber-contact-form').reset();
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

    const writeUsBtnHtml = `
        <button class="cyber-btn-write-dynamic" style="background:rgba(0, 243, 255, 0.1); border:1px solid rgba(0, 243, 255, 0.35); color:#00f3ff; padding:8px 14px; border-radius:4px; cursor:pointer; font-weight:600; font-size:0.85rem; font-family:var(--font-main); transition:all 0.2s ease;">✉️ SCRIVICI</button>
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
            
            <div style="display:flex; gap:10px; align-items:center; flex-shrink:0;">
                ${xenonHelpIcon}
                ${key !== 'contatti' ? writeUsBtnHtml : ''}
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

    const dynamicWriteBtn = document.querySelector('.cyber-btn-write-dynamic');
    if (dynamicWriteBtn) {
        dynamicWriteBtn.addEventListener('click', () => {
            openModal('contatti');
            
            setTimeout(() => {
                const deptSelect = document.getElementById('contact-dept');
                if (deptSelect) {
                    if (['osint', 'suite-aziendale', 'telegram-bridge'].includes(key)) {
                        deptSelect.value = 'business@theorbisproject.com';
                    } else if (key === 'lavora-con-noi') {
                        deptSelect.value = 'simone@theorbisproject.com';
                    } else {
                        deptSelect.value = 'info@theorbisproject.com';
                    }
                }
            }, 50);
        });
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
            alert('Xenon: Modalità Guida - Puoi usare il form sottostante per inviare una richiesta diretta.');
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
