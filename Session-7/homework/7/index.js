const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const key = document.getElementById("key");
btn1.addEventListener('click', (e) => {
    alert(e.target);
});

btn2.addEventListener('click', (e) => {
    alert(e.target);
});

key.addEventListener('keydown', (e) => {
    console.log(e.key);
});