let myLibrary = []

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


let container = document.querySelector(".container")
let shit = []

function displayBook () {
    
    for (let i = 0; i < myLibrary.length; i++){
        let div = document.createElement("div")
        container.append(div)
        div.style.cssText = "padding: 1vh 0vh; background: white; text-align: center; border-radius: 2vh; display:flex; flex-direction:column"

        let pName = document.createElement("p")
        let pAuthor = document.createElement("p")
        let pPages = document.createElement("p")
        let pRead = document.createElement("button") 
        let remove = document.createElement("button")

        shit.push(pRead, remove)

        if (myLibrary[i].read == true){
            pRead.textContent = "Read"
        }
        else pRead.textContent = "Not read"

        pName.textContent = `"${myLibrary[i].name}"`
        pAuthor.textContent = myLibrary[i].author
        pPages.textContent = `${myLibrary[i].pages} pages`
        remove.textContent = "Remove"
        

        pName.style.cssText = "font-size: 3vh"
        pAuthor.style.cssText = "font-size: 3vh"
        pPages.style.cssText = "font-size: 3vh"
        pRead.style.cssText = "font-size: 3vh; margin:1vh 2vh; padding:2vh"
        remove.style.cssText = "font-size: 3vh; margin:1vh 2vh; padding:2vh"

        div.append(pName)
        div.append(pAuthor)
        div.append(pPages)
        div.append(pRead)
        div.append(remove)
        
        pRead.addEventListener("click", () => {
            if (pRead.textContent == "Read"){
                pRead.textContent = "Not read"
                myLibrary[i].read = false
            }
            else {
                pRead.textContent = "Read"
                myLibrary[i].read = true
            }
            
        })


        remove.addEventListener("click", () => {
            myLibrary.splice(i, 1);

            container.removeChild(div);

            console.log(myLibrary);

            container.innerHTML = "";
            displayBook();
        })
    }
}

displayBook()


let dialog = document.querySelector("dialog")
let showButton = document.querySelector(".button > button")
let closeButton = document.querySelector("form > button")

let iName = document.querySelector(".name")
let iAuthor = document.querySelector(".author")
let iPages = document.querySelector(".pages")
let iRead = document.querySelector("#check")



showButton.addEventListener("click", () => {
    dialog.showModal()
})



closeButton.addEventListener("click", () => {
    container.innerHTML = "";
    let readiness = iRead.checked;
    let newBook = new Book(iName.value, iAuthor.value, iPages.value, readiness);

    myLibrary.push(newBook);
    console.log(myLibrary);

    displayBook(); 
    dialog.close(); 
})









document.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInsideDialog = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
    if (!isInsideDialog && event.target !== showButton) {
        dialog.close();
    }   
  });


