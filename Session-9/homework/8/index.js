async function getAPI() {
    const conn = await fetch('https://sheetdb.io/api/v1/qumz0uxjlle6i');
    const data = await conn.json();
    let names = [];
    for (let n of data) {
        names.push(n.name);
    }
    console.log(names);
    update(names);
}

async function searchAPI(name) {
    const conn = await fetch(`https://sheetdb.io/api/v1/qumz0uxjlle6i/search?name=${name}`);
    const data = await conn.json();
    let names = [];
    for (let n of data) {
        names.push(n.name);
    }
    console.log(names);
    update(names);
}

getAPI();

function deleteAPI(name) {
    axios.delete(`https://sheetdb.io/api/v1/qumz0uxjlle6i/search?name=${name}`).then(response => {
        console.log(response.data);
        getAPI();
    })
}

function generateId() {
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2, 9);
    return z;
}

function postAPI(name, age, comment) {
    id = generateId();
    axios.post('https://sheetdb.io/api/v1/qumz0uxjlle6i', {
        "data": {"id": id, "name": name, "age": age, "comment": comment}
    }).then(response => {
        console.log(response.data);
        getAPI();
    })
}

const list = document.getElementById("list");

function update(names) {
    list.innerHTML = '';
    for (let i = 0; i < names.length; i++) {
        list.insertAdjacentHTML("beforeend", `<li><span>${names[i]}</span><button class="remove_btns">x</button></li>`);
    }

    const remove_btns = document.getElementsByClassName("remove_btns");
    for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener('click', () => {
            deleteAPI(names[i]);
        });
    }
}

const add_btn = document.getElementById('add_btn');
const name_input = document.getElementById('name_input');
const age_input = document.getElementById('age_input');
const comment_input = document.getElementById('comment_input');
add_btn.addEventListener('click', () => {
    let newName = name_input.value;
    let newAge = age_input.value;
    let newComment = comment_input.value;
    postAPI(newName, newAge, newComment);
    name_input.value = '';
    age_input.value = '';
    comment_input.value = '';
})