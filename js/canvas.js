/* ==========================================================================
   THE ORBIS PROJECT - CANVAS 2D REACTIVE ENGINE (DEEP UNIVERSE)
   Target: 60 FPS, Multi-depth Starfield, 4 Star Variants, Battery Saver
   ========================================================================== */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: -1000, y: -1000, radius: 150 };
let isTabActive = true;
let time = 0;

// Colori Galattici: Ciano Pallido, Oro Chiaro, Violetto Cosmico, Bianco Azzurrino
const starColors = [
    'rgba(180, 240, 255, ', // Ciano/Azzurro ghiaccio
    'rgba(255, 240, 200, ', // Oro pallido
    'rgba(200, 180, 255, ', // Lavanda/Violetto
    'rgba(240, 250, 255, '  // Bianco brillante
];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

function initParticles() {
    particles = [];
    const isMobile = width < 768;
    const count = isMobile ? 120 : 300; // Densità aumentata per riempire l'universo

    for (let i = 0; i < count; i++) {
        const layer = Math.random(); // 0-0.35 Sfondo profondo, 0.35-0.85 Mezzo Fondo, 0.85-1 Primo Piano
        let radius, speedMult, alpha, flareType;

        if (layer < 0.35) { // Sfondo (Lontano, piccolo, lento)
            radius = Math.random() * 0.8 + 0.3;
            speedMult = 0.15;
            alpha = Math.random() * 0.3 + 0.1;
            flareType = 0; // Solo punto
        } else if (layer < 0.85) { // Mezzo fondo
            radius = Math.random() * 1.5 + 0.7;
            speedMult = 0.4;
            alpha = Math.random() * 0.4 + 0.25;
            // 60% probabilità di avere un flare base
            flareType = Math.random() > 0.4 ? (Math.random() > 0.5 ? 1 : 2) : 0;
        } else { // Primo piano (Vicono, grande, brillante e veloce)
            radius = Math.random() * 2.2 + 1.2;
            speedMult = 0.8;
            alpha = Math.random() * 0.5 + 0.5;
            // Flare complesso
            const rand = Math.random();
            if (rand > 0.6) flareType = 3; // Asterisco
            else if (rand > 0.3) flareType = 1; // Croce
            else flareType = 2; // Diagonale X
        }

        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4 * speedMult,
            vy: (Math.random() - 0.5) * 0.4 * speedMult,
            radius: radius,
            color: starColors[Math.floor(Math.random() * starColors.length)],
            baseAlpha: alpha,
            twinkleSpeed: Math.random() * 0.03 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
            flareType: flareType, // 0: None, 1: Cross (+), 2: Diagonal (X), 3: Asterisk (*)
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

// Battery Saver: Pausa rendering quando la scheda è inattiva
document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive) requestAnimationFrame(render);
});

// Funzione unificata per disegnare i flares delle stelle
function drawStarFlare(x, y, size, alpha, colorStr, type) {
    if (type === 0) return;

    ctx.save();
    ctx.strokeStyle = colorStr + (alpha * 0.6) + ')';
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    
    // Tipo 1 (+): Croce dritta
    if (type === 1 || type === 3) {
        ctx.moveTo(x - size, y);
        ctx.lineTo(x + size, y);
        ctx.moveTo(x, y - size);
        ctx.lineTo(x, y + size);
    }
    
    // Tipo 2 (X): Diagonale
    if (type === 2 || type === 3) {
        const diagSize = size * 0.7; // Leggermente più piccola della croce per proporzione
        ctx.moveTo(x - diagSize, y - diagSize);
        ctx.lineTo(x + diagSize, y + diagSize);
        ctx.moveTo(x + diagSize, y - diagSize);
        ctx.lineTo(x - diagSize, y + diagSize);
    }
    
    ctx.stroke();
    ctx.restore();
}

function render() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);
    time += 0.015;

    // ELIMINATE ONDE DNA - Focus sul campo stellare profondo

    // CAMPO STELLARE & FISICA MULTI-LIVELLO
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
            const repulsionPower = p.layer * 3.5;
            p.x -= Math.cos(angle) * force * repulsionPower;
            p.y -= Math.sin(angle) * force * repulsionPower;
        }

        // Effetto brillamento (Pulsazione Twinkle)
        const twinkle = Math.sin(time * 60 * p.twinkleSpeed + p.twinkleOffset) * 0.3;
        const currentAlpha = Math.min(1, Math.max(0.05, p.baseAlpha + twinkle));

        // Disegna stella centrale (il "nucleo")
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.fill();

        // Disegna i raggi della stella (Flares)
        if (p.flareType > 0 && currentAlpha > 0.25) {
            const flareSize = p.radius * (p.layer > 0.8 ? 4 : 2.5); // Flare più grandi per le stelle vicine
            drawStarFlare(p.x, p.y, flareSize, currentAlpha, p.color, p.flareType);
        }
    });

    requestAnimationFrame(render);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
render();
