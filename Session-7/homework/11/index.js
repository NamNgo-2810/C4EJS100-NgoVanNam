const btn = document.getElementById("button");
const inp = document.getElementById("input");
let result = document.getElementById("result_div");
var name;
inp.addEventListener('keyup', (e) => {
    name = e.target.value;
    
    console.log(name);
});

btn.addEventListener('click', () => {
    //console.log(e.target);
    name = name.toUpperCase();
    result.innerHTML = name;
});