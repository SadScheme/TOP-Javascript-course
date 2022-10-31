function Book(title: string, author: string, pages: number, read: boolean) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${
			this.read ? "read" : "not read yet"
		}`;
		console.log(
			`${this.title} by ${this.author}, ${this.pages} pages, ${
				this.read ? "read" : "not read yet"
			}`
		);
	};
}
