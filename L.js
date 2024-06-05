"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myWork = [];
for (let x = 1; x <= 10; x++) {
    let lessons = {
        name: `Lesson ${x}`,
        status: x % 2 === 1 ? true : false // / is ternary operator used for short hand
    }; // if-else statements.
    myWork.push(lessons);
}
console.log(myWork);
// 2. Number Guessing Game using WHILE Loop:
console.log("\n");
let maxValue = 6;
let randomNumber = Math.floor((Math.random() * maxValue) + 1);
let guessStatus = false;
let preDefinedGuesses = [1, 2, 3, 4, 5, 6];
let guessCount = 0;
while (true) {
    let guess = Math.floor((Math.random() * maxValue) + 1);
    console.log("Your guessed number: ", guess);
    // if (guess > maxValue || guess < 1) {
    //     console.log(`Invalid guess! Please enter a number between 1 and ${maxValue}.`);
    //     continue;
    //   }
    if (guess === randomNumber) {
        guessCount++;
        console.log(`Congrats guessed number matched!, in ${guessCount} tries.`);
        break;
    }
    else if (guess > randomNumber) {
        console.log('Guess is too high, Try again.');
    }
    else {
        console.log('Guess is too low, Try again.');
    }
    guessCount++;
}
console.log(randomNumber);
guessStatus = true;
console.log(`Your Guessed Status is ${guessStatus}`);
// 3. Counter Incrementer using DO WHILE Loop:
let counter = 0;
let step = 1;
do {
    counter = counter + step;
    console.log(counter);
} while (counter < 100);
// 4. Exploring Objects With FOR IN Loop:
console.log("\n");
let myObject = {
    item1: "bag",
    item2: "purse",
    item3: "shoe",
};
for (let m in myObject) {
    console.log(`${m} is ${myObject[m]}`);
}
// 5. Exploring Arrays With FOR OF Loop:
console.log("\n");
let myArray = [];
for (let z = 1; z <= 10; z++) {
    myArray.push(z);
}
console.log("\n");
console.log(myArray);
for (let a = 0; a < myArray.length; a++) {
    console.log(`Element at index ${a} is ${myArray[a]}`);
}
for (let b of myArray) {
    console.log(b);
}
