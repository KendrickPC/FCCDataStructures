// 004-pairwise.js

function pairwise(arr, arg) {
  let sum = 0;
  const arrCopy = arr.slice();
  for (let i=0; i<arrCopy.length; i++) {
    for (let j=1; j<arrCopy.length; j++) {
      if (i === j) break;
      if (arrCopy[i] + arrCopy[j] === arg) {
        sum += i;
        sum += j;
        delete arrCopy[i];
        delete arrCopy[j];
      }
    }
  }
  return sum;
}



console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([1, 3, 2, 4], 4)); // should return 1.
console.log(pairwise([1, 1, 1], 2)) // should return 1.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)) // should return 10.
console.log(pairwise([], 100)) // should return 0.



