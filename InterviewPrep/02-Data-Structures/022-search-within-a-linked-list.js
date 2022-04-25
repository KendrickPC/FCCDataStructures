function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.isEmpty = function() {
    return length === 0;
  }
  this.indexOf = function(element) {
    let current = head;
    let idx = 0;
    while (current !== null) {
      if (current.element === element) {
        return idx;
      }
      current = current.next;
      idx += 1;
    }
    return -1;
  }
  this.elementAt = function(index) {
    let current = head;
    let idx = 0;
    while (current !== null) {
      if (index === idx) return current.element;
      current = current.next;
      idx += 1;
    }
  }
  // Only change code above this line
}