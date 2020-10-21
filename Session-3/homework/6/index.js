const input = prompt('Enter a sequence of Numbers, separated by ","');
const nums = input.split(',').map(num=>+num);
let minimum = Number.MAX_SAFE_INTEGER;
for (let num of nums) {
    minimum = Math.min(minimum, num);
}
alert(`The smallest number is ${minimum}`);