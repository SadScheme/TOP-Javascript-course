var myLibrary = [];
// variables needed from HTML
var bookList = document.getElementById("bookList");
var formSubmit = document.getElementById("formSubmit");

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = () => {
		return `${this.read ? "Read" : "Not Read"}`;
	};
}

const addBookToLibrary = (e) => {
	e.preventDefault();
	const newBook = getBookFromInput();
	myLibrary.push(newBook);
	displayBook(myLibrary);
	closeForm();
};

const displayBook = (lib) => {
	bookList.innerHTML = "";
	for (let i = 0; i < lib.length; i++) {
		createBookCard(lib[i]);
	}
};

function createBookCard(book) {
	var bookCard = document.createElement("div");
	var title = document.createElement("p");
	var author = document.createElement("p");
	var pages = document.createElement("p");
	var buttonRd = document.createElement("p");
	//will be adding delete button too in somewhile
	bookCard.classList.add("card");
	bookCard.classList.add("book-card");
	title.classList.add("card-title");
	author.classList.add("card-subtitle");
	pages.classList.add("card-text");
	buttonRd.classList.add("card-text");

	title.textContent = '"'.concat(book.title, '"');
	author.textContent = book.author;
	pages.textContent = "".concat(book.pages, " pages");
	buttonRd.textContent = book.info();

	bookCard.appendChild(title);
	bookCard.appendChild(author);
	bookCard.appendChild(pages);
	bookCard.appendChild(buttonRd);

	bookList.appendChild(bookCard);
}

const getBookFromInput = function () {
	var title = document.getElementById("Title").value;
	var author = document.getElementById("author").value;
	var pages = document.getElementById("pages").value;
	var isRead = document.getElementById("isRead").checked;
	return new Book(title, author, pages, isRead);
};

function openForm() {
	document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
	document.getElementById("popupForm").style.display = "none";
}

formSubmit.onsubmit = addBookToLibrary;
