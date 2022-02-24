var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let size = someInstance.size();
    storage[size + 1] = value;
  };

  someInstance.pop = function() {
    let size = someInstance.size();
    if (size > 0) {
      let temp = storage[size];
      delete storage[size];
      return temp;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

