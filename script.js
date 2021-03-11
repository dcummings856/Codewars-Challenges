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