export function findeMissingPair(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let unpaired = new Set();
  for (let element of A) {
    if (unpaired.has(element)) unpaired.delete(element);
    else unpaired.add(element);
  }

  let output;
  for (let element of unpaired) {
    output = element;
  }

  return output;
}
// how many jumps to a value
export function jumps(X, Y, D) {
  let jumps = Math.ceil((Y - X) / D);
  console.log(jumps);
}

// find missing interger in an array
function missing(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // sort the array
  let l = A.length;
  if (l === 0) return 1;

  let sorted = A.sort((a, b) => {
    return a - b;
  });
  let end;
  let output = 1;

  for (let i = 0; i < A.length; i++) {
    if (sorted[i] !== i + 1) {
      return i + 1;
    }
    output++;
  }
  return output;
}

// tape
function findMininumDiff(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let fromStart = new Array(A.length - 1);
  let fromEnd = new Array(A.length - 1);

  let startSum = A[0];
  for (let i = 0; i < fromStart.length; i++) {
    fromStart[i] = startSum;
    startSum = startSum + A[i + 1];
  }

  let endSum = A[A.length - 1];
  for (let i = fromEnd.length - 1; i >= 0; i--) {
    fromEnd[i] = endSum;
    endSum = endSum + A[i];
  }
  console.log(fromStart, fromEnd);
}

function frogRiverOne(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let position = new Set();

  for (let i = A[0]; i < X + 1; i++) {
    position.add(i);
  }

  let output;
  for (let i = 1; i < A.length; i++) {
    position.delete(A[i]);
    if (position.size === 0) {
      output = i;
      break;
    }
  }
  if (output || output === 0) return output;
  return -1;
}

// max counters
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function findMax(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counters = new Array(N).fill(0);
  let countresUpdate = new Array(N).fill(false);
  let update = false;

  let max = 0;
  const incrementCounter = (index) => {
    temp = counters[index] + 1;
    counters[index] = temp;
    if (temp > max) max = temp;
  };

  const maxCounter = () => {
    for (let i = 0; i < N; i++) {
      counters[i] = max;
    }
  };

  for (element of A) {
    if (element <= N) {
      incrementCounter(element - 1);
    } else {
      update = true;
      //maxCounter();
    }
  }

  return counters;
}

// missing integers

function missing(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // write your code in JavaScript (Node.js 8.9.4)
  let unique = new Set(A);
  let smallest = 1;

  for (let i = 0; i < unique.size; i++) {
    if (unique.has(smallest)) {
      smallest++;
    } else {
      return smallest;
    }
  }

  return smallest;
}
