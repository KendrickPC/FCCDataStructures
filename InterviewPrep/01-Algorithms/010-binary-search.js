function binarySearch(searchList, value) {
  let arrayPath = [];
  let left = 0;
  let right = searchList.length-1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (value === searchList[middle]) {
      arrayPath.push(searchList[middle]);
      return arrayPath;
    }
    if (value < searchList[middle]) {
      right = middle-1;
      arrayPath.push(searchList[middle]);
    } else {
      left = middle+1;
      arrayPath.push(searchList[middle]);
      
    }
  }
  return "Value Not Found";
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

console.log(binarySearch(testArray, 70))
//  should return [13, 19, 22, 49, 70]