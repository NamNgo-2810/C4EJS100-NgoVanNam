let n = prompt('Enter the number of elements');
let nums = [];
for (let i = 0; i < n; i++) {
    nums.push(prompt(`Enter ${i}th element`));
}
// a
nums.sort((a,b) => a-b);
alert(nums);
// b
let odd = [], even = [];
for (let item of nums) {
    if (item % 2 == 0) even.push(item);
    else odd.push(item);
}
alert(`Odds: ${odd}; Evens: ${even}`)
// c
let filter_odd = [];
for (let i = 0; i < odd.length; i++) {
    if (!filter_odd.includes(odd[i])) {
        filter_odd.push(odd[i]);
    }
}

let filter_even = [];
for (let i = 0; i < even.length; i++) {
    if (!filter_even.includes(even[i])) {
        filter_even.push(even[i]);
    }
}