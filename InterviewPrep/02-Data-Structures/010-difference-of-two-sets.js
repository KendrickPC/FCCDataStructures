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
  // This is our union method 
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method
  intersection(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      if (set.values().includes(value))
          newSet.add(value);
    })

    return newSet;
  }
  // Only change code below this line
  difference(newSet) {
    const diffSet = new Set();
    const placeHolder = [];
    for (let key in newSet.dictionary) {
      placeHolder.push(key);
    }
    for (let key in this.dictionary) {
      if (!(placeHolder.includes(key))) {
        diffSet.add(key);
      }
    }
    return diffSet;
  }
  // Only change code above this line
}


// Create a method on our Set data structure called difference.
// A difference of sets should compare two sets and return the items present
// in the first set that are absent in the second.
// This method should take another Set as an argument and return the difference of the two sets.

const setA = new Set();
const arr1 = ['a', 'b', 'c'];
for (let el of arr1) {
  setA.add(el);
}

const setB = new Set();
const arr2 = ['a', 'b', 'd', 'e'];
for (let el of arr2) {
  setB.add(el);
}


console.log(setA.difference(setB));
// console.log(setA.values());