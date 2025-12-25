// Custom Cursor Blob Effect
const blob = document.querySelector('.cursor-blob');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal Animations on Scroll (Simple implementation)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .skill-category, .project-card').forEach(el => {
    observer.observe(el);
});
