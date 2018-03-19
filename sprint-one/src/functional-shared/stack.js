const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  _(someInstance).extend(stackMethods);
  someInstance._storage = {};
  someInstance._storageSize = 0;
  return someInstance;
};

const stackMethods = {};
stackMethods.push = function(value) {
  this._storage[++this._storageSize] = value;
};
stackMethods.pop = function() {
  const popValue = this._storage[this._storageSize];
  delete this._storage[this._storageSize];
  if (this._storageSize > 0) {
    this._storageSize--;
  }
  return popValue;
};
stackMethods.size = function() {
  return this._storageSize;
};


