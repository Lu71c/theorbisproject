/* ==========================================================================
   THE ORBIS PROJECT - WEB AUDIO API SOUND SYNTHESIZER
   Zero external files (.mp3/.wav), 100% code generated sound synthesis
   Generative Sci-Fi Space Ambient & Universal Haptic Feedback
   ========================================================================== */

let audioCtx = null;
let isAudioEnabled = false;
let masterGain = null;

// Ecosistema Generativo Ambient
let ambientFilter = null;
let ambientGain = null;
let padOscillators = [];
let lfoOsc = null;
let arpeggioTimer = null;

// Note per il Tappeto Armonico "Pad" (Accordo La minore 7: A2, C3, E3, G3)
const PAD_FREQUENCIES = [110.00, 130.81, 164.81, 196.00];

// Scala Pentatonica per le "Stelle di Dati" (A Minor Pentatonic: A4, C5, D5, E5, G5, A5)
const PENTATONIC_SCALE = [440.00, 523.25, 587.33, 659.25, 783.99, 880.00];

function initAudio() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();

        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.15, audioCtx.currentTime); // Volume bilanciato per comfort
        masterGain.connect(audioCtx.destination);
    }
}

function startAmbientSound() {
    if (!audioCtx || !isAudioEnabled) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // Pulisce eventuali istanze attive
    stopAmbientSound();

    const now = audioCtx.currentTime;

    // 1. Filtro Passa-Basso (Molle e profondo, elimina qualsiasi fischio/rasoio)
    ambientFilter = audioCtx.createBiquadFilter();
    ambientFilter.type = 'lowpass';
    ambientFilter.frequency.setValueAtTime(320, now);
    ambientFilter.Q.setValueAtTime(1.8, now);

    // 2. Controllo Volume Ambientale con Dissolvenza d'Ingresso (Fade-In 3s)
    ambientGain = audioCtx.createGain();
    ambientGain.gain.setValueAtTime(0.0001, now);
    ambientGain.gain.exponentialRampToValueAtTime(0.08, now + 3);

    ambientFilter.connect(ambientGain);
    ambientGain.connect(masterGain);

    // 3. Tappeto Armonico "Pad" (Accordo caldo calcolato in tempo reale)
    padOscillators = PAD_FREQUENCIES.map((freq, index) => {
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();

        osc.type = index % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Micro-detune per effetto trdimensionale e spaziale
        osc.detune.setValueAtTime((index - 1.5) * 5, now);

        oscGain.gain.setValueAtTime(0.22, now);
        osc.connect(oscGain);
        oscGain.connect(ambientFilter);

        osc.start(now);
        return osc;
    });

    // 4. Modulazione LFO ("Respiro Cosmico" lento)
    lfoOsc = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();

    lfoOsc.type = 'sine';
    lfoOsc.frequency.setValueAtTime(0.1, now); // Ciclo completo di circa 10 secondi
    lfoGain.gain.setValueAtTime(70, now); // Ampiezza modulazione frequenza

    lfoOsc.connect(lfoGain);
    lfoGain.connect(ambientFilter.frequency);
    lfoOsc.start(now);

    // 5. Avvio del generatore automatico di "Stelle di Dati"
    scheduleStellarSparks();
}

function scheduleStellarSparks() {
    if (!isAudioEnabled) return;

    // Intervallo casuale tra 3.5 e 6 secondi
    const delay = 3500 + Math.random() * 2500;
    arpeggioTimer = setTimeout(() => {
        if (isAudioEnabled && audioCtx && audioCtx.state === 'running') {
            playStellarSpark();
            scheduleStellarSparks();
        }
    }, delay);
}

function playStellarSpark() {
    if (!audioCtx || !isAudioEnabled || !ambientFilter) return;

    const now = audioCtx.currentTime;
    const noteFreq = PENTATONIC_SCALE[Math.floor(Math.random() * PENTATONIC_SCALE.length)];

    const osc = audioCtx.createOscillator();
    const sparkGain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(noteFreq, now);

    // Inviluppo felpato (Attack/Release per tono cristallino ma soffice)
    sparkGain.gain.setValueAtTime(0.0001, now);
    sparkGain.gain.linearRampToValueAtTime(0.025, now + 0.3);
    sparkGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

    osc.connect(sparkGain);
    sparkGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 3.0);
}

function stopAmbientSound() {
    if (arpeggioTimer) {
        clearTimeout(arpeggioTimer);
        arpeggioTimer = null;
    }

    if (audioCtx && ambientGain) {
        const now = audioCtx.currentTime;
        // Dissolvenza in uscita (Fade-Out 1.2s)
        ambientGain.gain.setValueAtTime(Math.max(ambientGain.gain.value, 0.0001), now);
        ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        setTimeout(() => {
            if (padOscillators.length > 0) {
                padOscillators.forEach(osc => { try { osc.stop(); osc.disconnect(); } catch(e){} });
                padOscillators = [];
            }
            if (lfoOsc) {
                try { lfoOsc.stop(); lfoOsc.disconnect(); } catch(e){}
                lfoOsc = null;
            }
            if (ambientFilter) {
                ambientFilter.disconnect();
                ambientFilter = null;
            }
            ambientGain = null;
        }, 1200);
    } else {
        padOscillators.forEach(osc => { try { osc.stop(); osc.disconnect(); } catch(e){} });
        padOscillators = [];
        if (lfoOsc) { try { lfoOsc.stop(); lfoOsc.disconnect(); } catch(e){} lfoOsc = null; }
    }
}

function playBleep(freq = 800, type = 'sine', duration = 0.05) {
    if (!isAudioEnabled) return;
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

document.addEventListener('DOMContentLoaded', () => {
    const audioBtn = document.getElementById('audio-toggle');

    if (audioBtn) {
        // Impostazione visiva iniziale: audio disattivato all'avvio
        audioBtn.innerText = "🔇";

        audioBtn.addEventListener('click', () => {
            isAudioEnabled = !isAudioEnabled;
            if (isAudioEnabled) {
                initAudio();
                startAmbientSound();
                audioBtn.innerText = "🔊";
                playBleep(1200, 'sine', 0.1);
            } else {
                stopAmbientSound();
                audioBtn.innerText = "🔇";
            }
        });
    }

    // Delega eventi globale: riproduce il bip su qualsiasi elemento interattivo
    document.addEventListener('click', (e) => {
        if (e.target.closest('#audio-toggle')) return;

        const isClickable = e.target.closest('a, button, select, input, [role="button"], .hud-node, .bottom-node, .cyber-btn, #hud-core, #xenon-avatar, .xenon-help-icon, [data-target]');
        if (isClickable) {
            playBleep(1000, 'triangle', 0.08);
        }
    });

    // Effetto hover su qualsiasi elemento interattivo
    document.addEventListener('mouseover', (e) => {
        const isHoverable = e.target.closest('a, button, select, .hud-node, .bottom-node, .cyber-btn, #hud-core, #xenon-avatar, [data-target]');
        if (isHoverable && !isHoverable.dataset.soundHovered) {
            isHoverable.dataset.soundHovered = 'true';
            playBleep(600, 'sine', 0.03);
            setTimeout(() => { delete isHoverable.dataset.soundHovered; }, 300);
        }
    });
});
