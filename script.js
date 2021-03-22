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

// Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array
// containing the same elements but with the 'geese' removed.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

const solve = (x, y) => x / y

// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.

var replaceDots = function(str) {
  return str.replace(/\./g,'-');
}

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
  if (x !== Number(x)) {
    return 'Error'
  } else {
    return x * 50 + 6
  }
}

// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the 
// wrong number.
// Can you help me fix the function?

function addFive(num) {
  var total = num + 5
  return total
}

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you 
//need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
  //your code here
  var result= "";
      for(var i =0; i<dna.length; i++) 
      {
        if (dna[i]==="A") 
       {
        result +="T";
       }
        else if (dna[i]==="T") 
       {
        result += "A";
        }
        else if (dna[i]==="C")
        {
        result +="G";
        }
        else if (dna[i]==="G")
        {
        result += "C";
        }
        else {
        result +=dna[i];
        }
     }
     return result;
  }

// The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you 
// can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

// #Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

function pipeFix(numbers){
  let ascNum = []
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    ascNum.push(i)
  }
  return ascNum
}

//When provided with a letter, return its position in the alphabet.
//Input :: "a"
//Ouput :: "Position of alphabet: 1"

function position(letter){
  let alphabet = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for (let i = 0; i <= alphabet.length; i++) {
    if (letter == alphabet[i]) {
      return `Position of alphabet: ${alphabet.indexOf(letter)}`
    }
  }
}

// Make a function that receive age, and return what they drink.

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy'
  } else if (old < 18) {
    return 'drink coke'
  } else if (old < 21) {
    return 'drink beer'
  } else {
    return 'drink whisky'
  }
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this 
// calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b)
}

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see 
// the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter

String.prototype.toAlternatingCase = function () {
  return this.split('').map(function(x){
    if(x >= 'A' && x <= 'Z') return x.toLowerCase();
    if(x >= 'a' && x <= 'z') return x.toUpperCase();
    return x;
  }).join(''); 
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array 
// (true means present).

function countSheeps(arrayOfSheep) {
  let num = 0;
  
  for(let i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;
      
  return num;
}

// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

function century(year) {
  return Math.ceil(year/100)
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name){
  let abbrev = name.split(" ")
  return `${abbrev[0].charAt(0).toUpperCase()}.${abbrev[1].charAt(0).toUpperCase()}`
}

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  let positive = 0;
  let negative = 0;
  
  for (let i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
    else
      negative += input[i];
  }
  
  return [positive, negative];
}

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate 
// the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but 
// excluding zero.

function monkeyCount(n) {
  let count = []
  for (let i = 1; i <= n; i++) {
    count.push(i)
  }
  return count
}

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}