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

// Write a function to split a string and convert it into an array of words. 

function stringToArray(string){
  return string.split(' ')
}

// Write a function which receives as inputs two arrays: one containing the attacker's die rolls in no particular order; the other 
// the defender's die rolls again in no particular order, and returns the result of the battle as a two element array containing the 
// numbers of units lost by the attacker and the defender respectively.

// Some players who find the standard game a bit too slow paced have adopted house rules for big battles in which one or both players 
// may be permiited to roll more than 2 or 3 dice at the same time. The function should provide for this situation, and return an 
// appropriate outcome to the big battle.

function battleOutcome(attacker, defender) {
  const a = attacker.sort((a,b) => b-a);
  const b = defender.sort((a,b) => b-a);
  const result = [0, 0];
  while (a.length > 0 && b.length > 0)
    result[a.shift() > b.shift() ? 1 : 0]++;
  return result;
}

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they 
// are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  let splitStr = this.split(' ')
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  return splitStr.join(" ")
};

// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dad, son) {
  if (son * 2 > dad) {
    return (son * 2) - dad
  } else {
  return dad - (son * 2)
  }
}

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc 
// order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

function mergeArrays(arr1, arr2) {
  let concatArr = arr1.concat(arr2)
  let newArr = []
  for (let i = 0; i < concatArr.length; i ++) {
    if (newArr.indexOf(concatArr[i]) === -1) {
      newArr.push(concatArr[i])
    }
  }
  return newArr.sort((a, b) => {
    return a - b
  })
}

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length 
// of the longest word, as a number.
// There will only be one 'longest' word.

//BUGGED CODE
/* function findLongest(str) (
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
    }
    return longest
)*/

//DEBUGGED CODE
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
    return longest
}

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

var Ball = function(ballType) {
  this.ballType = ballType
  
  if (this.ballType == undefined) {
    this.ballType = 'regular'
  }
  
};