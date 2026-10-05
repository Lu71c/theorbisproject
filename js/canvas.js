/* ==========================================================================
   THE ORBIS PROJECT - CANVAS 2D REACTIVE ENGINE (REAL COSMIC UNIVERSE)
   Target: 60 FPS, Spectral Star Colors, 4 Star Flares, Parallax Physics
   ========================================================================== */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: -1000, y: -1000, radius: 160 };
let isTabActive = true;
let time = 0;

// PALETTE CROMATICA REALE DELL'UNIVERSO (Classi Spettrali O, B, A, F, G, K, M)
const starColors = [
    'rgba(100, 185, 255, ', // Azzurro / Blu spettrale (Stelle calde)
    'rgba(255, 220, 120, ', // Giallo / Oro solare
    'rgba(255, 150, 80, ',  // Arancio caldo (Giganti)
    'rgba(245, 250, 255, ', // Bianco polvere
    'rgba(180, 240, 255, '  // Ciano ghiaccio delicato
];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

function initParticles() {
    particles = [];
    const isMobile = width < 768;
    const count = isMobile ? 130 : 320; // Campo stellare denso e immersivo

    for (let i = 0; i < count; i++) {
        const layer = Math.random(); // 0-0.35 Sfondo, 0.35-0.85 Mezzo Fondo, 0.85-1 Primo Piano
        let radius, speedMult, alpha, flareType;

        if (layer < 0.35) { // Sfondo profondo (Lontano, piccolo, lento)
            radius = Math.random() * 0.8 + 0.3;
            speedMult = 0.12;
            alpha = Math.random() * 0.3 + 0.1;
            flareType = 0; // Solo punto
        } else if (layer < 0.85) { // Mezzo fondo
            radius = Math.random() * 1.5 + 0.7;
            speedMult = 0.35;
            alpha = Math.random() * 0.45 + 0.25;
            // Flare casuale tra Croce (+), Diagonale (X) o Nessuno
            const rand = Math.random();
            if (rand > 0.6) flareType = 1;      // Croce +
            else if (rand > 0.35) flareType = 2; // Diagonale X
            else flareType = 0;                 // Punto
        } else { // Primo piano (Vicino, grande, brillante e veloce)
            radius = Math.random() * 2.3 + 1.2;
            speedMult = 0.75;
            alpha = Math.random() * 0.5 + 0.5;
            // Flare complessi in primo piano (incluso Asterisco *)
            const rand = Math.random();
            if (rand > 0.55) flareType = 3;     // Asterisco *
            else if (rand > 0.28) flareType = 1; // Croce +
            else flareType = 2;                 // Diagonale X
        }

        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35 * speedMult,
            vy: (Math.random() - 0.5) * 0.35 * speedMult,
            radius: radius,
            color: starColors[Math.floor(Math.random() * starColors.length)],
            baseAlpha: alpha,
            twinkleSpeed: Math.random() * 0.03 + 0.006,
            twinkleOffset: Math.random() * Math.PI * 2,
            flareType: flareType, // 0: Punto, 1: Croce (+), 2: Diagonale (X), 3: Asterisco (*)
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

// Funzione unificata per disegnare le 4 forme di stelle e raggio
function drawStarFlare(x, y, size, alpha, colorStr, type) {
    if (type === 0) return;

    ctx.save();
    ctx.strokeStyle = colorStr + (alpha * 0.65) + ')';
    ctx.lineWidth = 0.7;
    ctx.beginPath();
    
    // Tipo 1 (+) o Tipo 3 (*): Linee Orizzontale e Verticale
    if (type === 1 || type === 3) {
        ctx.moveTo(x - size, y);
        ctx.lineTo(x + size, y);
        ctx.moveTo(x, y - size);
        ctx.lineTo(x, y + size);
    }
    
    // Tipo 2 (X) o Tipo 3 (*): Linee Diagonali
    if (type === 2 || type === 3) {
        const diagSize = size * 0.72; // Proporzionata rispetto alla croce
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

    // CAMPO STELLARE & FISICA REATTIVA
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap-around continuo ai bordi dello schermo
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Repulsione fluida dal cursore
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && p.layer > 0.2) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            const repulsionPower = p.layer * 3.8;
            p.x -= Math.cos(angle) * force * repulsionPower;
            p.y -= Math.sin(angle) * force * repulsionPower;
        }

        // Brillamento dinamico (Pulsazione Twinkle)
        const twinkle = Math.sin(time * 55 * p.twinkleSpeed + p.twinkleOffset) * 0.3;
        const currentAlpha = Math.min(1, Math.max(0.05, p.baseAlpha + twinkle));

        // Disegna nucleo sferico della stella
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.fill();

        // Disegna la forma di raggio/flare
        if (p.flareType > 0 && currentAlpha > 0.2) {
            const flareSize = p.radius * (p.layer > 0.8 ? 4.2 : 2.8);
            drawStarFlare(p.x, p.y, flareSize, currentAlpha, p.color, p.flareType);
        }
    });

    requestAnimationFrame(render);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
render();
