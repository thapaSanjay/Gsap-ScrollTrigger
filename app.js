document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the video container with clipPath
    gsap.to(".video-container", {
        scrollTrigger: {
            trigger: ".full-width-image-block",
            start: 'center center',
            end: '50%',
            pin: true,
            scrub: 1,
            // markers: true,
        },
        clipPath: "polygon(0px 0%, 1920px 0%, 1920px 100%, 0px 100%)",
        ease: "power1.inOut",
    });

    gsap.to(".full-width-image-block__box", {
        scrollTrigger: {
            trigger: ".full-width-image-block",
            start: "top top", // Adjust this based on when you want the animation to start
            end: "bottom top", // This can also be adjusted for the desired scroll range
            scrub: 2,
            // markers: true,
        },
        transform: "translate(0px, -66px)",
        opacity: 1,
        ease: "power1.inOut",
    });

    
});
