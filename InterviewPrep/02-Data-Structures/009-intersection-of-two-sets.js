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
  // Only change code below this line
  intersection(newSet) {
    const results = [];
    const placeHolder = []
    for (let key in this.dictionary) {
      placeHolder.push(key);
    }
    
    // return placeHolder.includes('a');
    for (let el in newSet.dictionary) {
      if (placeHolder.includes(el) === true) {
        results.push(el);
      }
    }
    return results;
  }
  // Only change code above this line
}

// Create a method on our Set data structure called intersection. An intersection of sets represents all values that are common to two or more sets. This method should take another Set as an argument and return the intersection of the two sets.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].

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
console.log(setB);

console.log(setA.intersection(setB));
// console.log(setA.values());