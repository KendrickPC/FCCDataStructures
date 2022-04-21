this.enqueue = function(item) {
  const index = this.collection.findIndex(el => el[1] > item[1]);
  if (index !== -1) {
    this.collection.splice(index, 0, item);
  } else {
    this.collection.push(item);
  }
}