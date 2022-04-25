var Map = function() {
  this.collection = {};
  // Only change code below this line
  this.has = (key) => {
    return this.collection[key] === undefined ? false : true;
  };
  this.add = (key, value) => {
    // Note, this can also be used to update a value
    if (this.collection[key] === undefined) {
      this.collection[key] = value;
    } else {
      this.collection[key] += value;
    }
  };
  this.remove = (key) => {
    if (this.collection[key] !== undefined) {
      delete this.collection[key];
    }
  };
  this.get = (key) => { 
    if (this.collection[key] !== undefined) {
      return this.collection[key];
    }
  };
  this.values = () => {  
    return Object.values(this.collection)
  };
  this.size = () => {
    // Can also use .entries in place of .keys:
    return Object.keys(this.collection).length;
  };
  this.clear = () => {
    this.collection = {};
  };
  // Only change code above this line
};

// const test = new Map();
// test.add('Kobe', 8);
// test.add('Kobe', 24);
// console.log(test.size());