const sections = Array.from(document.querySelectorAll("section"))
    .filter(section =>
        section.id && document.querySelector(`.nav__link[href="#${section.id}"]`)
    );
const navLinks = document.querySelectorAll(".nav__link");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const activeLink = document.querySelector(
                `.nav__link[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                navLinks.forEach(link => link.classList.remove("active"));
                activeLink.classList.add("active");
            }
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => observer.observe(section));