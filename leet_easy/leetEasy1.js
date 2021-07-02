// valid sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
let board = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
var isValidSudoku = function (board) {
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
  };
  const validateRows = (row, val) => {
    if (rowArray[row].has(val)) return false;
    rowArray[row].add(val);
    return true;
  };
  const validateCols = (col, val) => {
    if (colArray[col].has(val)) return false;
    colArray[col].add(val);
    return true;
  };
  const validateSquares = (row, col, val) => {
    let index = computeSquare(row, col);
    if (squareArray[index].has(val)) return false;
    squareArray[index].add(val);
    return true;
  };
  let valid = false;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let val = board[row][col];
      if (val === ".") continue;

      valid = validateRows(row, val);
      if (!valid) return valid;
      valid = validateCols(col, val);
      if (!valid) return valid;
      valid = validateSquares(row, col, val);
      if (!valid) return valid;
    }
  }
  return true;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// code below not complete
var combinationSum = (candidates, target) => {
  // create set for easy reference
  let canditates = new Set(candidates);
  let result = new Array();
  let found = new Set();
  for (let candidate of canditates) {
    let multiples = 0;
    while (candidate * multiples < target) {
      let compliment = target - candidate * multiples;
      if (canditates.has(compliment)) {
        // if (multiples === 1 || multiples === 0) {
        //   if (found.has(compliment)) {
        //     multiples++;
        //     continue;
        //   }
        //   found.add(compliment);
        //   found.add(candidate);
        // }
        let arrayLength = multiples + 1;
        let compliments = new Array(arrayLength);
        compliments[0] = compliment;
        for (let i = 1; i < arrayLength; i++) {
          compliments[i] = candidate;
        }
        result.push(compliments);
      }
      multiples++;
    }
  }
  console.log(found);
  let unique = new Set(result);
  return unique;
};

/**
 * @param {string} s
 * @return {string[]}
 */

var letterCasePermutation = function (s) {
  let count = 0;
  let index = 0;
  for (let char of s) {
    if (!parseInt(char)) {
      count++;
    }
    index++;
  }

  let length = Math.pow(2, count);
  let pemutations = new Array(length);
  let pointPermutations = 0;

  for (let i = 0; i < length; i++) {
    let newS = s.split("");
    let binary = (i >>> 0).toString(2);
    console.log(binary);
    let pointer = binary.length - 1;
    for (let char = newS.length - 1; char >= 0; char--) {
      // check if string
      if (!parseInt(newS[char])) {
        if (binary[pointer--] === "1") {
          // capitalize
          newS[char] = newS[char].toUpperCase();
        } else {
          newS[char] = newS[char].toLowerCase();
        }
      }
    }
    pemutations[pointPermutations++] = newS.join("");
  }
  return pemutations;
};

console.log(letterCasePermutation("a1b2"));
