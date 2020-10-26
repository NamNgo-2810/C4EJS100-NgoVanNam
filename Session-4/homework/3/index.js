// 3.1
console.log(`The outermost layer is an object`);

// 3.2
console.log(`hits is an array`);

// 3.3
console.log(`We can use a for loop to iterate through the hits array and get access to required properties in each element using object destructuring`);
for (let hit of data.hits) {
    console.log(hit);
}