document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".main-nav");

    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });

    scroll.on("scroll", (instance) => {
        if (instance.scroll.y > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
