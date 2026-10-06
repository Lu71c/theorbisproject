/* ==========================================================================
   THE ORBIS PROJECT - CANVAS 2D REACTIVE ENGINE (FLARES + SHOOTING STARS)
   Target: 60 FPS constant, Vanilla JS, Zero Lag
   ========================================================================== */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let shootingStars = [];
let mouse = { x: -1000, y: -1000, radius: 160, radiusSq: 25600 };
let isTabActive = true;
let time = 0;

// PALETTE CROMATICA REALE DELL'UNIVERSO
const starColors = [
    'rgba(100, 185, 255, ', // Azzurro / Blu spettrale
    'rgba(255, 220, 120, ', // Giallo / Oro solare
    'rgba(255, 150, 80, ',  // Arancio caldo
    'rgba(245, 250, 255, ', // Bianco polvere
    'rgba(180, 240, 255, '  // Ciano ghiaccio delicato
];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    mouse.radiusSq = mouse.radius * mouse.radius;
    initParticles();
}

function initParticles() {
    particles = [];
    const isMobile = width < 768;
    const count = isMobile ? 120 : 250;

    for (let i = 0; i < count; i++) {
        const layer = Math.random();
        let radius, speedMult, alpha, flareType;

        // Recuperata la tua logica originale per i Flare!
        if (layer < 0.35) {
            radius = Math.random() * 0.8 + 0.3;
            speedMult = 0.12;
            alpha = Math.random() * 0.3 + 0.1;
            flareType = 0;
        } else if (layer < 0.85) {
            radius = Math.random() * 1.5 + 0.7;
            speedMult = 0.35;
            alpha = Math.random() * 0.45 + 0.25;
            const rand = Math.random();
            if (rand > 0.65) flareType = 1;      // Croce +
            else if (rand > 0.4) flareType = 2; // Diagonale X
            else flareType = 0;
        } else {
            radius = Math.random() * 2.2 + 1.1;
            speedMult = 0.75;
            alpha = Math.random() * 0.5 + 0.45;
            const rand = Math.random();
            if (rand > 0.55) flareType = 3;     // Asterisco *
            else if (rand > 0.3) flareType = 1;  // Croce +
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
            flareType: flareType,
            layer: layer
        });
    }
}

// LOGICA STELLE CADENTI
function createShootingStar() {
    if (shootingStars.length >= 2) return;

    shootingStars.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * height * 0.3,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        opacity: 1,
        fadeSpeed: Math.random() * 0.02 + 0.015
    });
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

// Battery Saver
document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive) requestAnimationFrame(render);
});

// LA TUA FUNZIONE PER I RIFLESSI OTTICI DELLE STELLE (Ripristinata!)
function drawStarFlare(x, y, size, alpha, colorStr, type) {
    ctx.strokeStyle = colorStr + (alpha * 0.6) + ')';
    ctx.lineWidth = 0.7;
    ctx.beginPath();
    
    if (type === 1 || type === 3) {
        ctx.moveTo(x - size, y);
        ctx.lineTo(x + size, y);
        ctx.moveTo(x, y - size);
        ctx.lineTo(x, y + size);
    }
    
    if (type === 2 || type === 3) {
        const diagSize = size * 0.7;
        ctx.moveTo(x - diagSize, y - diagSize);
        ctx.lineTo(x + diagSize, y + diagSize);
        ctx.moveTo(x + diagSize, y - diagSize);
        ctx.lineTo(x - diagSize, y + diagSize);
    }
    
    ctx.stroke();
}

function render() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);
    time += 0.015;

    // 1. RENDER STELLE DI SFONDO (Con flares)
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouse.radiusSq && p.layer > 0.2) {
            const dist = Math.sqrt(distSq);
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            const repulsionPower = p.layer * 3.5;
            p.x -= Math.cos(angle) * force * repulsionPower;
            p.y -= Math.sin(angle) * force * repulsionPower;
        }

        const twinkle = Math.sin(time * 55 * p.twinkleSpeed + p.twinkleOffset) * 0.3;
        const currentAlpha = Math.min(1, Math.max(0.05, p.baseAlpha + twinkle));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.fill();

        // Disegna i flares se la stella è abbastanza luminosa!
        if (p.flareType > 0 && currentAlpha > 0.25) {
            const flareSize = p.radius * (p.layer > 0.8 ? 4 : 2.5);
            drawStarFlare(p.x, p.y, flareSize, currentAlpha, p.color, p.flareType);
        }
    }

    // 2. GENERAZIONE STELLE CADENTI
    if (Math.random() < 0.008) {
        createShootingStar();
    }

    // 3. RENDER STELLE CADENTI
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        
        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y - Math.sin(s.angle) * s.length;

        const gradient = ctx.createLinearGradient(s.x, s.y, endX, endY);
        gradient.addColorStop(0, `rgba(0, 243, 255, ${s.opacity})`);
        gradient.addColorStop(0.3, `rgba(0, 255, 157, ${s.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(0, 243, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= s.fadeSpeed;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
            shootingStars.splice(i, 1);
        }
    }

    requestAnimationFrame(render);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
render();
