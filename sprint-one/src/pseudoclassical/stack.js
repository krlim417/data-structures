const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._storageSize = 0;
};
Stack.prototype.push = function(value) {
  this._storage[++this._storageSize] = value;
};
Stack.prototype.size = function() {
  return this._storageSize;
};