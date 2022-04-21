function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    const index = this.collection.findIndex(el => el[1] > item[1])
    if (index !== -1) {
      this.collection.splice(index, 0, item)
    } else {
      this.collection.push(item);
    }
  }
  this.dequeue = function() {
    const front = this.collection.shift()[0];
    return front;
  }
  this.size = function() {
    return this.collection.length;
  }
  this.front = function() {
    return this.collection[0];
  }
  this.isEmpty = function() {
    return this.collection.length === 0;
  }
  // Only change code above this line
}