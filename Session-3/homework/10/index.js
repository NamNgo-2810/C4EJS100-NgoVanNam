const input = prompt('Enter a sequence of names');
const names = input.split(',');
// Approach 1
let newNames1 = [];
for (let name of names) {
    newNames1.push('<' + name + '>');
}
alert(`${names} => ${newNames1}`);

// Approach 2
const newNames2 = names.map(name => '<' + name + '>');
alert(`${names} => ${newNames2}`);