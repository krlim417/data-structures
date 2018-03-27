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
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
};

binaryTreePrototype.depthFirstLog = function(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
