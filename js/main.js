function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal animation
const revealElements = document.querySelectorAll(".intro, .features");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
