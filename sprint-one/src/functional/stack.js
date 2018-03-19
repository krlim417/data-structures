const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let storageSize = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    storage[++storageSize] = value;
  };

  someInstance.pop = function() {
    const popValue = storage[storageSize];
    delete storage[storageSize];
    if (storageSize > 0) {
      storageSize--;
    }
    return popValue;
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
