/**
 * Unit tests for calculator.js
 *
 * Covers the following calculator operations:
 *   - Addition
 *   - Subtraction
 *   - Multiplication
 *   - Division (including division-by-zero edge case)
 *   - Modulo
 *   - Power
 *   - Square root
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
describe('add', () => {
  test('2 + 3 = 5 (image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adds zero to a number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimals', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// --- Subtraction ---
describe('subtract', () => {
  test('10 - 4 = 6 (image example)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts a larger number from a smaller one', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts two equal numbers to get zero', () => {
    expect(subtract(4, 4)).toBe(0);
  });

  test('subtracts decimals', () => {
    expect(subtract(5.5, 2.5)).toBeCloseTo(3.0);
  });
});

// --- Multiplication ---
describe('multiply', () => {
  test('45 * 2 = 90 (image example)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies by zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one', () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test('multiplies two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  test('multiplies decimals', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// --- Division ---
describe('divide', () => {
  test('20 / 5 = 4 (image example)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number', () => {
    expect(divide(-12, 3)).toBe(-4);
  });

  test('divides by one', () => {
    expect(divide(15, 1)).toBe(15);
  });

  test('divides zero by a number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// --- Modulo ---
describe('modulo', () => {
  test('5 % 2 = 1 (image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('modulo with a larger divisor', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo of zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  // Edge case: modulo by zero
  test('throws an error when divisor is zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });
});

// --- Power ---
describe('power', () => {
  test('2 ^ 3 = 8 (image example)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of 0', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of 1', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative base to an even exponent', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('raises a decimal base', () => {
    expect(power(0.5, 2)).toBeCloseTo(0.25);
  });
});

// --- Square Root ---
describe('squareRoot', () => {
  test('√16 = 4 (image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 is 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a perfect square', () => {
    expect(squareRoot(144)).toBe(12);
  });

  test('square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test('square root of a decimal', () => {
    expect(squareRoot(0.25)).toBeCloseTo(0.5);
  });

  // Edge case: square root of a negative number
  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });

  test('throws an error for large negative numbers', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });
});
