function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

document.getElementById("year").textContent = new Date().getFullYear();
