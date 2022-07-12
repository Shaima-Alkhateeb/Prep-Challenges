"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  optional:
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  // write your code here
  let aftterReverse = [];
  while(arr.lenght){
    aftterReverse.push(arr.pop());
  }
  return aftterReverse;
};
// console.log(reverseArray(['C#', 'JS', 'Ruby','Python']));

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Given the array consisting of 2n elements. Write a function that takes the
// array in the form [x1,x2,...,xn,y1,y2,...,yn] and return the array
// in in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].


//Use two pointers to create the new array of 2n elements. The first starting at the beginning and
// the other starting at (n+1)th position. Alternate between them and create the new array.
const shuffleArray = (arr) => {
  // write your code here

  let afterShuffleArray = [];
  let middle = arr.lenght/2;
  const firstHalf = arr.splice(0, middle);   
  const secondHalf = arr.splice(-middle);
  for(let i=0; i<middle; i++) {
    afterShuffleArray = firstHalf[i].push;
    afterShuffleArray = secondHalf[i].push;
  }

  return afterShuffleArray;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const shuffleString = (str, indicesArr) => {
  // write your code here
  temp = [];
  for (let i=0, j=0; i<str.lenght; i++) {
    if (j === indicesArr[i]){
      temp.push(str[i]);
      j++;
      i=0;
    }
    
  }
  return temp;

};

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, shuffleArray, shuffleString };
