// Initialize products
let products = [];
let names = ['Xiaomi portable charger 20000mah', 'VSmart Active 1', 'IPhone X', 'Samsung Galaxy A9'];
let brands = ['Xiaomi', 'VSmart', 'Apple', 'Samsung'];
let prices = [428, 5487, 21490, 8490];
let colors = ['White', 'Black', 'Gray', 'Blue'];
let categories = ['Charger', 'Phone', 'Phone', 'Phone'];

for (let i = 0; i < 4; i++) {
    products.push({
        Name: names[i],
        Brand: brands[i],
        Price: prices[i],
        Color: colors[i],
        Category: categories[i]
    });
}

// 5.1
// for (let product of products) {
//     console.log('--------------------------------');
//     console.log(`Name: ${product['name']}`);
//     console.log(`Price: ${product['price']}`);
// }

// 5.2
// for (let index in products) {
//     console.log(`#${Number(index)+1}. Name: ${products[index]['name']}`);
//     console.log(`    Price: ${products[index]['price']}`);
// }
// let position = prompt('Enter product position:');
// for (let x in products[position-1]) {
//     console.log(`${x}: ${products[position-1][x]}`);
// }

// 5.3
// let category = prompt('Enter your category?');
// for (let product of products) {
//     let lower = product.Category.toLowerCase();
//     if (lower == category.toLowerCase()) {
//         console.log('--------------------------------');
//         console.log(`Name: ${product['Name']}`);
//         console.log(`Price: ${product['Price']}`);
//     }
// }

// 5.4
let providers = [['Phukienzero', 'Dientuccc'], ['Tgdd', 'DDghn', 'VhStore'], ['Tgdd'], ['Tgdd']];
for (let index in products) {
    products[index]['Providers'] = providers[index];
}
// for (let index in products) {
//     console.log(`#${Number(index)+1}. Name: ${products[index]['Name']}`);
//     console.log(`    Price: ${products[index]['Price']}`);
//     console.log(`    Providers: ${products[index]['Providers'].join(' ')}`);
// }

// 5.5
let provider = prompt('Enter provider');
for (let product of products) {
    if (product['Providers'].includes(provider)) {
        console.log('----------------------');
        for (const [key, value] of Object.entries(product)) {
            console.log(`${key}: ${value}`);
        }
    }
}