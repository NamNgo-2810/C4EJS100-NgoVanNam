function findOppositeNumber(n, firstNum) {
    const step = n / 2;
    return firstNum >= step ? firstNum - step : firstNum + step;
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));