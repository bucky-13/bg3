const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const topMain = document.querySelector(".top-main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  topMain.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    topMain.classList.remove("active");
  })
);
