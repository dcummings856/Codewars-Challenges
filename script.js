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

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  let total = 0
  for (let i = 0; i < x.length; i++) {
    total += Number(x[i])
  }
  return total
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down 
// to the integer (= floored).

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778)
}

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
  let combo1 = a * (b + c)
  let combo2 = a * b * c
  let combo3 = a + b * c
  let combo4 = (a + b) * c
  let combo5 = a + b + c
  let allCombos = [combo1, combo2, combo3, combo4, combo5]
  return Math.max(...allCombos)
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( length 0 ).

function solution(a, b){
  if (a.length > b.length) {
    return b + a + b
  } else if (a.length < b.length) {
    return a + b + a
  }
}

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great 
// to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
//Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to 
// English if the language is not in the database, or in the event of an invalid input.

function greet(language) {
	let languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  if (languages[language]) {
    return languages[language]
  } else {
    return 'Welcome'
  }
}

// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  if (cap >= on + wait) {
    return 0
  } else if (cap < on + wait) {
    return on + wait - cap
  }
}

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  let newArray = [];
  for(let i = 1; i <= number; i++){
    newArray.push(i)
  }
  return newArray
}

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
// First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
  let nums = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      nums.push(numbers[i])
    }
  }
  return nums
}

// Add the isUpperCase method to String to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  if (String(this) === this.toUpperCase()) {
    return true
  } else {
    return false
  }
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str.split('').map(a => {
    return a + a
  }).join('')
}

// Now you have to write a function that takes an argument and returns the square of it.

let square = (num) => {
  return num * num
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('').filter(a => {
    return a !== '!'
  }).join('')
}

// For correct answer program should return int from 0 to 9.
// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

function getAge(str){
  for (let i = 0; i < str.length; i++) {
    if (str[i] > 0) {
      return Number(str[i])
    }
  }
}

// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}

// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2);
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
  let a = num.toString().split("").map(number => Math.pow(number, 2)).join('')
  return Number(a)
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let numArr = numbers.split(" ")
  let min = Math.min(...numArr)
  let max = Math.max(...numArr)
  return `${max} ${min}`
}

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that 
// the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
  return arr.reverse()
}

// The code gives an error!
// a = 123.toString
// Fix it!

var a = '123';

// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".

function switchItUp(number){
  switch(number) {
      case 0:
      return 'Zero'
      break
      case 1:
      return 'One'
      break
      case 2:
      return 'Two'
      break
      case 3:
      return 'Three'
      break
      case 4:
      return 'Four'
      break
      case 5:
      return 'Five'
      break
      case 6:
      return 'Six'
      break
      case 7:
      return 'Seven'
      break
      case 8:
      return 'Eight'
      break
      case 9:
      return 'Nine'
      break
      default:
      return 'not a number'
  }
}

// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

function divide(weight){
  if (weight === 2) {
    return false
  } else {
  return weight % 2 == 0
    }
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter(x => {return typeof x == 'number'})
}

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
   return phrases[(n - 1) % phrases.length] 
}

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to 
// green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state 
// the light should change to.

function updateLight(current) {
  if (current == 'green') {
    return 'yellow'
  } else if (current == 'yellow') {
    return 'red'
  } else if (current == 'red') {
    return 'green'
  }
}

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 
// 0 to n (inclusive).

function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it'
}

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){ 
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
      count += 1
  }
  return count
}

// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are 
// the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions 
// evaluate to true, false otherwise.

function xor(a, b) {
  return a != b;
}

// Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn/how_many_light_sabers_do_you_own that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

function howManyLightsabersDoYouOwn(name) {
  return name == 'Zach' ? 18 : 0
}

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  if (sentence.toLowerCase().match(/english/g)) {
    return true
  } else {
    return false
  } 
}

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// Return the Nth Even Number

function nthEven(n){
  return (n-1)*2;
}

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and
// word dividers.
// Implement a function that checks if something is a palindrome.

function isPalindrome(line) {
  if (line.split("").reverse().join("") == line){
    return true
  } else {
    return false
  }
}

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a 
// function that will take a float and return the amount formatting in dollars and cents.

function formatMoney(amount){
  return '$' + amount.toFixed(2);
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only 
// letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers 
// are equal return a or b.

function getSum( a,b ){
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new 
// inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  let count = 0
  while(p0<p){
      p0 += p0 * percent/100 + aug
      count++
  }
  return count
}

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  if (cc.length < 5) {
    return cc
  } else if (cc.length > 4) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
  }
}

// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and 
// false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

function take(arr, n) {
  return arr.splice(0, n)
}

// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
// If n == 0 return an empty sequence []

function first(arr, n=1) {
  return arr.slice(0,n);
}

// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

function distinct(a) {
  if (a.length <= 1) {
    return a
  } else {
    if (a.length > 1) {
      return a.filter((x, i) => a.indexOf(x) == i)
    }
  }
}

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}


// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
  return list.reverse()
}

// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

function swapValues() {
  var args = Array.prototype.slice.call(arguments)[0];
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  let volume = width * height * depth
  let area = 2 * (height * width) + 2 * (height * depth) + 2 * (width * depth)
  return [area, volume]
}

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let filtered = x.filter(word => {
    return word == "good"
  })
  console.log(filtered)
  if (filtered.length <= 2 && filtered.length > 0) {
    return 'Publish!'
  } else if (filtered.length > 2) {
    return 'I smell a series!'
  } else {
    return 'Fail!'
  }
}

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
// The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
  
  return (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : (number <=100) ? dogs[2] : (number = 101) ?  dogs[3] : dogs[2]
  
}

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect 
// answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

function checkExam(array1, array2) {
  let total = 0
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      total += 4
    } else if (array2[i] == "") {
      total += 0  
    } else if (array1[i] !== array2[i]){
      total -= 1
    }
  }
    if (total < 0) {
      total = 0
    }
  return total
}

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
  url = url.replace("https://", '')
  url = url.replace("http://", '')
  url = url.replace("www.", '')
  return url.split('.')[0]
}

// You are given a positive integer x and you should perform n operations, where on the ith operation you increase x in such a way that its new value is 
// divisible by i (operations are numbered from 1 to n).

// Your task is to find the minimal value of x you can obtain by performing n operations described above.

function increasingNumber(x, n) {
  for (let i = 2; i <= n; i++)
    while (x % i)
      x++;
  return x;
}

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, 
// and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and 
// special characters :D), the return value must be true. Otherwise it should return false.

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name == "Santa Claus" && password === "Ho Ho Ho!") {
    return true
  } else {
    return false
  }
};

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
  return friends.filter(str => {
    if (str.length == 4) {
      return str
    }
  })
}

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum.

function sumStr(a,b) {
  let num1 = Number(a)
  let num2 = Number(b)
  return String(num1 + num2)
}

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(num) {
  let table = '';
  for (let i = 1; i < 11; i++){
    table += `${i} * ${num} = ${num * i}`;
    if(i < 10) table += '\n';
  }
  return table;
}

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item)
// and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not
// empty and some people are still in the bus, and they are probably sleeping there :D

var number = function(busStops){
  let on = 0
  let off = 0
  for (let i = 0; i < busStops.length; i++) {
    on += busStops[i][0]
    off += busStops[i][1]
  }
  return on - off
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  return str.endsWith(ending);
}

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a 
// lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  return array.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
  var res=0;
      for (var g=0;g<=n;g++){
        var square=(g*g+"").split("");
        square.forEach((s)=>s==d?res++:null)
      }return res;
  }

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = function(test, original) {
  let a = test.toLowerCase().split("").sort().join()
  let b = original.toLowerCase().split("").sort().join()
  if (a == b) {
    return true
  } else {
    return false
  }
}

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank
// in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while(principal < desired){
    principal += (principal * interest) * (1 - tax)
    years++
  }
  return years
}

// Write a function that given a floor in the american system returns the floor in the european system.

function getRealFloor(n) {
  if (n < 0) {
    return n
  } else if (n <= 1) {
    return 0
  } else if (n >= 13) {
    return n - 2
  } else {
    return n - 1
  }
}

// Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog.
// If this one is an alligator (case insensitive) return small otherwise return wide.

function mouthSize(animal) {
  if (animal.toLowerCase() == 'alligator') {
    return 'small'
  } else {
    return 'wide'
  }
}

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not.

function plural(n) {
  if (n == 1) {
    return false
  } else {
    return true
  }
}

// Your task is to return the correct string using the Template String Feature.

var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

// You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid
//  string until the mistake. If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

function shiritori(words) {

  if (!words.length || words[0] === '')
    return [];
  
  for (let i = 1; i < words.length; i++)
    if (words[i - 1].slice(-1) !== words[i][0])
      return words.slice(0, i);
  
  return words;
  
}

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.

function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}

// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

Object.freeze(MrFreeze)