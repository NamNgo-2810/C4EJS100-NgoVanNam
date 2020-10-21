const input = prompt('Enter a sequence of Numbers, separated by commas (,)');
const nums = input.split(',').map(num => +num);
let sum = 0;
for (let num of nums) {
    sum += num;
}
alert(`The sum of them is ${sum}`);