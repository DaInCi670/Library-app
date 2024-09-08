"use strict";

const closeBtn = document.querySelector(".close-btn");
const formBox = document.querySelector(".form-box");
const addBookBtn = document.querySelectorAll("a");
const submitBook = document.querySelector(".submit-btn");
const totalBookNum = document.querySelector(".library-book-num");
const overlay = document.querySelector(".overlay");
const libraryShelf = document.querySelector("main");

closeBtn.addEventListener("click", () => {
  formBox.classList.toggle("toggle-form-box");
  overlay.classList.toggle("hidden");
});

addBookBtn[1].addEventListener("click", () => {
  formBox.classList.toggle("toggle-form-box");
  overlay.classList.toggle("hidden");
});

