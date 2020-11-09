const data = [
    {
        'Project': 'Learn front-end',
        'Task': 'Learn HTML',
        'Time spent': 6
    },
    {
        'Project': 'Learn front-end',
        'Task': 'Learn CSS',
        'Time spent': 8
    },
    {
        'Project': 'Learn front-end',
        'Task': 'Learn JS Variables and Data Types',
        'Time spent': 6
    },
    {
        'Project': 'Learn git',
        'Task': 'Learn git basics',
        'Time spent': 2
    }
];

const tableBody = document.getElementById("ts_tbody");
const projectBox = document.getElementById("Add project");
const taskBox = document.getElementById("Add task");
const timeBox = document.getElementById("Add time spent");
const add_btn = document.getElementById("add_btn");
const clear_btn = document.getElementById("clear_btn");
for (let item of data) {
    addObj(tableBody, item);
}

let isUpdate = false;
let updateIdx = 0;
function addObj(tb, item) {
    let tr = '<tr>';
    for (let attr in item) {
        tr += `<td>${item[attr]}</td>`;
    }
    tr += '<td><button class="remove">X</button><button class="update">U</button></td>'
    tr += '</tr>';
    tb.insertAdjacentHTML('beforeend', tr);
}

function update_table() {
    tableBody.innerHTML = '';
    for (let item of data) {
        addObj(tableBody, item);
    }
    const remove_btns = document.getElementsByClassName('remove');
    const update_btns = document.getElementsByClassName('update');  
    for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener('click', () => {
            data.splice(i, 1);
            tableBody.innerHTML = '';
            update_table();
        });
    };
    for (let i = 0; i < update_btns.length; i++) {
        update_btns[i].addEventListener('click', () => {
            add_btn.innerHTML = 'Update';
            isUpdate = true;
            updateIdx = i;
        });
    };
}

update_table();
add_btn.addEventListener('click', () => {
    
    if (!isUpdate) {
        data.push(
            {
                'Project': projectBox.value,
                'Task': taskBox.value,
                'Time spent': timeBox.value
            }
        );
        addObj(tableBody, data[data.length-1]);
    }
    else {
        data[updateIdx] = {'Project': projectBox.value, 'Task': taskBox.value, 'Time spent': timeBox.value};
        update_table();
        projectBox.value = '';
        taskBox.value = '';
        timeBox.value = '';
        add_btn.innerHTML = 'Add';
    }
});

clear_btn.addEventListener('click', () => {
    projectBox.value = '';
    taskBox.value = '';
    timeBox.value = '';
    isUpdate = false;
});