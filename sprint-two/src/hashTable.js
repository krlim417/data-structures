const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index) || [];
  for (let i = 0; i < bucket.length; i++) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


