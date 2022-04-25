/*

*/

function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line
  const newElements = ['Taco', 'Cat', 'Awesome'];
  for (let el of newElements) {
    set.add(el);
  }
  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

console.log(checkSet());

// Your Set should only contain the values 1, 2, 3, Taco, Cat, Awesome.