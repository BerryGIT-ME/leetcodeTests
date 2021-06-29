import { StringCapital } from "./classes.js";

// const addLeadingZeros = (num) => {
//   let str = String(num).padStart(3, "0");
//   return parseInt(str);
// };

// console.log(addLeadingZeros(4));

// Given an unordered array of integers and a value sum,
// return true if any two items may be added such that
// they equal the value of sum . Otherwise, return false.

const findsum = (array = [], sum = 0) => {
  let compliments = new Set();
  compliments.add(sum - array[0]);
  for (let i = 1; i < array.length; i++) {
    if (compliments.has(array[i])) {
      // compliment found
      return true;
    }
    // calculate a new compliment and add
    compliments.add(sum - array[i]);
  }
  return false;
};

// remove duplicates
const removeDuplicates = (str = "") => {
  if (str == null) {
    return "";
  }
  let tempStr = new Array(str.length);
  let duplicates = new Set();
  let uniqueIdx = 0;

  for (let i = 0; i < str.length; i++) {
    if (duplicates.has(str[i])) {
      // duplicate found
      continue;
    }
    duplicates.add(str[i]);
    uniqueIdx++;
    tempStr[uniqueIdx] = str[i];
  }
  console.log(duplicates);
  return tempStr.join("");
};

// most repeated char using hash tables
const mostRepeated = (str = "") => {
  if (str == null) {
    return {
      char: "",
      no: 0,
    };
  }
  let repetitions = new Map();
  let count;
  let maxRepeat = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    if (repetitions.has(str[i])) {
      count = repetitions.get(str[i]);
      count++;
      repetitions.set(str[i], count);
      if (count > maxRepeat) {
        maxRepeat = count;
        char = str[i];
      }
      continue;
    }
    repetitions.set(str[i], 1);
  }

  return {
    char: char,
    no: maxRepeat,
  };
};

// capitalize the first letter of every word
const capitalize = (str = "") => {
  let newStr = new Array(str.length);
  let j = 0;
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      //find the next letter and capitalze
      if (!capitalizeNext) {
        // first leading whitespace
        newStr[j] = " ";
        j++;
      }
      capitalizeNext = true;
      continue;
    }
    if (capitalizeNext) {
      if (str[i] === " ") {
        // recurring white space
        continue;
      }
      newStr[j] = str[i].toUpperCase();
      j++;
      capitalizeNext = false;
      continue;
    }
    newStr[j] = str[i];
    j++;
  }
  console.log(newStr.join("").trim());
};

// is palindrome

const isPalindrome = (s = "") => {
  let tempStr = s.replace(/[^a-zA-Z0-9]+/g, "");
  let str = tempStr.toLowerCase();
  let end = str.length - 1;
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    end = str.length - 1 - i;

    console.log(str[i], str[end]);
    if (end < i) return true;
    if (str[i] === str[end]) continue;
    return false;
  }
  return true;
};

// reverse a string in place
const stringReverse = (s = []) => {
  let end = s.length - 1;
  let temp;
  for (let i = 0; i < s.length; i++) {
    if (i >= end) break;
    temp = s[end];
    s[end] = s[i];
    s[i] = temp;
    end--;
  }
};

/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
 * then return 0.
 */

const reverseInt = (x = 0) => {
  let tempArray = x.toString().split("");
  let signed = false;
  // check the first number
  if (tempArray[0] === "-") signed = true;
  if (signed) {
    tempArray.shift();
  }
  stringReverse(tempArray);
  let number = parseInt(tempArray.join(""));
  if (signed) {
    number = -number;
  }
  let roof = Math.pow(2, 31) - 1;
  let floor = -Math.pow(2, 31);
  if (number <= roof && number >= floor) return number;
  return 0;
};

// count primes less than n

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let notprime = new Set();
  let prime = new Set();
  let temp;
  if (n < 2) return 0;
  for (let i = 2; i < n; i++) {
    if (!notprime.has(i)) {
      prime.add(i);
      // remove all multiples of i less than n starting from i^2
      for (let j = i; j < n; j++) {
        temp = j * i;
        if (temp > n) {
          break;
        }
        notprime.add(temp);
      }
    }
  }
  return {
    prime: prime,
    size: prime.size,
  };
};

let { size } = countPrimes(10000000);
console.log(size);
