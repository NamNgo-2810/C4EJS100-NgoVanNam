// 1
const items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);
// 2
const domList = document.getElementById("ul_test_items_list");

// 3
console.log(domList);
// 4
items.map((item, index) => {
    domList.insertAdjacentHTML('beforeend', `<li id='item_${index}'><span>${item}</span><button id='button_${index}'>Remove</li>`);
    let btn = document.getElementById(`button_${index}`);
    let stuff = document.getElementById(`item_${index}`);
    btn.addEventListener('click', () => {
        stuff.remove();
    })
})  

let newItemInput = document.getElementById("input");
let submit = document.getElementById("button");
let newItem;

newItemInput.addEventListener('keyup', (e) => {
    newItem = e.target.value;
});
items.push(newItem);

submit.addEventListener('click', () => {
    domList.insertAdjacentHTML('beforeend', `<li id='item_${items.length-1}'><span>${newItem}</span><button id='button_${items.length-1}'>Remove</li>`);    
    let remo = document.getElementById(`button_${items.length-1}`);
    let newStuff = document.getElementById(`item_${items.length-1}`);
    console.log(newStuff);
    remo.addEventListener('click', () => {
        newStuff.remove();
    });
});
