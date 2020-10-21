let answer = [0, 1, 2, 4];

alert('How many legs does a chicken have?');
for (let i = 0; i < 4; i++) {
    alert(`${i+1}. ${answer[i]}`);
}
let choice = prompt('Enter your answer');
do {
    alert('Hahaha');
    choice = prompt('Enter your answer again');
} while (choice <= 0 || choice > 4); 
if (choice == 3) alert('Bravo, you are correct');
else alert('Good luck next time');