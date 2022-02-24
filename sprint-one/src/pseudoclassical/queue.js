var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;
  this.firstNum = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    let temp = this.storage[this.firstNum];
    delete this.storage[this.firstNum];
    this.firstNum++;
    return temp;
  }
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};



