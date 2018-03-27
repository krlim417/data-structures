var BinarySearchTree = function(value) {
  const binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null; 
  binaryTree.right = null;
  return binaryTree;
};

const binaryTreePrototype = {};

binaryTreePrototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreePrototype.contains = function(value) {
};

binaryTreePrototype.depthFirstLog = function(callback) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
