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

const nav = document.querySelector(".nav");
navList = nav?.querySelectorAll("li");
const asideNav = document.querySelector(".aside");

const navToggler = document.querySelector(".nav-toggler");
let totalNavList = navList.length;
allSection = document.querySelectorAll(".section");
totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    console.log("event listener is running good");
    navToggler.classList.remove("open");
    asideNav?.classList.remove("open-nav");
    for (let j = 0; j < totalNavList; j++) {
      console.log("the loop ran");
      let currentSection = navList[j]
        .querySelector("a")
        .getAttribute("href")
        .replace(/[^a-zA-Z0-9 ]/g, "");
      if (
        document
          .getElementById(currentSection)
          .classList.contains("previous-active")
      ) {
        document
          // console.log(navList[j] + "is this running");
          .getElementById(currentSection)
          .classList.remove("previous-active");
      }
      if (navList[j].querySelector("a").classList.contains("active")) {
        document
          .getElementById(currentSection)
          .classList.add("previous-active");
      }
      navList[j].querySelector("a").classList.remove("active");
      document.getElementById(currentSection)?.classList.remove("active");
    }
    this.classList.add("active");
    let currentSection = this.getAttribute("href").replace(
      /[^a-zA-Z0-9 ]/g,
      ""
    );
    document.getElementById(currentSection)?.classList.add("active");
  });
}

navToggler?.addEventListener("click", function () {
  this.classList.toggle("open");
  asideNav?.classList.toggle("open-nav");
  console.log("open working");
});
