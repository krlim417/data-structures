const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._storageSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[++this._storageSize] = value;
};
Queue.prototype.dequeue = function() {
  const dequeueValue = this._storage[1];
  for (let key in this._storage) {
    this._storage[key] = this._storage[++key];
  }
  if (this._storageSize > 0) {
    this._storageSize--;
  }
  return dequeueValue;
};
Queue.prototype.size = function() {
  return this._storageSize;
};
