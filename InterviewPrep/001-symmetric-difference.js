function sym(...args) {
  return [...new Set(args.reduce(diff))]
}

function diff(arr1, arr2) {
  const unsorted = [
    ...arr1.filter(el => !arr2.includes(el)),
    ...arr2.filter(el => !arr1.includes(el)),
  ]
  console.log(unsorted);
  return unsorted.sort((a, b) => a-b);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
//  should contain only eight elements.

// [7, 4, 6, 2, 5, 9, 8, 1]
