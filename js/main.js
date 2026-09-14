"use strict";
import form from "./form.js";
import skillbar from "./skillbar.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });
  form();
  skillbar();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");
  const navAnimationDuration = 300;

  const closeNav = () => {
    if (!nav.classList.contains("open")) return;

    nav.classList.remove("open");
    nav.classList.add("closing");
    navBtnImg.src = "img/icons/open.svg";

    window.setTimeout(() => {
      nav.classList.remove("closing");
    }, navAnimationDuration);
  };

  //Hamburger menu
  navBtn.onclick = () => {
    if (nav.classList.contains("open")) {
      closeNav();
    } else {
      nav.classList.remove("closing");
      nav.classList.add("open");
      navBtnImg.src = "img/icons/close.svg";
    }
  };

  document.addEventListener("click", (event) => {
    if (
      nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !navBtn.contains(event.target)
    ) {
      closeNav();
    }
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
});
