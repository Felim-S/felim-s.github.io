// Videos use preload="none", so nothing downloads until a video scrolls into view.
const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
        } else {
            entry.target.pause();
        }
    }
}, { threshold: 0.25 });

document.querySelectorAll("video").forEach((video) => observer.observe(video));
