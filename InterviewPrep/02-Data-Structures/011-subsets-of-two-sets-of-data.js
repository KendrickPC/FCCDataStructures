class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // Only change code below this line
  isSubsetOf(newSet) {
    for (let key in this.dictionary) {
      if (newSet.has(key) === false) {
        return false;
      }
    }
    return true;
  }
  // Only change code above this line
}

const setA = new Set();
const arr1 = ['a', 'b'];
for (let el of arr1) {
  setA.add(el);
}

const setB = new Set();
const arr2 = ['a', 'b', 'd', 'e'];
for (let el of arr2) {
  setB.add(el);
}


console.log(setA.isSubsetOf(setB));
// console.log(setA);
// console.log(setB);


/*
Perform a subset test on 2 sets of data. We will create a method on our Set data structure called isSubsetOf.
This will compare the first set against the second, and if the first set is fully contained within the second,
it will return true.

For example, if setA = ['a','b'] and setB = ['a','b','c','d'], then setA is a subset of setB, so setA.isSubsetOf(setB) should return true.
*/