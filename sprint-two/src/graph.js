

// Instantiate a new graph
var Graph = function() {
  this._storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._storage[node] = this._storage[node] || { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this._storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeToRemove) {
  if (this.contains(nodeToRemove)) {
    for (let node in this._storage) {
      this.removeEdge(node, nodeToRemove);
    }
    delete this._storage[nodeToRemove];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    return this._storage[fromNode].edges[toNode] !== undefined;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this._storage[fromNode].edges[toNode] = toNode;
    this._storage[toNode].edges[fromNode] = fromNode;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    delete this._storage[fromNode].edges[toNode];
    delete this._storage[toNode].edges[fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this._storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


