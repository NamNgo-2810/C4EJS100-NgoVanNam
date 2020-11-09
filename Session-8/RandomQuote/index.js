const quote = document.getElementById("quote");
const author = document.getElementById("author");
const reload = document.getElementById("reload");

reload.addEventListener('click', () => {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = randomQuote["quoteText"];
    author.innerHTML = randomQuote["quoteAuthor"];
});