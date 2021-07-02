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
function solution(A) {
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

solution([70, 3]);
