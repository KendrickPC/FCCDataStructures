function quickSort(array) {
  const arrCopy = array.slice();
  if (arrCopy.length === 0) {
    return [];
  }
  let pivotVal = arrCopy[0];
  let lesser = [];
  let equal = []
  let greater = [];
  for (let num of arrCopy) {
    if (num < pivotVal) lesser.push(num);
    if (num === pivotVal) equal.push(num);
    if (num > pivotVal) greater.push(num);
  }
  
  return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

