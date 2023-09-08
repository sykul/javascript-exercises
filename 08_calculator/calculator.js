const add = function(a,b) {
  return a+b;	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numberArray) {
	let total = 0;
  numberArray.forEach((number) => total += number);
  return total;
};

const multiply = function(numberArray) {
  let total = 1;
  numberArray.forEach((number) => total *= number);
  return total;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(number) {
	if (number == 0) {
    return 1;
  } else {
    let result = 1;
    while (number > 0) {
      result = number*result;
      number--;
    }
    return result;
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
