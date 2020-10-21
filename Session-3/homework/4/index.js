let list = []
let active = true;
while (active) {
    let action = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
    action = action.toUpperCase();
    if (action != 'C' && action != 'R' && action != 'U' && action != 'D') {
        alert('This command are not supported');
    }
    else {
        if (action == 'C') {
            let newItem = prompt('Enter the name of new item');
            list.push(newItem);
            alert('Done');
        }
        else if (action == 'R') {
            console.log('The current items are:');
            for (let i = 0; i < list.length; i++) {
                console.log(`${i+1}. ${list[i]}`);
            }
        }
        else if (action == 'U') {
            let index = prompt('Enter the position you want to update');
            let newName = prompt('Enter the new name');
            list[index-1] = newName;
            console.log('The current items are:');
            for (let i = 0; i < list.length; i++) {
                console.log(`${i+1}. ${list[i]}`);
            }
        }
        else {
            let index = prompt('Enter the position you want to delete');
            list.splice(index-1,1);
            alert('Done');
        }
    }
}
