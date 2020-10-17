console.log('a,')
for (let i = 0; i < 7; i++) {
    console.log(i);
}
console.log('b,')
let n = prompt('Enter n')
for (let i = 0; i < n; i++) {
    console.log(i);
}
console.log('c,')
n = prompt('Enter n')
for (let i = 3; i < n; i++) {
    console.log(i);
}
console.log('d,')
let c = prompt('Enter c')
n = prompt('Enter n')
for (let i = c; i < n; i++) {
    console.log(i);
}
console.log('e,')
c = prompt('Enter c')
n = prompt('Enter n')
for (let i = c; i < n; i+=3) {
    console.log(i);
}
console.log('f,')
c = prompt('Enter c')
n = prompt('Enter n')
let f = prompt('Enter f')
for (let i = c; i < n; i+=f) {
    console.log(i);
}