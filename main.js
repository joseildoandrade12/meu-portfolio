function scrollSuave() {
    const linkInterno = document.querySelectorAll('a[href^="#"]');
    if (linkInterno) {
        function scrollSuave(event) {
            event.preventDefault();
            const href = this.getAttribute("href");
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        linkInterno.forEach((link) => {
            link.addEventListener("click", scrollSuave);
        });
    }
}
scrollSuave();

function initAnimationScroll() {
    const sections = document.querySelectorAll(".js-scroll");
    const metadeTela = window.innerHeight * 0.5;
    function animaScroll() {
        sections.forEach((item) => {
            const topSection = item.getBoundingClientRect().top;
            const sectionVisible = topSection - metadeTela < 0;
            if (sectionVisible) item.classList.add("ativo");
        });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
}
initAnimationScroll();
