'use strict';

/**
 * Add event listener on elements
 * @param {NodeList | Element} elem - The element(s) to attach the event to
 * @param {string} type - The type of event to listen for
 * @param {Function} callback - The function to call when the event is triggered
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem instanceof NodeList) {
    elem.forEach(e => e.addEventListener(type, callback));
  } else if (elem instanceof Element) {
    elem.addEventListener(type, callback);
  }
}

/**
 * Toggle navbar visibility
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Show header and back-to-top button when scrolling down
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", showElemOnScroll);

/**
 * Filter products based on selected filter
 */
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector(".product-list"); // Ensure this class matches your HTML structure

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  const filterValue = this.dataset.filterBtn;

  // Hide all products
  filterBox.querySelectorAll("li").forEach(product => {
    product.style.display = 'none';
  });

  // Show products that match the filter
  if (filterValue === 'all') {
    filterBox.querySelectorAll("li").forEach(product => {
      product.style.display = 'block';
    });
  } else {
    filterBox.querySelectorAll(`li.${filterValue}`).forEach(product => {
      product.style.display = 'block';
    });
  }
}

addEventOnElem(filterBtns, "click", filter);