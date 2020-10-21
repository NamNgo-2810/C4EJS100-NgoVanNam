const nums = [1,3,6,5,2,1,7];
let found = false, index;
const key = prompt('Enter a number');
for (let idx in nums) {
    if (key == nums[idx]) {
        found = true;
        index = idx;
        break;
    }
}
if (found) alert(`${key} is FOUND in my array at index ${index}`);
else alert(`${key} is NOT found in my array`);