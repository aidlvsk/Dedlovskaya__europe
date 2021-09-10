"use strict";

const burgerOpenButton = document.querySelector(".menu-burger__button--open");
const burgerCloseButton = document.querySelector(".menu-burger__button--close");
const menu = document.querySelector(".menu-burger__popup");

burgerCloseButton.addEventListener("click", () => {
  menu.classList.add("visually-hidden");
});

burgerOpenButton.addEventListener("click", () => {
  menu.classList.remove("visually-hidden");
});

menu.classList.add("visually-hidden");

const tabs = document.querySelector('.tubs__list');
const tabsButtons = Array.from(document.querySelectorAll('.tubs__link'));
const tabContents = Array.from(document.querySelectorAll('.content__item'));

tabs.addEventListener('click', (event) => {
  tabsButtons.forEach(button => button.classList.remove("tubs__link--active"));
  event.target.classList.add("tubs__link--active");

  tabContents.forEach(content => {
    if (content.id === (`${event.target.id}-content`)) {
      content.classList.remove("visually-hidden");
    } else {
      content.classList.add("visually-hidden");
    }
  })
})
