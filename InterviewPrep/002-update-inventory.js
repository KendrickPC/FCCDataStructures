function updateInventory(arr1, arr2) {
  const results = [];
  const hash = {};
  for (let arr of arr1) {
    const [amount, item] = arr;
    hash[item] = amount;
  }
  for (let arr of arr2) {
    const [amount, item] = arr;
    if (hash[item] !== undefined) {
      hash[item] += amount;
    } else {
      hash[item] = amount;
    }
  }
  // for (let key in hash) {
  //   results.push([key, hash[key]]);
  // }
  Object.keys(hash)
    .sort()
    .forEach(function(val) {
      results.push([hash[val], val]);
    });

  return results;
}



// Example inventory lists

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
// console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])) 
// should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].