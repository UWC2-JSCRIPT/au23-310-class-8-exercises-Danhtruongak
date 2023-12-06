const formEl = document.getElementById("best-books-form");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const display = document.getElementById("books-container");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const API = "CzeU97tYEDitbaHYwYoC9KyEiTgLlWWb";
  const datelist = `${year}-${month}-${date}`;
  const list = "hardcover-fiction";

  const bookURL = `https://api.nytimes.com/svc/books/v3/lists/${datelist}/${list}.json?api-key=${API}`;

  const asyncFetch = async function () {
    try {
      const data = await fetch(bookURL);
      const dataJson = await data.json();
      const bookLists = dataJson.results.books.slice(0, 5);

      for (let book of bookLists) {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        const h6 = document.createElement("h6");
        const p = document.createElement("p");
        const img = document.createElement("img");
        ul.appendChild(img);
        img.setAttribute("src", book.book_image);
        ul.appendChild(li);

        li.innerText = book.title;

        li.appendChild(h6);

        h6.innerText = book.author;
        li.appendChild(p);
        p.innerText = book.description;
      }
    } catch (err) {
      console.log(err);
    }
  };
  asyncFetch();
  // Fetch bestselling books for date and add top 5 to page
});
