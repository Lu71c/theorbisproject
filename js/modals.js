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
                <div style="background:rgba(255, 153, 0, 0.05); border-left:4px solid #ff9900; border
