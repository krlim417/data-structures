const Queue = function() {
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let storageSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++storageSize] = value;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
