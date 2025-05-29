// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Shrinking hero section on scroll
const hero = document.getElementById("hero");
const heroTitle = hero.querySelector("h1");
const heroSubtitle = hero.querySelector(".subtitle");

const HERO_MIN_HEIGHT = 50; // vh
const HERO_MAX_HEIGHT = 100; // vh
const SCROLL_DISTANCE = 400; // px to shrink from max to min

function updateHero() {
  const scrollY = window.scrollY;
  let heroHeightVh;
  if (scrollY <= 0) {
    heroHeightVh = HERO_MAX_HEIGHT;
  } else if (scrollY < SCROLL_DISTANCE) {
    const progress = scrollY / SCROLL_DISTANCE;
    heroHeightVh =
      HERO_MAX_HEIGHT - (HERO_MAX_HEIGHT - HERO_MIN_HEIGHT) * progress;
  } else {
    heroHeightVh = HERO_MIN_HEIGHT;
  }
  hero.style.height = `${heroHeightVh}vh`;

  // Responsive font sizes
  const titleSize =
    3.5 +
    (5 - 3.5) *
      ((heroHeightVh - HERO_MIN_HEIGHT) / (HERO_MAX_HEIGHT - HERO_MIN_HEIGHT)); // 5rem to 3.5rem
  const subtitleSize =
    1.4 +
    (1.8 - 1.4) *
      ((heroHeightVh - HERO_MIN_HEIGHT) / (HERO_MAX_HEIGHT - HERO_MIN_HEIGHT)); // 1.8rem to 1.4rem
  heroTitle.style.fontSize = `${titleSize}rem`;
  heroSubtitle.style.fontSize = `${subtitleSize}rem`;
}

// Initial setup
updateHero();

// Update on scroll and resize
window.addEventListener("scroll", updateHero, { passive: true });
window.addEventListener("resize", updateHero);
