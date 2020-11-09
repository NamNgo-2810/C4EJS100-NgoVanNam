const plus = document.getElementById("plus");
const subtract = document.getElementById("subtract");
const counter = document.getElementById("count");

let count = 0;
counter.innerHTML = count;

plus.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
});

subtract.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
});