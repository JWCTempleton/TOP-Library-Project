const myLibrary = [];

function Book(title, author, pages, wasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.wasRead = wasRead;

  // this.getInfo = function () {
  //   return `${title} by ${author}, ${pages} pages, ${wasRead}.`;
  // };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  return myLibrary;
}

const book1 = new Book("The Hobbit", "JRR Tolkien", 300, "book was read");
const book2 = new Book(
  "The Two Towers",
  "JRR Tolkien",
  400,
  "book was not read"
);

console.log(addBookToLibrary(book1));
addBookToLibrary(book2);

function addBook(book) {
  const container = document.querySelector("#container");

  // for (const book in myLibrary) {
  //   div.textContent = `${book[title]}`;
  // }
  for (const book of myLibrary) {
    const div = document.createElement("div");

    for (const i in book) {
      const p = document.createElement("p");
      p.textContent += `${book[i]}\n`;
      div.classList.add("card");
      div.appendChild(p);
    }
    container.appendChild(div);
  }
}

addBook(myLibrary);
