let myLibrary = [];

function Book(title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Read = read;

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

function addBook(book) {
  const display = document.querySelector("#display");

  // for (const book in myLibrary) {
  //   div.textContent = `${book[title]}`;
  // }
  for (const book of myLibrary) {
    let bookIndex = myLibrary.indexOf(book);
    const div = document.createElement("div");
    const remove_button = document.createElement("button");

    div.setAttribute("data-index", bookIndex);

    for (const i in book) {
      const p = document.createElement("p");
      p.textContent += `${i}: ${book[i]}\n`;
      div.classList.add("card");
      remove_button.textContent = "Remove Book";
      remove_button.classList.add("remove_btn");
      div.appendChild(p);
      div.appendChild(remove_button);
    }
    display.appendChild(div);
  }
}

//////////// FORM CONTROL BUTTONS //////////////////
function openForm() {
  document.getElementById("popup_form").style.display = "block";
}

function closeForm() {
  const form = document.querySelector('form[name="bookForm"]');
  form.elements["title"].value = "";
  form.elements["author"].value = "";
  form.elements["pages"].value = "";
  form.elements["read"].value = "";
  document.getElementById("popup_form").style.display = "none";
}

function submitBook() {
  const form = document.querySelector('form[name="bookForm"]');
  const title = form.elements["title"].value;
  const author = form.elements["author"].value;
  const pages = form.elements["pages"].value;
  const read = form.elements["bookRead"].value;

  const submittedBook = new Book(title, author, pages, read);

  addBookToLibrary(submittedBook);

  addBook(myLibrary);
  closeForm();
  myLibrary = [];
}
