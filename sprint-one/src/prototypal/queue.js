var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.firstIndex = 0;
  newQueue.key = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    let temp = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    return temp;
  }
};

