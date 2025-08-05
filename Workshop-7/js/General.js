
document.addEventListener("DOMContentLoaded", function () {

    showListOfBooks();

});

function showListOfBooks() {
    const books = JSON.parse(localStorage.getItem("books"));
    const authors = JSON.parse(localStorage.getItem("authors"));
    const table = document.getElementById("books_table");

    if (books) {
        let rows = "";
        books.forEach((book, index) => {
            
            // let authorName = "desconocido";
            // authors.forEach((author) => {
            //     if (book.author === author.id) {
            //         authorName = author.name;
            //     }
            // });

            let row = `<tr>`;
            row += `<td>${book.id}</td>`;
            row += `<td>${book.name}</td>`;
            row += `<td>${book.author}</td>`;
            row += `<td> <a onclick="editBook(${book.id})" class="link edit">Edit</a>  |  <a  onclick="deleteBook(${book.id});" class="link delete">Delete</a>  </td>`;
            rows += row + "</tr>";
        });
        table.innerHTML = rows;
    }
}


