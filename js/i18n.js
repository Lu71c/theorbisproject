/* ==========================================================================
   THE ORBIS PROJECT - IMMUTABLE TWO-STATE I18N ENGINE (IT / EN)
   Zero dynamic translation artifacts, 100% layout preserving & modal sync.
   ========================================================================== */

// 1. BACKUP IMMUTABILE DELLA VERSIONE ITALIANA ORIGINALE (Caricato al DOMContentLoaded)
let modalData_IT = null;

// 2. DIZIONARIO COMPLETO DELLE MODALI IN INGLESE (Sintetico & Metric-Aligned)
const modalData_EN = {
    'agenti-ai': {
        title: "🤖 VERTICAL AI AGENTS",
        subtitle: "Pre-engineered Gemini Gems for specific tasks. Install them on your account in one click.",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem;">
                <p>We do not offer simple chatbots, but <strong>Specialized AI Agents</strong> with anti-hallucination logic. Click "INSTALL GEM" to add them directly to your Google Gemini and use them securely with your data.</p>
            </div>
            
            <div class="agents-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem;">
                
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🏛 Bureaucrat</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Simulates a strict government inspector. Optimizes filings, contracts, and social security docs to spot errors and avoid rejections.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1xrRrEVQDK74NcMbbLNJJGtaFcNVJ4YiD?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">📈 Crypto Analyst</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Analyzes market data to debunk hype narratives. Treats every token as a potential trap to protect you from financial bubbles.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/13i7y0aH39k_WgMSxC_4Gcsuznp0h8j0h?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">⚖️ Legal Expert</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Examines laws and simulates opposing arguments. Gives you raw reality on civil cases by calculating success rates and checklists.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/17Xc4cBjuuo6uY5DMN2WlhxV-Bj6T_-nS?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🍽️ Foodie Guide</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Cross-references reviews, photos, and Maps metadata to ruthlessly filter out tourist traps. Delivers 5 authentic spots in your exact area.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/18E4w0PlxZJ92RWZLUdeiDIugZYuijARh?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🪩 Nightlife Guide</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Maps the nightlife ecosystem. Cross-references live crowd density with drink quality and music to skip lines and plan the perfect night.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/15z_sx9wdptEoATeOb0qE6jlf8WT058sL?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🕵️‍♂️ AI Detector</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Scans texts for synthetic fingerprints. Exposes text deepfakes, fake reviews, and bot articles providing a mathematical verdict.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1MwKHkeRatOCSBcY3douB_LPErbTXGd5j?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🖤 Pessimist</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">The cynical anti-chatbot. Dismantles fake commercial AI optimism, refusing fluff with sharp realism.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1reZciKeDHWFpAjnvtosHAanRa9H9lTfE?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🃏 Pokédect</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Calculates wear and micro-scratches on Pokémon cards from a photo. Provides market value estimates based on live auctions.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/10K2TejkByFq-8y1UThU4sx7shUPRX59r?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">🏛️ Political Analyst</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Non-partisan institutional debunker. Cross-references public speeches with official statistics to spot lies and budget omissions.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1OgveMhNNuiH3s2Z0qXtJsZfkDoCFAp2Z?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.1rem;">▶ Youtuber</h3>
                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">Ruthless numerical analyst. Studies search volumes and psychological tricks to maximize views, CTR, and audience retention.</p>
                    </div>
                    <a href="https://gemini.google.com/gem/1nFuZ30FBhA9L5-a5PBOS2RbPcp5imv_W?usp=sharing" target="_blank" class="cyber-btn-install" style="background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:8px; text-align:center; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">INSTALL GEM</a>
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
        title: "🔍 OSINT & DATA INTELLIGENCE",
        subtitle: "Scraping, Market Analysis & Lead Generation",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem;">
                <p>In today's market, those who own the data set the rules. Our <strong>OSINT (Open Source Intelligence)</strong> infrastructure converts public web noise into structured, fully compliant commercial databases.</p>
                <p style="margin-top:0.8rem;">We develop custom Python pipelines to extract, clean, and process public data, delivering actionable insights straight into your CRM or executive dashboards.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; margin-bottom:2.5rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🎯 Automated Lead Generation</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Extraction of corporate profiles, B2B contacts, and key decision-makers from public registries and trade fairs in full GDPR compliance.</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">📉 Price & Competitor Intelligence</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Real-time tracking of competitor catalogs and pricing. Receive automated alerts as soon as a competitor modifies strategic offerings.</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🌐 Sentiment & Reputation Mining</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Mass analysis of online reviews and sentiment using AI to pinpoint competitors' weak spots and leverage them in sales outreach.</p>
                </div>
            </div>

            <h3 style="color:#ffffff; font-size:1.1rem; margin-bottom:1rem; letter-spacing:1px;">🧭 STRATEGIC SWOT ANALYSIS</h3>
            
            <div class="swot-grid-2x2">
                <div style="background:rgba(0, 255, 157, 0.05); border-left:4px solid #00ff9d; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>S - STRENGTHS</span> <span>💪</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>100% Legal Data:</strong> Extraction restricted strictly to public sources, zero privacy violations.</li>
                        <li><strong>Immediate Scalability:</strong> Python handles 10 or 100,000 records with equal computational ease.</li>
                        <li><strong>Zero Acquisition Cost:</strong> No ad budgets burned to discover verified B2B leads.</li>
                    </ul>
                </div>

                <div style="background:rgba(255, 153, 0, 0.05); border-left:4px solid #ff9900; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#ff9900; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>W - WEAKNESSES (Mitigated)</span> <span>🔧</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>Structural Dependency:</strong> If target layouts change, scripts require updates (covered by maintenance).</li>
                        <li><strong>Raw Web Noise:</strong> Scripts feature AI data-cleaning modules to deliver pure, structured datasets.</li>
                    </ul>
                </div>

                <div style="background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>O - OPPORTUNITIES</span> <span>🚀</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>Blue Ocean Discovery:</strong> Uncover untapped market niches before competitors notice them.</li>
                        <li><strong>Temporal Advantage:</strong> Predict competitor moves by analyzing job posting patterns.</li>
                    </ul>
                </div>

                <div style="background:rgba(255, 50, 100, 0.05); border-left:4px solid #ff3264; border-radius:4px; padding:1.2rem;">
                    <h4 style="color:#ff3264; margin-bottom:0.5rem; font-size:1rem; display:flex; justify-content:space-between;">
                        <span>T - THREATS (Managed)</span> <span>🛡️</span>
                    </h4>
                    <ul style="font-size:0.85rem; color:#e2e8f0; margin-left:1.2rem; line-height:1.5;">
                        <li><strong>Anti-Bot Barriers:</strong> Managed via rotating residential proxies and human behavior simulation.</li>
                        <li><strong>GDPR Compliance:</strong> Source filters strip out PII (personally identifiable information).</li>
                    </ul>
                </div>
            </div>
        `
    },
    'suite-aziendale': {
        title: "💼 THE FUTURE-PROOF ENTERPRISE",
        subtitle: "Synthetic Multi-Agent Office: Say Goodbye to Data Entry. The Future of B2B Operations.",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px; position:relative;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem; flex-wrap:wrap; gap:6px;">
                    <span style="font-size:0.75rem; letter-spacing:1.5px; color:#00ff9d; background:rgba(0,255,157,0.12); padding:3px 10px; border-radius:12px; border:1px solid rgba(0,255,157,0.3); font-weight:bold;">
                        STATUS: BETA IN PROGRESS
                    </span>
                    <span style="font-size:0.75rem; color:#94a3b8; font-family:monospace;">ESTIMATED DEPLOY: JANUARY 2027</span>
                </div>
                <p style="font-size:1.1rem; font-weight:800; color:#00f3ff; margin-bottom:0.4rem;">OFFICE MANAGERS SHOULD NO LONGER LIVE ON EXCEL OR SCATTERED SHEETS.</p>
                <p style="font-size:0.88rem; color:#cbd5e1;">In complex logistics and operations, managers spend up to 80% of their hours doing manual calculations and emergency fixes. We are engineering the system that removes this friction at the root, transforming AI from a basic chatbot into an <strong>organic work architecture</strong>.</p>
            </div>

            <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem; margin-bottom:2rem;">
                <h4 style="color:#00f3ff; font-size:1rem; margin-bottom:0.6rem; display:flex; align-items:center; gap:8px;">
                    <span>🧭 THE THREE-FACTOR THEOREM: NUMBER, SPACE, TIME</span>
                </h4>
                <p style="font-size:0.85rem; color:#94a3b8; line-height:1.6; margin-bottom:0.8rem;">
                    Over 70% of operational businesses share the same bottleneck: coordinating a <strong>Number</strong> of operators across physical <strong>Spaces</strong> (sites or contracts) under strict constraints of <strong>Time</strong> (shifts, contractual hours, leaves, and last-minute changes).
                </p>
                <p style="font-size:0.85rem; color:#e2e8f0; line-height:1.6;">
                    Traditional software fails due to manual entry overhead. Large Language Models fail when trying to do everything alone, hallucinating numbers. Our framework changes the paradigm: <strong>AI is not an all-knowing oracle, but a compartmentalized synthetic office</strong>.
                </p>
            </div>

            <h3 style="color:#ffffff; font-size:1.1rem; margin-bottom:1.2rem; letter-spacing:1px;">⚙️ THE SYNTHETIC OFFICE</h3>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:1.2rem; margin-bottom:2.2rem;">
                
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.3rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <div style="font-size:1.6rem; margin-bottom:0.5rem;">🖥️</div>
                        <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.02rem;">Python: Deterministic Engine</h4>
                        <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">No math is delegated to AI. Pure Python pipelines perform data matching, shift constraints, and legal compliance in milliseconds. Result: zero math hallucinations.</p>
                    </div>
                    <div style="margin-top:1rem; font-size:0.75rem; color:#00ff9d; font-family:monospace;">[ROLE: THE OFFICE COMPUTER]</div>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.3rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <div style="font-size:1.6rem; margin-bottom:0.5rem;">👥</div>
                        <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.02rem;">Dialectical Multi-Agents</h4>
                        <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Strict separation of duties. One agent drafts schedules; a second agent is mandated exclusively to challenge and Red-Team the plan to catch conflicts.</p>
                    </div>
                    <div style="margin-top:1rem; font-size:0.75rem; color:#00ff9d; font-family:monospace;">[ROLE: SPECIALIZED EMPLOYEES]</div>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.3rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <div style="font-size:1.6rem; margin-bottom:0.5rem;">🛡️</div>
                        <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1.02rem;">Sterile Zero-Knowledge Web App</h4>
                        <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">No bloated dashboards with vulnerable credentials. Instant control panel validated via cryptographic IDs, protecting database endpoints.</p>
                    </div>
                    <div style="margin-top:1rem; font-size:0.75rem; color:#00ff9d; font-family:monospace;">[ROLE: THE SECURE HEADQUARTERS]</div>
                </div>

            </div>

            <div style="background:rgba(2, 6, 16, 0.5); border:1px solid rgba(0, 255, 157, 0.25); border-radius:8px; padding:1.2rem; margin-bottom:2rem; line-height:1.6;">
                <h4 style="color:#00ff9d; font-size:0.95rem; margin-bottom:0.4rem; letter-spacing:0.8px;">⚔️ FORGED IN THE FIELD</h4>
                <p style="font-size:0.84rem; color:#cbd5e1;">
                    This ecosystem is not built on abstract Silicon Valley pitch decks. It is daily stress-tested in demanding operational environments (24/7 rotations, regional worksites, fiduciary security). If it passes these trials, it will handle any business workflow worldwide.
                </p>
            </div>

            <div style="text-align:center; padding:1.8rem; background:rgba(8, 15, 30, 0.85); border:1px solid rgba(0, 243, 255, 0.25); border-radius:12px; box-shadow:0 8px 30px rgba(0,0,0,0.5);">
                <h3 style="color:#ffffff; font-size:1.15rem; margin-bottom:0.5rem;">ARE YOU A HIGH-COMPLEXITY ENTERPRISE?</h3>
                <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:1.2rem; max-width:650px; margin-left:auto; margin-right:auto;">
                    Closed Alpha slots and pilot programs are limited to selected companies. If you want to eliminate data entry costs and test the suite on your operational workflow, get in touch.
                </p>
                <div style="display:inline-flex; flex-direction:column; align-items:center; gap:8px;">
                    <button onclick="openModal('contatti')" style="background:rgba(0, 255, 157, 0.15); border:1px solid #00ff9d; color:#00ff9d; padding:12px 28px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.9rem; font-family:var(--font-main); transition:all 0.3s ease; box-shadow:0 0 15px rgba(0,255,157,0.2);">
                        🚀 APPLY FOR B2B PILOT
                    </button>
                    <span style="font-size:0.75rem; color:#94a3b8; font-family:monospace; margin-top:4px;">
                        or write directly to: <a href="mailto:business@theorbisproject.com" style="color:#00f3ff; text-decoration:none;">business@theorbisproject.com</a>
                    </span>
                </div>
            </div>
        `
    },
    'telegram-bridge': {
        title: "🧠 INTELLIGENT WEBSITE",
        subtitle: "Pure Code, Zero Hosting & AI-Driven Site Management",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:1.5rem;">
                <p>We revolutionize online presence for SMEs by offering ultra-fast Vanilla JS sites <strong>(&lt;150ms)</strong>. We guarantee <strong>100% full code ownership</strong> on your GitHub account (zero lock-in) and eliminate recurring hosting costs.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; margin-bottom:2rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🤖 Instant AI Management</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">No complex admin dashboards. Request updates from your AI assistant via Telegram (voice or text) with automated rollback capability.</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🔐 Zero-Knowledge Security</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">Forget vulnerable passwords. Secure authentication via anonymous Telegram ID, strictly compliant with GDPR and EU AI Act (Human-in-the-Loop).</p>
                </div>
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">⚙️ Automated Diagnostics</h4>
                    <p style="font-size:0.85rem; color:#94a3b8;">AI infrastructure (€15-20/month) running daily health checks on site integrity, latency, and performance, alerting you only when needed.</p>
                </div>
            </div>

            <h3 style="color:#ffffff; font-size:1.1rem; margin-bottom:1rem; letter-spacing:1px;">📊 COMPETITIVE COMPARISON</h3>
            
            <div style="overflow-x:auto; background:rgba(2, 6, 16, 0.4); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px;">
                <table style="width:100%; min-width:550px; text-align:left; border-collapse:collapse; font-size:0.85rem;">
                    <thead>
                        <tr style="background:rgba(0, 243, 255, 0.05); border-bottom:2px solid #00f3ff;">
                            <th style="padding:12px; color:#94a3b8; font-weight:600;">FEATURE</th>
                            <th style="padding:12px; color:#e2e8f0; font-weight:600;">Traditional Agency</th>
                            <th style="padding:12px; color:#e2e8f0; font-weight:600;">DIY Platforms</th>
                            <th style="padding:12px; color:#00ff9d; font-weight:800; text-shadow:0 0 8px rgba(0,255,157,0.4);">THE ORBIS PROJECT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Speed</td>
                            <td style="padding:12px; color:#94a3b8;">Slow (2-5s)</td>
                            <td style="padding:12px; color:#94a3b8;">Medium (1-3s)</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Instantaneous (&lt;150ms)</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Code Ownership</td>
                            <td style="padding:12px; color:#94a3b8;">Leased / Restricted</td>
                            <td style="padding:12px; color:#94a3b8;">None (Vendor Lock-in)</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">100% Yours on GitHub</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Hosting Fees</td>
                            <td style="padding:12px; color:#94a3b8;">€100-300/year</td>
                            <td style="padding:12px; color:#94a3b8;">€15-40/month</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">€0 (Free for Life)</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Updates</td>
                            <td style="padding:12px; color:#94a3b8;">Slow (2-4 days)</td>
                            <td style="padding:12px; color:#94a3b8;">Manual (DIY)</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Instant via Telegram AI</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(0, 243, 255, 0.1);">
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">Security & Privacy</td>
                            <td style="padding:12px; color:#94a3b8;">Requires Passwords</td>
                            <td style="padding:12px; color:#94a3b8;">Tracks User Data</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Zero-Knowledge (Telegram ID)</td>
                        </tr>
                        <tr>
                            <td style="padding:12px; font-weight:600; color:#00f3ff;">EU AI Act</td>
                            <td style="padding:12px; color:#94a3b8;">Non-compliant</td>
                            <td style="padding:12px; color:#94a3b8;">Non-compliant</td>
                            <td style="padding:12px; color:#00ff9d; font-weight:bold;">Guaranteed (Human-in-loop)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    'compliance': {
        title: "🛡️ COMPLIANCE CENTER",
        subtitle: "GDPR, EU AI Act & Human-in-the-Loop",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:1.05rem; font-weight:bold; color:#00f3ff; margin-bottom:0.4rem;">🏛️ OUR MANIFESTO: ETHICAL & HUMAN-CENTRIC TECH</p>
                <p style="font-size:0.88rem; color:#cbd5e1;">In a world dominated by invasive tracking and opaque algorithms, <strong>The Orbis Project</strong> proves that IT solutions and AI Agents can respect user dignity and European regulatory frameworks <strong>(GDPR Reg. EU 2016/679 & EU AI Act Reg. EU 2024/1689)</strong>.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.2rem; margin-bottom:2rem;">
                
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">🔐 Privacy by Design</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 25 GDPR</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">No third-party tracking cookies, no profiling, zero unnecessary data collection. The site runs on pure Vanilla code (HTML, CSS, JS) offering anonymous contact forms.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">🧠 H-I-T-L (AI)</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 14 AI Act / Art. 22 GDPR</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Our AI Agents feature strict anti-hallucination guardrails and domain boundaries. No automation replaces human judgment: AI operates strictly as a precision co-pilot under human supervision.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">👁️ Legal Ingestion</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 14 & Recit. 14 GDPR</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Our Python OSINT pipelines extract exclusively public business entity data (B2B). Automated data-cleaning filters discard individual PII. We do not profile natural persons.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">⚙️ Code Ownership</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Art. 5.2 GDPR / Art. 53 AI Act</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">We guarantee total transparency and complete code ownership on GitHub without middleman servers. We strictly respect copyright and EU TDM (Text and Data Mining opt-out) rules.</p>
                </div>

            </div>

            <div style="background:rgba(2, 6, 16, 0.5); border:1px solid rgba(0, 255, 157, 0.25); border-radius:8px; padding:1rem; display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem; text-align:center;">
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ GDPR COMPLIANT</strong><br><span style="color:#94a3b8; font-size:0.75rem;">EU Reg. 2016/679</span></div>
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ EU AI ACT READY</strong><br><span style="color:#94a3b8; font-size:0.75rem;">EU Reg. 2024/1689</span></div>
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ ZERO-KNOWLEDGE</strong><br><span style="color:#94a3b8; font-size:0.75rem;">No user tracking</span></div>
                <div style="font-size:0.8rem; color:#e2e8f0;"><strong style="color:#00ff9d;">✓ FULL CODE OWNERSHIP</strong><br><span style="color:#94a3b8; font-size:0.75rem;">Zero Vendor Lock-in</span></div>
            </div>
        `
    },
    'chi-siamo': {
        title: "🏢 OR RATHER, WHO AM I?",
        subtitle: "Study, Field Experience, Technological Innovation & Ethical AI Serving Humanity",
        content: `
            <div style="line-height:1.65; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:1.05rem; font-weight:bold; color:#00f3ff; margin-bottom:0.4rem;">👋 HELLO, WELCOME!</p>
                <p style="font-size:0.9rem; color:#94a3b8; line-height:1.65;">My name is Simone Clemente, born in Rome in 1996. I've been working since age 16 while pursuing two complementary passions: history, philosophy, and humanities on one hand, and technology, programming, and computer systems on the other. <strong>The Orbis Project</strong> is the exact intersection of these worlds.</p>
                <p style="font-size:0.9rem; color:#94a3b8; line-height:1.65; margin-top:0.8rem;">Turning 30 with fifteen years of practical field experience across real-world operational sectors, I decided to deploy my engineering capabilities to solve concrete business bottlenecks and friction points.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.2rem; margin-bottom:1.5rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🏛 Humanistic Engineering</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Placing critical thinking and ethics at the core of software engineering. Technology must elevate human analytical capacity, not replace it.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem; font-size:1rem;">💼 15+ Years Real Experience</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">No abstract theories. I experienced frontline operations firsthand, understanding where operational friction and lost hours truly lie.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">⚡ Friction Elimination</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Designing automation and AI with a single purpose: freeing humans from repetitive mechanical tasks and restoring time, energy, and dignity.</p>
                </div>
            </div>

            <div style="text-align:center; padding:1rem; background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px;">
                <p style="font-size:0.85rem; color:#e2e8f0; margin:0;">Together we can build a future where Artificial Intelligence empowers humanity rather than enslaving it to daily routine.</p>
            </div>
        `
    },
    'info': {
        title: "THE ORBIS PROJECT",
        subtitle: "Democratizing Advanced Technology with an Ethical & Privacy-First Architecture",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:1.05rem; font-weight:bold; color:#00f3ff; margin-bottom:0.4rem;">💡 FROM SILICON VALLEY TO LOCAL ENTERPRISES</p>
                <p style="font-size:0.9rem; color:#94a3b8; line-height:1.65;">Technology should not be a privilege reserved for tech giants, nor a Trojan horse used to extract and monetize your data. <strong>The Orbis Project</strong> was founded to democratize innovation, equipping independent professionals and businesses with enterprise-grade tech.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.2rem; margin-bottom:1.5rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">🚀 Frictionless Accessibility</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Delivering easy-to-use, cost-effective enterprise solutions. Technology must adapt to humans, not the other way around.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem; font-size:1rem;">🔐 Data Sovereignty</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">No tracking, no profiling, zero data sales to third parties. Our platform works <em>for</em> the user, not <em>on</em> the user.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:1rem;">⚙️ Pure Architecture</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">No heavy frameworks, no vendor lock-in, no hidden subscriptions. Just clean, responsive code owned directly by the client.</p>
                </div>
            </div>

            <div style="text-align:center; padding:1rem; background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px;">
                <p style="font-size:0.85rem; color:#e2e8f0; margin:0;">We don't rent software with renewal traps: we design digital empowerment tools accessible to everyone.</p>
            </div>
        `
    },
    'lavora-con-noi': {
        title: "🤝 OPEN CALL & TESTING",
        subtitle: "Stress Testing, AI Red Teaming & Ethical Hackers",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:1.05rem; font-weight:bold; color:#00f3ff; margin-bottom:0.4rem;">🎯 STRESS-TEST OUR ECOSYSTEM</p>
                <p style="font-size:0.9rem; color:#94a3b8; line-height:1.65;">Before deploying technology to B2B clients, we want it tested by sharp minds. If you love discovering vulnerabilities, testing algorithmic boundaries, or trying early prototypes, you're in the right place.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.2rem; margin-bottom:1.5rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">🛡️ Ethical Hackers</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Penetration Testing</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">We seek cybersecurity researchers to audit Vanilla JS code, web infrastructure, and Zero-Knowledge endpoints. Rules of engagement are defined upfront via email.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00ff9d; font-size:1rem;">🧠 AI Stress Testers</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">Prompt Injection</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Challenge system prompts, provoke hallucinations, or attempt guardrail bypasses to help us build bulletproof AI agents.</p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.3rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                        <h4 style="color:#00f3ff; font-size:1rem;">⚡ Beta Testers</h4>
                        <span style="font-size:0.7rem; color:#00ff9d; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:10px; border:1px solid rgba(0,255,157,0.2);">UX & Field Testing</span>
                    </div>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5;">Real users testing early B2B prototypes, automation flows, and OSINT scripts, offering critical feedback on speed and real-world utility.</p>
                </div>
            </div>

            <div style="text-align:center; padding:1.2rem; background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px;">
                <p style="font-size:0.88rem; color:#e2e8f0; margin-bottom:0.8rem;">Want to collaborate or run a test? Get in touch!</p>
                <button onclick="openModal('contatti')" style="background:rgba(0, 255, 157, 0.12); border:1px solid #00ff9d; color:#00ff9d; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.85rem; font-family:var(--font-main); transition:all 0.3s ease;">✉️ APPLY OR PROPOSE A TEST</button>
            </div>
        `
    },
    'contatti': {
        title: "✉️ CONTACT ORBIS",
        subtitle: "Direct Routing & Privacy-First Form",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:1.5rem;">
                <p>No endless forms or waiting. Direct responses guaranteed within 24 hours with full privacy respect.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; margin-bottom:2rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="color:#00f3ff; margin-bottom:0.4rem; font-size:1rem;">💡 Info & AI Agents</h4>
                        <p style="font-size:0.82rem; color:#94a3b8; margin-bottom:0.8rem;">General inquiries, support installing Gemini Gems, and technical questions.</p>
                    </div>
                    <div style="font-family:monospace; font-size:0.85rem; color:#00ff9d; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:4px; border:1px solid rgba(0,255,157,0.2);">info@theorbisproject.com</div>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="color:#00f3ff; margin-bottom:0.4rem; font-size:1rem;">⚙️ Business & Custom Projects</h4>
                        <p style="font-size:0.82rem; color:#94a3b8; margin-bottom:0.8rem;">OSINT Data Analysis, Intelligent Websites, and B2B Enterprise Automations.</p>
                    </div>
                    <div style="font-family:monospace; font-size:0.85rem; color:#00ff9d; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:4px; border:1px solid rgba(0,255,157,0.2);">business@theorbisproject.com</div>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="color:#00f3ff; margin-bottom:0.4rem; font-size:1rem;">🛡️ Management & Partnerships</h4>
                        <p style="font-size:0.82rem; color:#94a3b8; margin-bottom:0.8rem;">Direct channel with Simone Clemente for strategic partnerships and CV submission.</p>
                    </div>
                    <div style="font-family:monospace; font-size:0.85rem; color:#00ff9d; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:4px; border:1px solid rgba(0,255,157,0.2);">simone@theorbisproject.com</div>
                </div>
            </div>

            <div style="background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.25); border-radius:12px; padding:1.8rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h3 style="color:#ffffff; font-size:1.15rem; margin-bottom:1.2rem; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>📨 SEND MESSAGE </span>
                    <span style="font-size:0.75rem; color:#00ff9d; font-weight:normal; background:rgba(0,255,157,0.1); padding:2px 8px; border-radius:12px; border:1px solid rgba(0,255,157,0.3);">Zero-Knowledge Ready</span>
                </h3>

                <form id="cyber-contact-form" onsubmit="handleContactSubmit(event)">
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-bottom:1rem;">
                        <div>
                            <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">RECIPIENT DEPARTMENT</label>
                            <select id="contact-dept" class="cyber-input" style="width:100%;">
                                <option value="info@theorbisproject.com">💡 Info & AI Agents (info@...)</option>
                                <option value="business@theorbisproject.com">⚙️ B2B Business & Projects (business@...)</option>
                                <option value="simone@theorbisproject.com">🛡️ Executive & Partnerships (simone@...)</option>
                            </select>
                        </div>
                        <div>
                            <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">YOUR CONTACT <span style="color:#00ff9d; font-size:0.75rem;">[OPTIONAL]</span></label>
                            <input type="text" id="contact-recapito" class="cyber-input" placeholder="e.g. name@company.com or phone..." style="width:100%;">
                        </div>
                    </div>

                    <div style="margin-bottom:1rem;">
                        <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">MESSAGE SUBJECT</label>
                        <input type="text" id="contact-subject" class="cyber-input" placeholder="Enter reason for contact..." required style="width:100%;">
                    </div>

                    <div style="margin-bottom:1.5rem;">
                        <label style="display:block; font-size:0.8rem; color:#94a3b8; margin-bottom:0.4rem; font-weight:600;">MESSAGE</label>
                        <textarea id="contact-message" class="cyber-textarea" rows="4" placeholder="Write your message or custom inquiry here..." required style="width:100%;"></textarea>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                        <span style="font-size:0.78rem; color:#94a3b8; display:flex; align-items:center; gap:6px;">
                            <span style="color:#00ff9d;">🛡️</span> Response guaranteed within 24 hours under GDPR.
                        </span>
                        <button type="submit" class="cyber-btn-submit" style="background:rgba(0, 255, 157, 0.12); border:1px solid #00ff9d; color:#00ff9d; padding:10px 24px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.9rem; transition:all 0.3s ease;">
                            🚀 SEND DIRECT MESSAGE
                        </button>
                    </div>
                </form>
                <div id="form-status-msg" style="margin-top:1rem; font-family:monospace; font-size:0.85rem; display:none;"></div>
            </div>
        `
    },
    'sostienici': {
        title: "✨ SUPPORT THE PROJECT",
        subtitle: "Sustain Independent Technology",
        content: `
            <div style="line-height:1.6; color:#e2e8f0; margin-bottom:2rem; padding:1.5rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p><strong>We do not profit off user data</strong></p>
                <p style="margin-top:0.5rem; font-size:0.9rem; color:#94a3b8;">We provide high-performance infrastructure and specialized AI Agents without tracking cookies, ad banners, or data monetization. If our tools saved you money, you can help us keep the servers running and research independent.</p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-bottom:2rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.5rem; display:flex; flex-direction:column; align-items:center; text-align:center; transition:all 0.3s ease;">
                    <div style="font-size:2rem; margin-bottom:0.5rem;">💙</div>
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem;">PayPal</h4>
                    <p style="font-size:0.8rem; color:#94a3b8; margin-bottom:1.5rem; flex-grow:1;">Fast, trackable, and secure contribution via global standard payment network.</p>
                    <a href="#" target="_blank" style="width:100%; background:rgba(0, 243, 255, 0.1); border:1px solid #00f3ff; color:#00f3ff; padding:10px; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">SUPPORT WITH PAYPAL</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px; padding:1.5rem; display:flex; flex-direction:column; align-items:center; text-align:center; transition:all 0.3s ease;">
                    <div style="font-size:2rem; margin-bottom:0.5rem;">💳</div>
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem;">Credit Card</h4>
                    <p style="font-size:0.8rem; color:#94a3b8; margin-bottom:1.5rem; flex-grow:1;">Direct and encrypted transaction processing powered by Stripe gateway.</p>
                    <a href="#" target="_blank" style="width:100%; background:rgba(0, 243, 255, 0.1); border:1px solid #00f3ff; color:#00f3ff; padding:10px; border-radius:4px; text-decoration:none; font-size:0.85rem; font-weight:bold; transition:all 0.3s ease;">SUPPORT WITH CARD</a>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.5rem; display:flex; flex-direction:column; align-items:center; text-align:center; transition:all 0.3s ease; position:relative; overflow:hidden;">
                    <div style="position:absolute; top:0; right:0; background:#00ff9d; color:#020610; font-size:0.65rem; font-weight:bold; padding:2px 10px; border-bottom-left-radius:8px;">Zero-Knowledge</div>
                    <div style="font-size:2rem; margin-bottom:0.5rem;">₿</div>
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem;">Crypto Wallet</h4>
                    <p style="font-size:0.8rem; color:#94a3b8; margin-bottom:1.5rem; flex-grow:1;">100% anonymous and decentralized contributions via BTC/ETH.</p>
                    <button onclick="alert('BTC Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa\\n(Real address will be inserted here)')" style="width:100%; background:rgba(0, 255, 157, 0.1); border:1px solid #00ff9d; color:#00ff9d; padding:10px; border-radius:4px; cursor:pointer; font-size:0.85rem; font-weight:bold; font-family:var(--font-main); transition:all 0.3s ease;">SHOW ADDRESS</button>
                </div>
            </div>

            <div style="display:flex; justify-content:center; align-items:center; gap:10px; padding-top:1rem; border-top:1px solid rgba(0, 243, 255, 0.1);">
                <span style="font-size:1.2rem;">🛡️</span>
                <p style="font-size:0.75rem; color:#94a3b8; margin:0;"><strong>Zero-Knowledge Transparency:</strong> No personal data passes through or is saved on our servers. Transactions are handled exclusively by external payment gateways.</p>
            </div>
        `
    },
    'privacy': {
        title: "🛡️ PRIVACY & COOKIE POLICY",
        subtitle: "Transparency, Data Processing & Anonymous Telemetry Notice (GDPR Reg. EU 2016/679)",
        content: `
            <div style="line-height:1.65; color:#e2e8f0; margin-bottom:1.5rem; padding:1.2rem; background:rgba(0, 243, 255, 0.05); border-left:4px solid #00f3ff; border-radius:4px;">
                <p style="font-size:0.9rem; color:#94a3b8; margin:0;">
                    This platform is engineered following <strong>Privacy by Design & Privacy by Default (Art. 25 GDPR)</strong> principles, guaranteeing total transparency and data protection.
                </p>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.2rem; margin-bottom:1.5rem;">
                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:0.95rem;">👤 Data Controller</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5; margin:0;">
                        The Data Controller is Simone Clemente (<em>The Orbis Project</em>). To exercise privacy rights (Artt. 15-22 GDPR), contact directly: <span style="color:#00ff9d; font-family:monospace;">simone@theorbisproject.com</span>.
                    </p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 255, 157, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00ff9d; margin-bottom:0.5rem; font-size:0.95rem;">🔐 Zero-Knowledge Philosophy</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5; margin:0;">
                        No user accounts, registrations, or passwords required. We do not employ third-party profiling cookies or advertising trackers.
                    </p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:0.95rem;">📩 Voluntary Contact Form</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5; margin:0;">
                        Submitting messages via the contact form is completely voluntary. Optional contact info is used solely for replying and is never saved in marketing databases.
                    </p>
                </div>

                <div style="background:rgba(8, 15, 30, 0.6); border:1px solid rgba(0, 243, 255, 0.2); border-radius:8px; padding:1.2rem;">
                    <h4 style="color:#00f3ff; margin-bottom:0.5rem; font-size:0.95rem;">📊 Anonymous Telemetry</h4>
                    <p style="font-size:0.83rem; color:#94a3b8; line-height:1.5; margin:0;">
                        We use a first-party aggregated click counter (e.g. Gem click telemetry). We do not record IP addresses or device footprints: metrics are 100% anonymous.
                    </p>
                </div>
            </div>

            <div style="text-align:center; padding:0.9rem; background:rgba(8, 15, 30, 0.8); border:1px solid rgba(0, 243, 255, 0.15); border-radius:8px;">
                <p style="font-size:0.8rem; color:#cbd5e1; margin:0;">
                    🔗 <strong>External Links:</strong> Links to third-party services (PayPal, Stripe, Gemini) redirect to secure external platforms hosted independently.
                </p>
            </div>
        `
    }
};

// 3. MAPPATURA TESTI INTERFACCIA PRINCIPALE (INDEX.HTML)
const uiTranslations = {
    it: {
        title: "Sistemi Smart e Strutture Tech Senza Confini",
        subtitle: "Applichiamo la tecnologia del domani per risolvere i problemi di oggi.",
        nav_info: "Info",
        nav_about: "Chi Siamo",
        nav_work: "Lavora con Noi",
        nav_contact: "Contatti",
        nav_support: "Sostienici",
        node1_title: "AGENTI AI VERTICALI",
        node1_sub: "Gemini custom Agents",
        node2_title: "OSINT DATA ANALYSIS",
        node2_sub: "Data mining Scraping massivi",
        node3_title: "DOMOTICA AZIENDALE",
        node3_sub: "Il Futuro per il Tuo Business",
        node4_title: "SITO WEB INTELLIGENTE",
        node4_sub: "Sicuro, Veloce e Rivoluzionario",
        compliance_btn: "ETICA & CODICE // Compliance Center (EU AI Act & GDPR)",
        xenon_initial: "Saluti umano! Sono Xenon, la tua interfaccia guida. Clicca sul Pianeta Orbis e scopri i nostri artefatti tecnologici.",
        xenon_bigbang: "Eccellente! Il Pianeta si è rivelato. Esplora le schede dei nostri servizi o clicca su di me per assistenza.",
        footer_desktop: "© 2026 The Orbis Project — Iniziativa tecnologica ideata e gestita da Simone Clemente (per info, scrivere a simone@theorbisproject.com).",
        footer_mobile: "© 2026 The Orbis Project — di Simone Clemente",
        privacy_link: "Privacy & Cookie Policy"
    },
    en: {
        title: "Smart Systems & Boundaryless Tech Structures",
        subtitle: "Applying tomorrow's technology to solve today's problems.",
        nav_info: "Info",
        nav_about: "About Us",
        nav_work: "Work With Us",
        nav_contact: "Contact",
        nav_support: "Support Us",
        node1_title: "VERTICAL AI AGENTS",
        node1_sub: "Custom Gemini Agents",
        node2_title: "OSINT DATA ANALYSIS",
        node2_sub: "Data Mining & Mass Scraping",
        node3_title: "BUSINESS AUTOMATION",
        node3_sub: "The Future of Your Business",
        node4_title: "INTELLIGENT WEBSITE",
        node4_sub: "Fast, Secure & Revolutionary",
        compliance_btn: "ETHICS & CODE // Compliance Center (EU AI Act & GDPR)",
        xenon_initial: "Greetings human! I am Xenon, your guide interface. Click on Planet Orbis to discover our tech artifacts.",
        xenon_bigbang: "Excellent! The Planet has been revealed. Explore our service cards or click on me for assistance.",
        footer_desktop: "© 2026 The Orbis Project — Tech initiative designed & managed by Simone Clemente (info: simone@theorbisproject.com).",
        footer_mobile: "© 2026 The Orbis Project — by Simone Clemente",
        privacy_link: "Privacy & Cookie Policy"
    }
};

window.currentLang = 'it';

// 4. FUNZIONE CORE PER LO SWITCH LINGUA SENZA DISTRUZIONE LAYOUT
function toggleLanguage() {
    window.currentLang = window.currentLang === 'it' ? 'en' : 'it';
    
    // Aggiorna etichetta pulsante
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.innerText = window.currentLang === 'it' ? 'EN' : 'IT';
    }

    const t = uiTranslations[window.currentLang];
    
    // A. Titolo e Sottotitolo Principali
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) mainTitle.innerText = t.title;

    const mainSubtitle = document.getElementById('main-subtitle');
    if (mainSubtitle) mainSubtitle.innerText = t.subtitle;

    // B. Navbar Superiore
    const navLinks = document.querySelectorAll('.center-links a');
    if (navLinks.length >= 5) {
        navLinks[0].innerText = t.nav_info;
        navLinks[1].innerText = t.nav_about;
        navLinks[2].innerText = t.nav_work;
        navLinks[3].innerText = t.nav_contact;
        navLinks[4].innerText = t.nav_support;
    }

    // C. I 4 Nodi HUD
    const nodeMap = [
        { selector: '[data-target="agenti-ai"] .node-text', title: t.node1_title, sub: t.node1_sub },
        { selector: '[data-target="osint"] .node-text', title: t.node2_title, sub: t.node2_sub },
        { selector: '[data-target="suite-aziendale"] .node-text', title: t.node3_title, sub: t.node3_sub },
        { selector: '[data-target="telegram-bridge"] .node-text', title: t.node4_title, sub: t.node4_sub }
    ];

    nodeMap.forEach(item => {
        const elem = document.querySelector(item.selector);
        if (elem) {
            const h3 = elem.querySelector('h3');
            const span = elem.querySelector('span');
            if (h3) h3.innerText = item.title;
            if (span) span.innerText = item.sub;
        }
    });

    // D. Nodo Compliance
    const compBtn = document.querySelector('.bottom-node');
    if (compBtn) {
        compBtn.innerHTML = `<span class="pulse-dot"></span> ${t.compliance_btn}`;
    }

    // E. Xenon Text
    const xenonText = document.getElementById('xenon-text');
    if (xenonText) {
        xenonText.innerText = window.isBigBangTriggered ? t.xenon_bigbang : t.xenon_initial;
    }

    // F. Footer Credits
    const fDesktop = document.querySelector('.footer-credits-desktop');
    if (fDesktop) fDesktop.innerText = t.footer_desktop;

    const fMobile = document.querySelector('.footer-credits-mobile');
    if (fMobile) fMobile.innerText = t.footer_mobile;

    const fPrivacy = document.querySelector('.footer-links a');
    if (fPrivacy) fPrivacy.innerText = t.privacy_link;

    // G. SWAP DIRETTO E PULITO DELL'OGGETTO MODALDATA
    if (typeof modalData !== 'undefined') {
        const sourceData = window.currentLang === 'en' ? modalData_EN : modalData_IT;
        Object.keys(sourceData).forEach(key => {
            modalData[key] = JSON.parse(JSON.stringify(sourceData[key]));
        });
    }

    // H. Aggiornamento istantaneo della modale se aperta
    const overlay = document.getElementById('modal-overlay');
    if (overlay && !overlay.classList.contains('hidden')) {
        const hash = window.location.hash.replace('#', '');
        if (hash && typeof openModal === 'function') {
            openModal(hash);
        }
    }
}

// 5. INIZIALIZZAZIONE AL DOMCONTENTLOADED
document.addEventListener('DOMContentLoaded', () => {
    // Cattura lo stato originale italiano di modalData prima di ogni modifica
    if (typeof modalData !== 'undefined' && !modalData_IT) {
        modalData_IT = JSON.parse(JSON.stringify(modalData));
    }

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});
