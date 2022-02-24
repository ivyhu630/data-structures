class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  pop() {
    if (this.size() > 0) {
      let temp = this.storage[this.size() - 1];
      delete this.storage[this.size() - 1];
      return temp;
    }
  }

  push(value) {
    this.storage[this.size()] = value;
  }

}