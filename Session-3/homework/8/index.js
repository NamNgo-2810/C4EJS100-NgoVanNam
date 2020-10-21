console.log('a,');
let sizes = [5,7,20,28,26,9,24,12,10]
console.log('Hello, my name is Nam and here is my sheep sizes:');
console.log(...sizes);

console.log('b,');
let max_size = Math.max.apply(null, sizes);
console.log(`Now my biggest sheep has size ${max_size}, let's shave it`);

console.log('c,');
sizes.splice(sizes.indexOf(max_size),1);
console.log('After searing, here is my flock');
console.log(...sizes);

console.log('d,');
for (let i = 0; i < sizes.length; i++) {
    sizes[i] += 50;
}
console.log(`MONTH 1`);
console.log('One month has passed, my sheeps have grown, here are their sizes');
console.log(...sizes);
max_size = Math.max.apply(null, sizes);
console.log(`Now my biggest sheep has size ${max_size}, let's shave it`);

sizes.splice(sizes.indexOf(max_size),1);
console.log('After searing, here is my flock');
console.log(...sizes);

console.log('e,');
for (let months = 2; months <= 4; months++) {
    for (let i = 0; i < sizes.length; i++) {
        sizes[i] += 50;
    }
    console.log(`MONTH ${months}`);
    console.log('One month has passed, my sheeps have grown, here are their sizes');
    console.log(...sizes);

    let max_size = Math.max.apply(null, sizes);
    console.log(`Now my biggest sheep has size ${max_size}, let's shave it`);

    sizes.splice(sizes.indexOf(max_size),1);
    console.log('After searing, here is my flock');
    console.log(...sizes);
}

console.log('f,')
let total_size = 0;
for (let size of sizes) {
    total_size += size;
}
console.log(`My flock has size in total: ${total_size}`);
console.log(`I would get ${total_size} * ${3} = ${total_size*3}`);