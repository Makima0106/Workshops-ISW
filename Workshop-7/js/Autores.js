document.getElementById("add-author-button").addEventListener("click", function (e) {

    e.preventDefault();

    const authorName = $("#title").val();

    //insert to a database
    let authorsDb = JSON.parse(localStorage.getItem("authors"));
    if (!authorsDb) {
        authorsDb = [];
    }
    const book = {
        name: authorName,
        id: authorsDb.length + 1,
    };
    authorsDb.push(book);
    localStorage.setItem("authors", JSON.stringify(authorsDb));
    // //reload the book list
    // showListOfBooks();
    console.log(JSON.parse(localStorage.getItem("authors")));
    window.location.href = "books.html";
});