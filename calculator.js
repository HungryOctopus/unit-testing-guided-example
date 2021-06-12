function sum(a, b) {
  // If the function is called with a single number, and no second argument is passed, the function should act as if the second argument passed equals 0.
  // If the function is called without any arguments, the function should act as if both arguments passed equal 0.

  if (typeof a === 'number' && b === undefined) {
    return a + 0;
  } else if (a === undefined) {
    return 0;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  return;
}

function divide(a, b) {
  return;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
