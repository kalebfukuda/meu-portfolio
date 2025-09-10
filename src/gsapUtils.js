// gsapUtils.js
import gsap from "gsap";

/**
 * A minimal horizontalLoop helper for GSAP
 * Loops an array of elements horizontally infinitely
 * Usage: horizontalLoop(elements, { speed: 1, repeat: -1 })
 */
export function horizontalLoop(items, config = {}) {
  items = gsap.utils.toArray(items); // ensure array
  const speed = config.speed || 1;
  const repeat = config.repeat ?? -1;

  // timeline for looping
  const tl = gsap.timeline({ repeat, defaults: { ease: "none" } });

  // calculate width of all items
  const totalWidth = items.reduce((acc, el) => acc + el.offsetWidth, 0);

  items.forEach((item, i) => {
    const distance = totalWidth;
    tl.to(
      item,
      {
        x: `-=${distance}`,
        duration: distance / speed,
        repeat: -1,
        ease: "none",
      },
      0
    );
  });

  return tl;
}
