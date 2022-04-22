// if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    // returns an array of values from the dictionary:
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(element) {
    if (this.dictionary[element] === undefined) {
      this.dictionary[element] = element;
      this.length += 1;
      return true;
    } else {
      return false;
    }
  }

  remove(element) {
    if (this.dictionary[element] !== undefined) {
      delete this.dictionary[element];
    }
  }
  
  size() {
    return Object.keys(this.dictionary).length;
  }
  
  union(newSet) {
    const unionSet = new Set();
    for (let val of this.values()) {
      unionSet.add(val);
    }
    for (let el of newSet) {
      unionSet.add(el);
    }
    const results = [];
    for (let el in unionSet.dictionary) {
      results.push(el);
    }
    return results;
  }

}

// if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union
// of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].
const setA = new Set();
setA.add('a');
setA.add('b');
setA.add('c');
const setB = ['a','b','d','e'];
// setA.union(setB);
console.log(setA.union(setB)); // ['a', 'b', 'c', 'd', 'e']


// const setA = new Set();
// const setB = ["c", "d"];