function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(val) {
    collection.push(val);
  }
  this.pop = function() {
    const poppedVal = collection.pop();
    return poppedVal;
  }
  this.peek = function() {
    return collection[collection.length-1];
  }
  this.isEmpty = function() {
    return collection.length === 0
  }
  this.clear = function() {
    collection = [];
  }
  // Only change code above this line
}