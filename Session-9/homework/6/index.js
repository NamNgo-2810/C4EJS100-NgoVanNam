function calDist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

const d = calDist(3, 10, 0, 6);
if (d != 5) console.log('Failed: the calculation is wrong');
else console.log('Passed, bravo');