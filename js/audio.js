/* ==========================================================================
   THE ORBIS PROJECT - WEB AUDIO API SOUND SYNTHESIZER
   Zero external files (.mp3/.wav), 100% code generated sound synthesis
   ========================================================================== */

let audioCtx = null;
let isAudioEnabled = false;
let ambientOsc1 = null;
let ambientOsc2 = null;
let masterGain = null;

function initAudio() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.15; // Low volume for comfort
        masterGain.connect(audioCtx.destination);
    }
}

function startAmbientSound() {
    if (!audioCtx || !isAudioEnabled) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // Low-frequency Cyber Hum (55Hz & 110Hz)
    ambientOsc1 = audioCtx.createOscillator();
    ambientOsc2 = audioCtx.createOscillator();
    
    ambientOsc1.type = 'sine';
    ambientOsc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
    
    ambientOsc2.type = 'triangle';
    ambientOsc2.frequency.setValueAtTime(110, audioCtx.currentTime); // A2 note

    const ambientGain = audioCtx.createGain();
    ambientGain.gain.setValueAtTime(0.05, audioCtx.currentTime);

    ambientOsc1.connect(ambientGain);
    ambientOsc2.connect(ambientGain);
    ambientGain.connect(masterGain);

    ambientOsc1.start();
    ambientOsc2.start();
}

function stopAmbientSound() {
    if (ambientOsc1) { ambientOsc1.stop(); ambientOsc1.disconnect(); ambientOsc1 = null; }
    if (ambientOsc2) { ambientOsc2.stop(); ambientOsc2.disconnect(); ambientOsc2 = null; }
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

    // Attach haptic audio feedback on node hovers
    document.querySelectorAll('.hud-node, .bottom-node, .cyber-btn').forEach(elem => {
        elem.addEventListener('mouseenter', () => playBleep(600, 'sine', 0.03));
        elem.addEventListener('click', () => playBleep(1000, 'triangle', 0.08));
    });
});
