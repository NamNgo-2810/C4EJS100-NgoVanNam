const input = prompt('Enter a sequence number');
const nums = input.split(',').map(num => +num);

// Approach 1
let odd1 = []
for (let num of nums) {
    if (num % 2 == 1) odd1.push(num);
}
alert(`${nums} => ${odd1}`);

// Approach 2
const odd2 = nums.filter(num => num % 2 == 1);
alert(`${nums} => ${odd2}`);