// 1.1
console.log(Math.random());
// 1.2
const arr = [1,2,3,4,5,6,7,8,9];
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(arr[getRandomInt(arr.length)]);
// 1.3
let quiz1 = {
    quiz: `A is 6 years old, B is half of A's age. When A 60, how old B will be?`,
    choices: [30, 33, 57, 3],
    rightChoice: 3,
    used: false
};
let quiz2 = {
    quiz: 'What is between sky and land?',
    choices: ['air', 'ocean', 'ozone layer', 'and'],
    rightChoice: 'and',
    used: false
};
let quiz3 = {
    quiz: 'We need 5 minutes to boil an egg, so how long does 10 eggs take to be boiled?',
    choices: [50, 5, 20, 100],
    rightChoice: 5,
    used: false
};
let quiz4 = {
    quiz: `I went to the market and buy some chicken and two eggs. Total cost is 110,000VND. Chicken's cost is higher than eggs 100,000VND. How much does an egg cost?`,
    choices: ['10,000', '5,000', '2,500', 'free'],
    rightChoice: '2.500',
    used: false
};
const quizzes = [quiz1, quiz2, quiz3, quiz4];
// 1.4
let forAsk = quizzes[getRandomInt(quizzes.length)];
let answer = prompt(`${forAsk.quiz}\n1. ${forAsk.choices[0]}\n2. ${forAsk.choices[1]}\n3. ${forAsk.choices[2]}\n4. ${forAsk.choices[3]}`);
// 1.5
if (answer < 1 || answer > 4) alert('The choice is invalid');
else if (forAsk.choices[answer - 1] != forAsk.choices[choices.indexOf(rightChoice)]) alert('Wrong answer!');
else alert('Correct');
// 1.6 - 1.7
let userPoint = 0;
while (true) {
    let allUsed = true;
    for (let quiz of quizzes) {
        if (!quiz.used) {
            allUsed = false;
            break;
        }
    }
    if (allUsed) {
        alert('You have answered all the quizzes');
        break;
    }
    let noUsed = quizzes[getRandomInt(quizzes.length)];
    if (noUsed.used) continue;
    noUsed.used = true;
    let answer = prompt(`${noUsed.quiz}\n1. ${noUsed.choices[0]}\n2. ${noUsed.choices[1]}\n3. ${noUsed.choices[2]}\n4. ${noUsed.choices[3]}`);
    if (answer < 1 || answer > 4) alert('The choice is invalid');
    else if (noUsed[answer - 1] != noUsed.choices[choices.indexOf(rightChoice)]) alert('Wrong answer!');
    else {
        alert('Correct');
        userPoint++;
    }
}
alert(`You answered correctly ${userPoint} out of ${quizzes.length}`);
// 1.8
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
let shuffledQuiz = quizzes.getRandomInt(quizzes.length);
shuffle(shuffledQuiz.choices);
let answer = prompt(`${shuffledQuiz.quiz}\n1. ${shuffledQuiz.choices[0]}\n2. ${shuffledQuiz.choices[1]}\n3. ${shuffledQuiz.choices[2]}\n4. ${shuffledQuiz.choices[3]}`);
if (answer < 1 || answer > 4) alert('The choice is invalid');
else if (shuffledQuiz[answer - 1] != shuffledQuiz.choices[choices.indexOf(rightChoice)]) alert('Wrong answer!');
else alert('Correct');