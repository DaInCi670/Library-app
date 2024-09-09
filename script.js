"use strict";

const closeBtn = document.querySelector(".close-btn");
const formBox = document.querySelector(".form-box");
const addBookBtn = document.querySelectorAll("a");
const submitBook = document.querySelector(".submit-btn");
const totalBookNum = document.querySelector(".library-book-num");
const overlay = document.querySelector(".overlay");
const libraryShelf = document.querySelector("main");

const myLibrary = [];

function Book(author, title, pageNumber, isRead) {
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.isRead = isRead;
}

Book.prototype.changeReadStatus = function () {
  return this.isRead ? "Read" : "Not Read";
};

function addBookToLibarary(a, b, c, d) {
  const complete = new Book(a, b, c, d);
  return myLibrary.push(complete);
}

function displayBook(arr) {
  libraryShelf.innerHTML = "";
  return arr.forEach((item, index) => {
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", index);
    const bookTitle = document.createElement("h4");
    const bookAuthor = document.createElement("p");
    const bookPageNumber = document.createElement("p");
    const removeBtn = document.createElement("button");
    const readStatusBtn = document.createElement("button");
    bookTitle.textContent = item.title;
    bookAuthor.textContent = `Author: ${item.author}`;
    bookPageNumber.textContent = `Total Pages: ${item.pageNumber}`;
    removeBtn.textContent = "Remove";
    readStatusBtn.textContent = `${item.changeReadStatus()}`;
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPageNumber);
    bookContainer.appendChild(removeBtn);
    bookContainer.appendChild(readStatusBtn);
    bookContainer.classList.add("bookContainer");
    libraryShelf.appendChild(bookContainer);

    readStatusBtn.addEventListener("click", (e) => {
      e.target.textContent === "Read"
        ? (e.target.textContent = "Not Read")
        : (e.target.textContent = "Read");
    });

    removeBtn.addEventListener("click", (e) => {
      myLibrary.splice(Number(e.target.parentElement.id), 1);
      checkBookCount(myLibrary);
      displayBook(myLibrary);
    });
  });
}

function checkBookCount(Bookarr) {
  let book = Bookarr.length;
  totalBookNum.textContent = `Total Books: ${book}`;
}

closeBtn.addEventListener("click", () => {
  formBox.classList.toggle("toggle-form-box");
  overlay.classList.toggle("hidden");
});

addBookBtn[1].addEventListener("click", () => {
  formBox.classList.toggle("toggle-form-box");
  overlay.classList.toggle("hidden");
});

submitBook.addEventListener("click", (e) => {
  e.preventDefault();
  let ruby = [];
  const title = e.target.form[0].value;
  ruby.push(title);
  const author = e.target.form[1].value;
  ruby.push(author);
  const pages = e.target.form[2].value;
  ruby.push(pages);
  const isRead = e.target.form[3].checked;

  // ruby = ruby.filter((item) => {
  //   return item !== " ";
  // });

  if (ruby.includes("") || ruby.includes(" ")) {
    ruby = [];
    return;
  }
  if (ruby.includes(" ")) {
    console.log(ruby);
    ruby.splice(0);
    return;
  }

  console.log(ruby);

  if (!title || !author || pages.length < 1) {
    return;
  }
  e.target.form[0].value = " ";
  e.target.form[1].value = " ";
  e.target.form[2].value = " ";
  addBookToLibarary(author, title, pages, isRead);
  displayBook(myLibrary);
  checkBookCount(myLibrary);
});
