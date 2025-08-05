document.addEventListener("DOMContentLoaded", function () {
    loadAuthors();
});

document.getElementById("add-book-button").addEventListener("click", function (e) {

    e.preventDefault();

    const bookName = $("#title").val();
    const comboAuthor = document.getElementById("authors-list");
    const authorName = comboAuthor.options[comboAuthor.selectedIndex].text;

    //insert to a database
    let booksDb = JSON.parse(localStorage.getItem("books"));
    if (!booksDb) {
        booksDb = [];
    }
    const book = {
        name: bookName,
        author: authorName,
        id: booksDb.length + 1,
    };
    booksDb.push(book);
    localStorage.setItem("books", JSON.stringify(booksDb));
    // //reload the book list
    // showListOfBooks();
    console.log(JSON.parse(localStorage.getItem("books")));
    window.location.href = "books.html";
});

function loadAuthors() {
    // read authors from the database
    const authors = JSON.parse(localStorage.getItem("authors"));

    if (authors) {
        let options = "";
        authors.forEach((author) => {
            options += `<option value="${author.id}">${author.name}</option>`;
        });
        // renders the select authors-list with the authors found
        document.getElementById("authors-list").innerHTML = options;
    }
}

// $("#add-book-button").bind("click", function () {
//     addBook();
// });
