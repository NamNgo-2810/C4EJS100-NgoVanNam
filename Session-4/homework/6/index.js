let frontendTasks = [];
let tasks = ['HTML', 'CSS', 'Basic of Javascript', 'Node Package Manager (npm)', 'Git'];
for (let task of tasks) {
    frontendTasks.push({
        task: task,
        Complete: false
    });
}
// 6.1
// console.log(`Hi there, this is your learning tasks to front-end developer careers`);
// for (let i = 1; i <= frontendTasks.length; i++) {
//     console.log(`${i}. ${frontendTasks[i-1]['task']}`);
//     console.log(`   Complete: false`);
// }

// 6.2 6.3 6.4 6.5
while (true) {
    let command = prompt('Enter your command(New, Delete, Update, Complete)');
    command = command.toLowerCase();
    if (command != "new" && command != "delete" && command != "update" && command != "complete") {
        alert(`This command is not supported`);
        continue;
    }
    switch (command) {
        case "new":
            let newTask = prompt('Enter your new task:');
            frontendTasks.push({task: newTask, Complete: false});
            break;
        case "update":
            var position = prompt('Enter position');
            let newTitle = prompt('Enter new title');
            frontendTasks[position-1]['task'] = newTitle;
            break;
        case "complete":
            var position = prompt('Enter position');
            frontendTasks[position-1]['Complete'] = true;
            break;
        case "delete":
            var position = prompt('Enter position');
            frontendTasks.splice(position-1, 1);
            break;
    }
    break;
}

// 6.6
console.log(`Hi there, this is your learning tasks to front-end developer careers`);
for (let i = 1; i <= frontendTasks.length; i++) {
    console.log(`${i}. [${frontendTasks[i-1]['Complete'] ? 'x' : ' '}] ${frontendTasks[i-1]['task']}`);
}