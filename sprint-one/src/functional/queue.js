var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var frontnum = 0;
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    let size = someInstance.size();
    if (size > 0) {
      let temp = storage[frontnum];
      delete storage[frontnum];
      frontnum ++;
      return temp;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
