/* ==========================================================================
   THE ORBIS PROJECT - CANVAS 2D REACTIVE ENGINE (ENHANCED STARFIELD & DNA)
   Target: 60 FPS, Multi-depth Starfield, Star Flares, Battery Saver
   ========================================================================== */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: -1000, y: -1000, radius: 140 };
let waveImpulse = 0;
let isTabActive = true;
let time = 0;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

function initParticles() {
    particles = [];
    const isMobile = width < 768;
    const count = isMobile ? 65 : 160; // Campo stellare molto più denso

    for (let i = 0; i < count; i++) {
        const layer = Math.random(); // 0-0.35 Sfondo, 0.35-0.85 Mezzo Fondo, 0.85-1 Primo Piano
        let radius, speedMult, alpha, hasFlare;

        if (layer < 0.35) { // Sfondo (Lontano e piccolo)
            radius = Math.random() * 0.9 + 0.4;
            speedMult = 0.2;
            alpha = Math.random() * 0.35 + 0.15;
            hasFlare = false;
        } else if (layer < 0.85) { // Mezzo fondo
            radius = Math.random() * 1.6 + 0.8;
            speedMult = 0.5;
            alpha = Math.random() * 0.5 + 0.3;
            hasFlare = Math.random() > 0.8;
        } else { // Primo piano (Vicono, grande e brillante)
            radius = Math.random() * 2.4 + 1.4;
            speedMult = 0.9;
            alpha = Math.random() * 0.4 + 0.6;
            hasFlare = true;
        }

        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5 * speedMult,
            vy: (Math.random() - 0.5) * 0.5 * speedMult,
            radius: radius,
            color: Math.random() > 0.45 ? 'rgba(0, 243, 255, ' : 'rgba(0, 255, 157, ',
            baseAlpha: alpha,
            twinkleSpeed: Math.random() * 0.04 + 0.01,
            twinkleOffset: Math.random() * Math.PI * 2,
            hasFlare: hasFlare,
            layer: layer
        });
    }
}

// Tracciamento fisica Mouse & Touch
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
}, { passive: true });

window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

// Evento Impulso al click
window.addEventListener('click', () => {
    waveImpulse = 1.0;
});

// Battery Saver: Pausa rendering quando la scheda è inattiva
document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive) requestAnimationFrame(render);
});

// Disegna micro-bagliore a croce sulle stelle brillanti
function drawStarFlare(x, y, size, alpha, colorStr) {
    ctx.save();
    ctx.strokeStyle = colorStr + (alpha * 0.7) + ')';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    
    // Linea Orizzontale
    ctx.moveTo(x - size, y);
    ctx.lineTo(x + size, y);
    // Linea Verticale
    ctx.moveTo(x, y - size);
    ctx.lineTo(x, y + size);
    
    ctx.stroke();
    ctx.restore();
}

function render() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);
    time += 0.015;

    // Dissolvenza impulso onda al click
    if (waveImpulse > 0) {
        waveImpulse -= 0.02;
        if (waveImpulse < 0) waveImpulse = 0;
    }

    // 1. ONDE SINOIDALI PS2 / DNA
    const waveY = height * 0.5;
    const amplitude = 40 + (waveImpulse * 65);
    const frequency = 0.007;

    // Filamento Ciano Principale
    ctx.beginPath();
    ctx.lineWidth = 2.2 + waveImpulse * 3.5;
    ctx.strokeStyle = `rgba(0, 243, 255, ${0.35 + waveImpulse * 0.3})`;

    for (let x = 0; x < width; x += 4) {
        const y = waveY + Math.sin(x * frequency + time) * amplitude + Math.cos(x * 0.002 + time * 0.5) * 22;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Secondo Filamento Smeraldo
    ctx.beginPath();
    ctx.lineWidth = 1.6 + waveImpulse * 2;
    ctx.strokeStyle = `rgba(0, 255, 157, ${0.28 + waveImpulse * 0.25})`;

    for (let x = 0; x < width; x += 4) {
        const y = waveY - Math.sin(x * frequency + time) * amplitude - Math.cos(x * 0.002 + time * 0.5) * 22;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 2. CAMPO STELLARE & FISICA MULTI-LIVELLO
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bordo schermo infinito (wrap-around)
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Repulsione fisica dal cursore (proporzionale alla vicinanza/livello)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && p.layer > 0.2) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            const repulsionPower = p.layer * 4.5;
            p.x -= Math.cos(angle) * force * repulsionPower;
            p.y -= Math.sin(angle) * force * repulsionPower;
        }

        // Effetto brillamento (Pulsazione)
        const twinkle = Math.sin(time * 50 * p.twinkleSpeed + p.twinkleOffset) * 0.25;
        const currentAlpha = Math.min(1, Math.max(0.05, p.baseAlpha + twinkle + waveImpulse * 0.2));

        // Disegna stella base
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.fill();

        // Disegna micro-bagliore a croce sulle stelle in primo piano
        if (p.hasFlare && currentAlpha > 0.4) {
            const flareSize = p.radius * 3.5;
            drawStarFlare(p.x, p.y, flareSize, currentAlpha, p.color);
        }
    });

    requestAnimationFrame(render);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
render();
