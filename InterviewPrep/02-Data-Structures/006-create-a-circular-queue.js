/*
[null, null, null, null, null]
^Read @ 0
^Write @ 0
[a, b, c, null, null]
  ^Read @ 0
          ^Write @ 3
[null, null, null, null, null]
                    ^Read @ 3
                    ^Write @ 3
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
*/
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }
  print() {
    return this.queue;
  }
  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.write += 1;
      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
    // Only change code above this line
  }
  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      const item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read += 1;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
    // Only change code above this line
  }
}

/*
[null, null, null, null, null]
^Read @ 0
^Write @ 0

[a, b, c, null, null]
  ^Read @ 0
          ^Write @ 3

[null, null, null, null, null]
                    ^Read @ 3
                    ^Write @ 3

[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
*/