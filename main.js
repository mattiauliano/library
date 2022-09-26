// JavaScript Variables
let myLibrary = [];
let read = "";

// Objects Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// DOM Elements

// Buttons
const addBookBtn = document.querySelector(".add-book");
const closeModalBtn = document.querySelector(".close-modal");
addBookBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

const submit = document.querySelector(".submit");


// Modal
const modal = document.querySelector(".modal-overlay");

// Inputs
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const checkboxInput = document.querySelector("#read");

// Cards section
const grid = document.querySelector(".books-grid");


function toggleModal() {
    modal.classList.toggle("open-modal");
}

function isChecked() {
    checkboxInput.checked === true ? read = "yes" : read = "no";
}

function addBookToObj() {
    isChecked();

    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, read);
    return newBook;
}

function clear() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    modal.classList.toggle("open-modal");
}

function createCard() {
    let newBook = addBookToObj();
    const card = document.createElement("div");
    card.classList.add("card-js");
    grid.appendChild(card);

    const cardTitle = document.createElement("p");
    cardTitle.innerText = `${newBook.title}`;
    card.appendChild(cardTitle);

    const cardAuthor = document.createElement("p");
    cardAuthor.innerText = `${newBook.author}`;
    card.appendChild(cardAuthor);

    const cardPages = document.createElement("p");
    cardPages.innerText = `${newBook.pages}`;
    card.appendChild(cardPages);

    const cardRead = document.createElement("button");
    if(read === "yes") {
        cardRead.classList.toggle("read-yes");
        cardRead.innerText = `Read`;
    } else {
        cardRead.classList.toggle("read-not");
        cardRead.innerText = `Not yet`;
    }
    cardRead.addEventListener("click", () => {
        if(cardRead.classList.contains("read-yes")) {
            cardRead.classList.toggle("read-yes");
            cardRead.classList.toggle("read-not");
            cardRead.innerText = `Not yet`;
        } else {
            cardRead.classList.toggle("read-not");
            cardRead.classList.toggle("read-yes");
            cardRead.innerText = `Read`;
        }
    })
    card.appendChild(cardRead);

    const cardRemove = document.createElement("button");
    cardRemove.classList.toggle("remove-btn");
    cardRemove.innerText = `Remove`;
    cardRemove.addEventListener("click", () => {
        card.remove();
    })
    card.appendChild(cardRemove);

    clear()
}

submit.addEventListener("click", createCard);