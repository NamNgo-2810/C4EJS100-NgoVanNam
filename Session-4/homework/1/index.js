// Code 
const product = {
    name: `Xiaomi rice cooker`,
    price: 1700,
    brand: `Xiaomi`,
    color: `white`
};

for (let x in product) {
    console.log(x);
}

// Answer
// 1.1
console.log(`x receives each property of product object`);
// 1.1
for (let x in product) {
    console.log(`${x}: ${product[x]}`);
}