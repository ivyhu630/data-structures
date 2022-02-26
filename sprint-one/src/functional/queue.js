var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = 0;
  var start = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[start++] = value;
  };

  someInstance.dequeue = function() {
    let size = someInstance.size();
    if (size) {
      let temp = storage[end];
      delete storage[end];
      end ++;
      return temp;
    }
  };

  someInstance.size = function() {
    return start - end;
  };

  return someInstance;
};
