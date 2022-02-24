class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
    this.firstNum = 0;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  dequeue() {
    if (this.size() > 0) {
      let temp = this.storage[this.firstNum];
      delete this.storage[this.firstNum];
      this.firstNum++;
      return temp;
    }
  }

  enqueue(value) {
    this.storage[this.key] = value;
    this.key++;
  }

}
