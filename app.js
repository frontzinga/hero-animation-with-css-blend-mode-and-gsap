document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuInteraction = () => {
        const toggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });
    };

    mobileMenuInteraction();

    const entryAnimation = () => {
        const tl = gsap.timeline();
        tl.to('.bg', { x: 0, ease: Power2.easeInOut, duration: 1 }, 0);
        tl.to('.strip', { x: 0, ease: Power2.easeInOut, duration: 1 }, 0);
        tl.to('.bg', { scale: 1.01, y: 5, duration: 1, repeat: -1, yoyo: true }, 0);
        tl.to('.heading-block', { y: 0, opacity: 1, duration: 0.75 }, 1);
        tl.to('.hero p', { y: 0, duration: 0.75 }, 1);
        tl.to('.button-group', { opacity: 1, duration: 0.75, delay: 0.25 });
        tl.to('.arrow', { opacity: 1, y: 20, duration: 0.5, delay: 0.25, repeat: -1, yoyo: true });
    };

    entryAnimation();
});
