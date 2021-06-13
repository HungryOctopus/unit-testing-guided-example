const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(3, 5);
    expect(result).toBe(15);
  });

  test('should multiply a negative and a positive integer correctly', () => {
    const result = multiply(-5, 7);
    expect(result).toBe(-35);
  });

  test('should return 0 by any number multiplied by 0', () => {
    const result = multiply(157, 0);
    expect(result).toBe(0);
  });
});
