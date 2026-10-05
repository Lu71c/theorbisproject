/* ==========================================================================
   THE ORBIS PROJECT - CANVAS 2D REACTIVE ENGINE (DNA WAVE & PARTICLES)
   Target: 60 FPS, Battery Saver, Ultra-responsive particle physics
   ========================================================================== */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: -1000, y: -1000, radius: 120 };
let waveImpulse = 0;
let isTabActive = true;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

function initParticles() {
    particles = [];
    const particleCount = width < 768 ? 40 : 90; // Reduced count on mobile
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1,
            color: Math.random() > 0.5 ? 'rgba(0, 243, 255, ' : 'rgba(0, 255, 157, ',
            alpha: Math.random() * 0.5 + 0.2
        });
    }
}

// Track mouse/touch physics
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
});

// Click impulse event
window.addEventListener('click', () => {
    waveImpulse = 1.0;
});

// Battery Saver: Pause rendering when tab is hidden
document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive) requestAnimationFrame(render);
});

let time = 0;

function render() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);
    time += 0.015;

    // Decaying wave impulse on click
    if (waveImpulse > 0) {
        waveImpulse -= 0.02;
        if (waveImpulse < 0) waveImpulse = 0;
    }

    // 1. DRAW PS2 / DNA SINE WAVES
    const waveY = height * 0.5;
    const amplitude = 35 + (waveImpulse * 50);
    const frequency = 0.008;

    ctx.beginPath();
    ctx.lineWidth = 2 + waveImpulse * 3;
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.35)';

    for (let x = 0; x < width; x += 5) {
        const y = waveY + Math.sin(x * frequency + time) * amplitude + Math.cos(x * 0.002 + time * 0.5) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Second Strand DNA Wave
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(0, 255, 157, 0.25)';

    for (let x = 0; x < width; x += 5) {
        const y = waveY - Math.sin(x * frequency + time) * amplitude - Math.cos(x * 0.002 + time * 0.5) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 2. DRAW PARTICLES & PHYSICS
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Screen edge wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse Repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= Math.cos(angle) * force * 4;
            p.y -= Math.sin(angle) * force * 4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
    });

    requestAnimationFrame(render);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
render();
