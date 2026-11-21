
/* SCROLL REVEAL */

const cards = document.querySelectorAll(
    ".about-card, .stat-card, .skill-card, .project-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach((card) => {
    card.classList.add("hidden");
    observer.observe(card);
});

/* ACTIVE NAVIGATION */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

/* CONSOLE MESSAGE */

console.log("Welcome to Monika's portfolio!");
