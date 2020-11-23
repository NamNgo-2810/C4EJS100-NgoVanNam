let id = location.search.slice(1);
let dish = data[id-1];
let content = document.getElementsByClassName("content")[0];
content.insertAdjacentHTML("beforeend", 
    `<div class="dish">
    <div class="intro">
        <a>${dish.nameFood}</a>
        <img src=${dish.img} alt="">
    </div>

    <div class="recipe">${dish.content}</div>
</div>`);