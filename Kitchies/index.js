function showHome() {
    let content = document.getElementsByClassName("content")[0];
    for (let dish of data) {
        let name = dish.nameFood;
        let image = dish.img;
        let intro = dish.intro;
        content.insertAdjacentHTML("beforeend", `
            <div class="dish">
                <a href="specific_dish.html?${dish.id}" rel="bookmark">
                    ${name}
                </a>
                <div class="food-img">
                    <img src=${image} alt="">
                </div>
                <div class="dish-content">${intro}</div>
            </div>
        `);
    }
}
showHome();
function remove() {
    let content = document.getElementsByClassName("content")[0];
    content.innerHTML = '';
}