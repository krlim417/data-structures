const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let storageSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++storageSize] = value;
  };

  someInstance.dequeue = function() {
    const dequeueValue = storage[1];
    for (let key in storage) {
      storage[key] = storage[++key];
    }
    if (storageSize > 0) {
      storageSize--;
    }
    return dequeueValue;
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
