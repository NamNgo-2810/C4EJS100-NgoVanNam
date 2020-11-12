function randInt() {
    return Math.floor(Math.random() * 10);
}

const x = randInt();
if (x < 0) console.log(`Failed: The number is smaller than 0`);
else if (x > 10) console.log(`Failed: the number is bigger than 10`);
else console.log(`Passed, bravo`);