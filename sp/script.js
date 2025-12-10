gsap.registerPlugin(ScrollTrigger);

gsap.to("h2", {
  scale: 300,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".container",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "+=1500",
  }
});
