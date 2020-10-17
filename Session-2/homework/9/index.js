// a
console.log("a,")
console.log(3)
console.log(3)

// b
console.log("b,")
let n = prompt("Enter the total number of L's and H's")
console.log(Math.ceil(n/2))
console.log(Math.floor(n/2))

// c
console.log("c,")
for (let i = 0; i < 4; i++) {
    console.log(0)
    console.log(1)
}

// d
console.log("d,")
n = prompt("Enter the total number of 1's and 0's")
for (let i = 0; i < n; i++) {
    if (i % 2 == 0) console.log(0)
    else console.log(1)
}