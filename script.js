// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is 
// running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the 
// pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values
//  are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true
  } else {
    return false
  }
}

// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++){
    z.push(i * x)
  }
  return z;
}

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
// there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
  "use strict";
  return words.join(" ")
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number%2 === 0) {
    return number*8
  } else {
    return number*9
  }
}

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

const countSheep = num => {
  let sheep = ""
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`
  }
  return sheep
}

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  } else if (p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock' || p1 == 'scissors' && p2 == 'paper') {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
};

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any char.

function XO(str) {
  let sum = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'x'){
      sum++
    }
    if (str[i].toLowerCase() == 'o'){
      sum--
    }
  }
  return sum == 0
}