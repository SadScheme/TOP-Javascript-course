let myLibrary = [];

// variables needed from HTML
const bookList = document.getElementById("bookList");
const bookSubmit: HTMLElement = document.getElementsByClassName(
	"bookSubmit"
)[0] as HTMLElement;

function Book(
	title: string,
	author: string,
	pages: number,
	read: boolean
): any {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.read ? "Read" : "Not Read"}`;
	};
}

function addBookToLibrary() {}

//creating bookcards
function createBookCard(book) {
	const bookCard = document.createElement("div");
	const title = document.createElement("p");
	const author = document.createElement("p");
	const pages = document.createElement("p");
	const buttonRd = document.createElement("p");
	//will be adding delete button too in somewhile

	bookCard.classList.add("card");
	title.classList.add("card-title");
	author.classList.add("card-subtitle");
	pages.classList.add("card-text");
	buttonRd.classList.add("btn btn-primary card-text");

	title.textContent = `"${book.title}"`;
	author.textContent = book.author;
	pages.textContent = `${book.pages} pages`;
	buttonRd.textContent = book.info;

	bookCard.appendChild(title);
	bookCard.appendChild(author);
	bookCard.appendChild(pages);
	bookCard.appendChild(buttonRd);

	bookList.appendChild(bookCard);
}

const getBookFromInput = () => {
	const title = document.getElementById("Title");
	const author = document.getElementById("author");
	const pages = document.getElementById("pages");
	const isRead = document.getElementById("isRead");

	return new Book(title, author, pages, isRead);
};

bookSubmit.onclick = addBookToLibrary();
