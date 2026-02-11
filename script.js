// Subtle parallax effect for floating balls
document.addEventListener('mousemove', (e) => {
    const balls = document.querySelectorAll('.float-ball');
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;

    balls.forEach((ball, i) => {
        const factor = (i + 1) * 0.3;
        ball.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// Smooth fade-in on load
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';

    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
