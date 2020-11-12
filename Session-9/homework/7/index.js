async function load() {
    const conn = await fetch(`http://quotes.rest/qod.json`);
    const data = await conn.json();
    show(data);
}
function show(data) {
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;
    const html_quote = document.getElementById("quote");
    const html_author = document.getElementById("author");
    html_quote.innerHTML = quote;
    html_author.innerHTML = author;
}
load();