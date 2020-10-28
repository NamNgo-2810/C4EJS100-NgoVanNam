// 2,1
let words = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color',
'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let freq = {};
for (let word of words) {
    if (freq[word] == null) freq[word] = 1;
    else freq[word] += 1;
}
for (let word in freq) {
    console.log(`${word}: ${freq[word]}`);
}
// 2.2
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7
    }
];
let inventoryByBrand = {};
for (let laptop of inventory) {
    if (inventoryByBrand[laptop.brand] == null) {
        inventoryByBrand[laptop.brand] = [];
    }
    inventoryByBrand[laptop.brand].push(laptop);
}
console.log(inventoryByBrand);

let brand = prompt('Which brand?');
let str = '';
let totalVal = 0;
for (let lap of inventoryByBrand[brand]) {
    str += '\n' + lap.name;
    totalVal += lap.price;
}
alert(`There are ${inventoryByBrand[brand].length} of ${brand} in inventory:${str}\nWith total value: ${totalVal}`);
