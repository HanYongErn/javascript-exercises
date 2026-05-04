const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current, 1);
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  } else {
    let ans = 1;
    for (let i = a; i > 0; i--) {
      ans *= i
    }
    console.log(ans);
    return ans;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
