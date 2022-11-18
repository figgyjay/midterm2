// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/
let x = 2
let n = 20
function sumOfOdds(x, n){
  let sum = 0
    while(n <= x){
      if(n % 2 == 1){
        sum += n
      }
      n += 1
    }
    return sum
    }


/* console.logs to test */
console.log("SUM OF ODDS")
console.log(sumOfOdds(x,n));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For example arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/


let array1 = [10,254,563,444,598,634];
let array2 = [912,835,17,6,543,4345];

const arraySubtract = (arr4, arr5) => arr4.map(function (num, index) { return num - arr5[index] });

arraySubtract(array2, array1);




/* console.logs to test */
console.log("ARRAY SUBTRACT")
console.log(arraySubtract(array2, array1));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/
let arr1 = [87, 82, 84]
let arr2 = "Heat"
let arr3 = "wave"

function surroundArray(arr1, arr2, arr3){
arr1.push(arr2)
arr1.unshift(arr3)
return arr1
}


  
  /* console.logs to test */
console.log(surroundArray(arr1, arr2, arr3));
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/
  function findLongestString(array) {
  let longestWord = "";
  array.forEach(function(word) 
  {if(word.length > longestWord.length) 
  {longestWord = word;}});
   return longestWord;
}

var word = findLongestString(["Dracula", "David", "ram", "Alligator",]);
 
  





/* console.logs to test */
function findLongestWord(array) {
let longestWord = "";
array.forEach(function(word) 
{if(word.length > longestWord.length){
longestWord = word;}});
return longestWord;
}

var word = findLongestWord(["Dracula", "Bill Cosby", "Hungry", "Why"]);
console.log(word); 
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/
let toReplace = "Javascript is the most popular language";
let charToReplace = ['r','s'];
let replaceWithChar = ['s','r'];
newString = sToR(toReplace, charToReplace, replaceWithChar);
console.log(newString);

function sToR(toReplace, charToReplace, replaceWith)
{
    for (var i = 0; i < charToReplace.length; i++) {
        toReplace = toReplace.replace(new RegExp(charToReplace[i]), replaceWith[i]);
    }
    return toReplace;
}

console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

    let number = 267
    let a = 4
    let b = 7

    function isDivideBy(number, a, b) {
      return (number % a === 0) && (number % b === 0);
    }

/* console.logs to test */
console.log("isDivideBy");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

  let string1 = "Hey! Did you know my papa was a rolling stone?";

  function exclamationAndQuestion(string1){
  let arr = string.split("");
  let index = arr.indexOf("?");
  let index2 = arr.indexOf('!');
  let result = arr.join("");
  if (index !== -1) {answer = "False"}
  else {answer = "True"}
  if (index2 !== -1) {answer = "False"}
  else {answer = "True"}

  return answer
} 

console.log(exclamationAndQuestion(string1));

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/


let str = "I want to count the number of occurrences of each char in this string";
function countAB( str )
{
  if( str.length == 0 )
  {
    console.log("Invalid string")
    return;
  }

  for( let i = 0 ;i < str.length ;i++)
  {
    //variable counting occurrence
    let count = 0;
    for( let A = 0 ; A < str.length ;A++)
    {
      if( str[i] == str[A] && i > A  )
      {
       break;
      }
      if( str[i] == str[A]  )
      {
        count++;
      }
    }
    for( let B = 0 ; A < str.length ;B++)
    {
      if( str[i] == str[B] && i > B  )
      {
       break;
      }
      if( str[i] == str[B]  )
      {
        count++;
      }
    }
    if( count > 0)
    console.log(`${str[i]} occurs ${count} times`);
     
  }
}


console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

// Our code here. Don't touch!
if (typeof sumOfOdds === 'undefined') {
    sumOfOdds = undefined
  }
  
  if (typeof arraySubtract === 'undefined') {
    arraySubtract = undefined
  }
  
  if (typeof surroundArray === 'undefined') {
    surroundArray = undefined
  }
  
  if (typeof longestString === 'undefined') {
    longestString = undefined
  }
  
  if (typeof sToR === 'undefined') {
    sToR = undefined
  }
  
  if (typeof divisibleBy4And7 === 'undefined') {
    divisibleBy4And7 = undefined
  }

  if (typeof exclamationAndQuestion === 'undefined') {
    exclamationAndQuestion = undefined
  }
  
  if (typeof countAB === 'undefined') {
    countAB = undefined
  }
  
  module.exports = {
    sumOfOdds,
    arraySubtract,
    surroundArray,
    longestString,
    sToR,
    divisibleBy4And7,
    exclamationAndQuestion,
    countAB,
  }
