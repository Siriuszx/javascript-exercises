const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numArr) {
  return numArr.reduce((sum, num) => sum + num, 0);
};

const multiply = function (numArr) {
  return numArr.reduce((result, num) => result * num, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (factorial) {
  let temp = 1;

  for(let i = 1; i <= factorial; i++) {
    temp *= i;
  }
  return temp;
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
