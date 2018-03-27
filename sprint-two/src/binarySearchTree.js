var BinarySearchTree = function(value) {
  const binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null; 
  binaryTree.right = null;
  return binaryTree;
};

const binaryTreePrototype = {};

binaryTreePrototype.insert = function(value) {
};

binaryTreePrototype.contains = function(value) {
};

binaryTreePrototype.depthFirstLog = function(callback) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
