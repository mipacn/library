const myLibrary = []

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let name = prompt("book name:")
    let author = prompt("book author:")
    let pages = prompt("book pages:")
    let read = prompt("have you read it?:")
    let book = new Book (name, author, pages, read)
    myLibrary.push(book)
    console.log(myLibrary)
}

