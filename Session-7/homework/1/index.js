const position = ['beforebegin', 'afterbegin', 'beforeend', 'afterend'];
const container = document.getElementById('list');
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
        container.insertAdjacentHTML(position[2], `<li>${j}</li>`);
    }
}