function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) return [];
  const output = [startNum];
  return output.concat(rangeOfNumbers(startNum+1, endNum))

};

console.log(rangeOfNumbers(6, 9)) // should return [6, 7, 8, 9].