function show(dishes) {
    remove();
    let content = document.getElementsByClassName("content")[0];
    for (let dish of dishes) {
        let name = dish.nameFood;
        let image = dish.img;
        let intro = dish.intro;
        content.insertAdjacentHTML("beforeend", `
        
        <div class="dish">
            <a class="food-name" href="specific_dish.html?${dish.id}" rel="bookmark">${name}</a>
            <input class="chosen" type="radio" style="visibility: hidden">
            <input class="rename" type="text" style="visibility: hidden">
            <button class="update" style="visibility: hidden">Rename</button> 
            <div class="food-img">
                <img src=${image} alt="">
            </div>
            <div class="dish-content">${intro}</div>
        </div>
        `);
    }
}
function remove() {
    let content = document.getElementsByClassName("content")[0];
    content.innerHTML = '';
}
function findType(type) {
    let dishes = []
    for (let dish of data) {
        for (let typeOfDish of dish.type) {
            if (typeOfDish == type) {
                dishes.push(dish);
            }
        }
    }
    return dishes;
}

let adminMode = false;
let loged_in = document.getElementById("enter");
loged_in.addEventListener("click", function() {
    adminMode = true;
    showAdminMode();
});
function showAdminMode() {
    let chosen = document.getElementsByClassName("chosen");
    let rename = document.getElementsByClassName("rename");
    let rename_btn = document.getElementsByClassName("update");
    let length = rename.length;
    for (let i = 0; i < length; i++) {
        chosen[i].style.visibility = "visible";
        rename[i].style.visibility = "visible";
        rename_btn[i].style.visibility = "visible";
    }
    remove_btn.style.display = "block";
}

function remove_dishes() {
    let choosed = {};
    let chosen = document.getElementsByClassName("chosen");
    let length = chosen.length;
    for (let i = 0; i < length; i++) {
        if (chosen[i].checked == true) {
            choosed[i] = true;
        }
    } 
    remove();   
    let newData = [];
    for (let i = 0; i < length; i++) {
        if (choosed[i] == null) {
            newData.push(data[i]);
        }
    }
    data = newData;
    show(location.search.slice(1) > 0 ? findType(location.search.slice(1)) : data);
}

function nameUpdate() {
    let foodName = document.getElementsByClassName("food-name");
    let rename_btn = document.getElementsByClassName("update");
    let newName = document.getElementsByClassName("rename");
    for (let i = 0; i < data.length; i++) {
        rename_btn[i].addEventListener("click", function() {
            if (newName[i].value.length > 0) {
                foodName[i].innerHTML = newName[i].value;
            }
        });
        
    }
}
let kindOfDish = location.search.slice(1);
if (adminMode) showAdminMode();
else {
    if (kindOfDish.length > 0) show(findType(kindOfDish));
    else show(data);
}
let remove_btn = document.getElementById("remove-dishes");
remove_btn.addEventListener("click", function() {
    remove_dishes();
});
//nameUpdate();