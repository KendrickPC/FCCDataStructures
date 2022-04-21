function bubbleSort(array) {
  const arrCopy = array.slice();
  for (let i=0; i<arrCopy.length; i++) {
    for (let j=0; j<arrCopy.length; j++) {
      if (arrCopy[j] > arrCopy[j+1]) {
        swap(j, j+1, arrCopy);
      }
    }
  }
  console.log(array.length);
  console.log(arrCopy.length);
  return arrCopy;
}

function swap(x, y, arr) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));