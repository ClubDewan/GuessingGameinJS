const prompt = require("prompt-sync")();
let random = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
console.log("Enter the Maximum number you want to be guessed from:");
let maxGuessed;
let chances = 0;

maxGuessed = prompt(maxGuessed);
let maxGuess = parseInt(maxGuessed);
let num = random(maxGuess);
console.log(num);
let guessedNum;
let parsedNum;
do {
  console.log("\nGuess a Number less than " + maxGuess);

  guessedNum = prompt(guessedNum);
  parsedNum = parseInt(guessedNum);

  if (parsedNum == num) {
    chances++;
    console.log("You guessed the correct Number\n");
  } else if (parsedNum > num) {
    console.log("You guessed the Number greater than the Random number\n");
  } else {
    console.log("You guessed the Number smaller than the random number\n");
  }
} while (parsedNum != num);
console.log("Your total chances out of 100 are", chances - 100);
