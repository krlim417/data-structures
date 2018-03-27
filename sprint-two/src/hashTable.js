const HashTable = function() {
  this._limit = 8;
  this._size = 0;
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
  this._size++;
  if (this._size >= this._limit * .75) {
    this._resize(this._limit * 2);
  }
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
  this._size--;
  if (this._size < this._limit * .25) {
    this._resize(this._limit / 2);
  }
};

HashTable.prototype._resize = function(newLimit) {
  if (newLimit >= 8 && newLimit !== this._limit) {
    const oldStorage = this._storage;
    this._limit = newLimit;
    this._size = 0;
    this._storage = LimitedArray(this._limit);
    oldStorage.each(function(bucket) {
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          const tuple = bucket[i];
          this.insert(tuple[0], tuple[1]);
        }
      }
    }.bind(this));
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert (insertion): O(1), constant
 * retrieve (search): O(1), constant
 * remove (deletion): O(1), constant
 */


