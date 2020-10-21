let a = 2, b = 4;
let temp = a;
a = b;
b = temp;
console.log(a + ' ' + b);

[a, b] = [b, a];
console.log(a + ' ' + b);

a += b;
b = a - b;
a -= b;
console.log(a + ' ' + b);

a ^= b;
b = a ^ b;
a ^= b;