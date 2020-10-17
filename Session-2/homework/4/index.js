let n = prompt('Enter n')
if (n < 2) alert(`The factorial of ${n} is 1`);
else {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res*=i;
    }
    alert(`The factorial of ${n} is ${res}`);
}