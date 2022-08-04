const colors = {
  COLOR1: "#ec1839",
  COLOR2: "#fa5b0f",
  COLOR3: "#37b182",
  COLOR4: "#1854b4",
};

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher")?.classList.remove("open");
  }
});

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler?.addEventListener("click", () => {
  document.querySelector(".style-switcher")?.classList.toggle("open");
});

const root = document.documentElement;
function setActiveStyle(color) {
  root.style.setProperty("--skin-color", colors[color]);
}

const dayNight = document.querySelector(".day-night");
dayNight?.addEventListener("click", () => {
  dayNight.querySelector("i")?.classList.toggle("fa-sun");
  dayNight.querySelector("i")?.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight?.querySelector("i")?.classList.add("fa-sun");
  } else {
    dayNight?.querySelector("i")?.classList.add("fa-moon");
  }
});

let typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Blogger", "Freelancer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
