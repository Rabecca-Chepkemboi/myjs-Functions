// 1. Write a function that takes an array of objects with properties "name" and "age",
//  and returns an array of objects sorted by age in ascending order

function objects(a, b) {

    return a.age - b.age;                                   //use subtraction so as to get the ages in order of ascending
}

let names = [{name: "Clarah", age: 27}, {name: "Issabella", age: 24}, {name: "Ambrose", age: 25}]

console.log(names.sort(objects));


// 2. Write a function that takes a number as input and returns the factorial of that number.

function num(number) {
    if (number == 0 || number == 1) {
        return 1;                             //recursion case
    } else {
        return number * num(number - 1);
    }
}
let number = 5;
answer = num(number)
console.log(answer);



// 3. Write a function that takes a string as input and returns a new string with 
// all the characters in reverse order, except for the first letter of each
// word which should remain in its original position.

function reverseWords(str) {
    let reversedArr = [];
    
    for (let i = 0; i < str.length; i++) {
      let word = str[i].split('').reverse().join('');
      let firstLetter = word.charAt(0);
      let restOfWord = word.slice(1);
      reversedArr.push(firstLetter + restOfWord);
    }
    
    return reversedArr.join(' ');
  }
let str = ["hello", "clarah", "issabella",]
console.log(reverseWords(str))    



// 4. Write a function that takes an array of integers as input and returns an array of
//  all the pairs of numbers in the array that add up to a given target value.

function findPairs(arr, target) {
    let pairsArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairsArr.push([arr[i], arr[j]]);
        }
      }
    }
    
    return pairsArr;
  }
  let pairsArr = [4, 12, 8, 7, 3];
  let target = 30;
  console.log(findUniqueValues(pairsArr));
  


// 5. Write a function that takes an array of integers as input and returns an array of 
// all the unique values in the array.

function findUniqueValues(arr) {
    let uniqueArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    
    return uniqueArr;
  }
  let arr = [9, 4, 3, 6, 5, 4, 7, 9, 4]
  console.log(findUniqueValues(arr))
  

//                   TAKEAWAY KEYS INCLUDE

// 1. Arrow functions are a shorthand way of creating functions

// 2. Callback functions are functions that are passed as arguments to other functions

// 3. Arrow functions are a shorthand way of creating functions
