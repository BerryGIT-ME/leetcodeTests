// two sums
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export var twoSum = function (nums, target) {
  let compliments = new Map();
  let firstIndex, lastIndex;
  for (let i = 0; i < nums.length; i++) {
    if (!compliments.has(nums[i])) {
      //calculate the compliment
      let compliment = target - nums[i];
      compliments.set(compliment, i);
    } else {
      firstIndex = compliments.get(nums[i]);
      lastIndex = i;
      break;
    }
  }
  return [firstIndex, lastIndex];
};

//is integer palindrome

/**
 * @param {number} x
 * @return {boolean}
 */
export var isPalindrome = function (x) {
  let str = x.toString();
  let end = str.length;
  for (let i = 0; i < str.length; i++) {
    end--;
    if (str[i] !== str[end]) {
      return false;
    }
  }
  return true;
};

// roman numerals to number

/**
 * @param {string} s
 * @return {number}
 */
export var romanToInt = function (s) {
  roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let str = s.toUpperCase();
  let sum = 0;
  let temp;
  for (let i = 0; i < str.length; i++) {
    temp = roman[str[i]];
    if (roman[str[i]] < roman[str[i + 1]]) temp = -temp;
    sum = sum + temp;
  }
  return sum;
};

/// longest common prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
export var longestCommonPrefix = function (strs) {
  let prefix = new Array(strs[0].length);
  let charIndex = 0;
  let temp;
  while (charIndex < strs[0].length) {
    temp = strs[0][charIndex];
    console.log(temp);
    for (let string of strs) {
      if (temp !== string[charIndex]) {
        temp = null;
        break;
      }
    }
    if (temp === null) break;
    else prefix.push(temp);
    charIndex++;
  }
  return prefix.join("");
};

// is valid perenthesis

/**
 * @param {string} s
 * @return {boolean}
 * implement a stack to solve this
 */
export let isValid = function (s) {
  let openPeren = new Array(Math.ceil(s.length / 2));
  let top = 0;

  const topOfStack = (char) => {
    return openPeren[top - 1] === char;
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      openPeren[top] = char;
      top++;
    } else if (char === ")" && topOfStack("(")) top--;
    else if (char === "}" && topOfStack("{")) top--;
    else if (char === "]" && topOfStack("[")) top--;
    else return false;
  }
  console.log(top);
  return top === 0;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export class ListNode {
  constructor() {
    this.val = 0;
    this.next = null;
  }
}

export var mergeTwoLists = function (l1, l2) {
  let l3 = new ListNode();
  let head = l3;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      l3.next = l1;
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }
    l3 = l3.next;
  }
  if (l1 == null) {
    l3.next = l2;
  } else {
    l3.next = l1;
  }
  return head.next;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export var searchInsert = function (nums, target) {
  // function splitSection(upper, lower) {
  //   if (lower == upper) return upper;
  //   let middle = lower + Math.floor((upper - lower) / 2);

  //   if (nums[middle] > target) {
  //     // split the lower section with new limit
  //     return splitSection(middle, lower);
  //   }
  //   if (nums[middle] < target) {
  //     // split the upper section
  //     return splitSection(upper, middle + 1);
  //   }
  //   idx = middle;
  //   return;
  // }
  let index = nums.indexOf(target);
  if (index !== -1) return index;
  let upper = nums.length - 1;
  let lower = 0;
  let middle = lower + Math.floor((upper - lower) / 2);
  while (lower <= middle && upper >= middle) {
    middle = lower + Math.floor((upper - lower) / 2);

    if (nums[middle] < target) {
      // go high
      lower = middle + 1;
      if (lower === upper) {
        if (nums[upper] === target) return upper;
        else return upper + 1;
      }
    } else {
      // go low
      upper = middle;
      if (lower === upper) {
        if (nums[lower] === target) return lower;
        else return 0;
      }
    }
    if (nums[middle] === target) return middle;
  }
};

// valid soduku
/**
 * @param {character[][]} board
 * @return {boolean}
 */
export var isValidSudoku = function (board) {
  let rowArray = new Array(9);
  let colArray = new Array(9);
  let squareArray = new Array(9);

  for (let i = 0; i < 9; i++) {
    rowArray[i] = new Set();
    colArray[i] = new Set();
    squareArray[i] = new Set();
  }
  const computeSquare = (row, col) => {
    if (row < 3) {
      if (col < 3) return 0;
      else if (col < 6) return 1;
      else if (col < 9) return 2;
    } else if (row < 6) {
      if (col < 3) return 3;
      else if (col < 6) return 4;
      else if (col < 9) return 5;
    } else if (row < 9) {
      if (col < 3) return 6;
      else if (col < 6) return 7;
      else if (col < 9) return 8;
    }
    return int;
  };
  const validateRows = (row, col) => {
    if (rowArray[row].has(board[row][col])) return false;
    rowArray[row].add(board[row][col]);
  };
  const validateCols = (row, col) => {
    if (colArray[col].has(board[row][col])) return false;
    colArray[col].add(board[row][col]);
  };
  const validateSquares = (row, col) => {
    let index = computeSquare(row, col);
    console.log(index);
    if (squareArray[index].has(board[row][col])) return false;
    squareArray[index].add(board[row][col]);
  };

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === "") continue;
      validateRows(row, col);
      validateCols(row, col);
      validateSquares(row, col);
    }
  }
  return true;
};
