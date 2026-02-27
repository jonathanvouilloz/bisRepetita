import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGsapReveal() {
  const elements = document.querySelectorAll(".gsap-reveal");

  elements.forEach((el) => {
    const animation = el.getAttribute("data-animation") || "fadeUp";
    const delay = parseFloat(el.getAttribute("data-delay") || "0");
    const duration = parseFloat(el.getAttribute("data-duration") || "0.8");
    const stagger = parseFloat(el.getAttribute("data-stagger") || "0");

    const config: gsap.TweenVars = {
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    };

    switch (animation) {
      case "fadeUp":
        gsap.from(el, { ...config, y: 40, opacity: 0 });
        break;
      case "fadeIn":
        gsap.from(el, { ...config, opacity: 0 });
        break;
      case "slideLeft":
        gsap.from(el, { ...config, x: -60, opacity: 0 });
        break;
      case "slideRight":
        gsap.from(el, { ...config, x: 60, opacity: 0 });
        break;
      case "scaleIn":
        gsap.from(el, { ...config, scale: 0.8, opacity: 0, ease: "back.out(1.7)" });
        break;
      case "clipReveal":
        gsap.from(el, {
          ...config,
          clipPath: "inset(0 100% 0 0)",
          ease: "power3.inOut",
          duration: duration || 1,
        });
        break;
      case "rotateIn":
        gsap.from(el, { ...config, rotation: 5, y: 30, opacity: 0 });
        break;
    }

    if (stagger > 0) {
      const children = el.children;
      if (children.length > 0) {
        gsap.from(children, {
          ...config,
          stagger,
          y: animation === "fadeUp" ? 30 : 0,
          opacity: 0,
        });
      }
    }
  });

  // Stagger cards animation
  document.querySelectorAll(".gsap-stagger-cards").forEach((container) => {
    const cards = container.children;
    if (cards.length > 0) {
      gsap.fromTo(cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        }
      );
    }
  });

  // Parallax float elements
  document.querySelectorAll(".gsap-parallax-float").forEach((el) => {
    gsap.to(el, {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // Count-up animation
  initCountUp();
}

export function initCountUp() {
  document.querySelectorAll(".gsap-count-up").forEach((el) => {
    const target = el.getAttribute("data-value") || "0";
    const hasPlus = target.includes("+");
    const hasPercent = target.includes("%");
    const numericValue = parseInt(target.replace(/[^0-9]/g, ""), 10);

    if (isNaN(numericValue)) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: numericValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        let display = Math.round(obj.val).toString();
        if (hasPlus) display += "+";
        if (hasPercent) display += "%";
        el.textContent = display;
      },
    });
  });
}

export { gsap, ScrollTrigger };
