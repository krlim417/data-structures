var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);
  someInstance._storage = {};
  someInstance._storageSize = 0;
  return someInstance;
};

var queueMethods = {};


