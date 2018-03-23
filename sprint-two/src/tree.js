const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _(newTree).extend(treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  const newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
