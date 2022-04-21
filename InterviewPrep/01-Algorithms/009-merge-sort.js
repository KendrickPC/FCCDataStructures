

const mergeSort = (array) => {
  // base case: 
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle,));
  
  return merge(left, right);
}

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i++])
    } else {
      results.push(arr2[j++]);
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i++]);
  }
  while (j < arr2.length) {
    results.push(arr2[j++])
  }
  return results;
}



console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))