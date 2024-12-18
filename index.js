// JavaScript Basics Assignment

/*🏋️‍♂️ Task 1: Voting Age Check 🗳️ */

// 1. Create a variable called `votingAge` and set it to any age.
// 2. Write a conditional that returns true if `votingAge` is 18 or older; otherwise, return false.
// 3. Log the result to the console.

let votingAge = 19;

if (votingAge >= 18) {
  console.log(true);
} else {
  console.log(false);
}

/*🏋️‍♂️ Task 2: Variable Value Swap 🔄 */

// 1. Declare two variables and assign them initial values of your choice.
// 2. Write a conditional that changes the value of the first variable if a certain condition with the second variable is met.
// 3. Log the new value of the first variable to the console.

let variableOne = 15;
let variableTwo = 10;

if (variableTwo < variableOne) {
  variableOne = 20;
}

console.log("New value of variableOne:", variableOne);

/*🏋️‍♂️ Task 3: Favorite Number Checker 🔢 */

// 1. Declare a variable named `favoriteNumber` and assign it your favorite number.
// 2. Write a conditional to check if `favoriteNumber` is greater than, less than, or equal to 10.
// 3. Log the result with a message, e.g., "My favorite number is greater than 10."

let favoriteNumber = 7;

if (favoriteNumber > 10) {
  console.log("My favorite number is greater than 10.");
} else if (favoriteNumber < 10) {
  console.log("My favorite number is less than 10.");
} else {
  console.log("My favorite number is equal to 10.");
}

/*🏋️‍♂️ Task 4: Mood Checker 😊😢 */

// 1. Prompt the user to enter their mood.
// 2. Write a conditional that logs the following responses based on the user input:
//    - "Yay me too!" if the mood is "happy"
//    - "Aw, cheer up" if the mood is "sad"
//    - "So moody!" for any other input

let mood = prompt("How are you feeling today?");

if (mood === "happy") {
  console.log("Yay me too!");
} else if (mood === "sad") {
  console.log("Aw, cheer up");
} else {
  console.log("So moody!");
}

/*🏋️‍♂️ Task 5: Odd or Even Checker 🔍 */

// 1. Choose a hardcoded number and store it in a variable.
// 2. Write a conditional to check if the number is odd or even.
// 3. Log whether the number is odd or even, along with the number, to the console.

let num = 14;

if (num % 2 === 0) {
  console.log(`${num} is even.`);
} else {
  console.log(`${num} is odd.`);
}

/*🚀 FIZZBUZZ 🚀 */

// 1. Write a program that prints numbers from 1 to 100.
// 2. For multiples of 3, print "Fizz" instead of the number.
// 3. For multiples of 5, print "Buzz".
// 4. For multiples of both 3 and 5, print "FizzBuzz".
// 5. Add a check for prime numbers and print "Prime" for those.

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(`${i}: Prime`);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*💪 Stretch 1: Vowel Counter 💪 */

function vowelCounter(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log("Vowel count in 'Hello World':", vowelCounter("Hello World"));

/*💪 Stretch 2: Simple Calculator 💪 */

function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default:
      return "Invalid operator";
  }
}

console.log("Calculator result:", simpleCalculator(10, 2, "*"));

/*💪 Stretch 3: Temperature Converter 💪 */

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log("32°F to Celsius:", toCelsius(32));
console.log("0°C to Fahrenheit:", toFahrenheit(0));

/*💪 Stretch 4: Factorial Calculation 💪 */

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log("Factorial of 5:", factorial(5));

/*💪 Stretch 5: Palindrome Checker 💪 */

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

console.log("Is 'Racecar' a palindrome?", isPalindrome("Racecar"));
console.log("Is 'Hello' a palindrome?", isPalindrome("Hello"));


