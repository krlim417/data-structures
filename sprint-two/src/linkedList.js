const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    let formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };

  list.contains = function(target) {
  };

  return list;
};

const Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
