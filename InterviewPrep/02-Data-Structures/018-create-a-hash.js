var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, val) => {
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = val;
  }
  this.lookup = (key) => {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  }
  this.remove = (key) => {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (!!Object.keys(this.collection[hashedKey])) {
      delete this.collection[hashedKey];
    }

  }
  // Only change code above this line
};

const newHash = new HashTable();
newHash.add('GSW', 49)
newHash.add('GSW', 33)
newHash.add('NYK', 33)
newHash.add('NYK', 27)
console.log(newHash.lookup('GSW'));