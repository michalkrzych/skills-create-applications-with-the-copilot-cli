/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition: sum two numbers (e.g. node src/calculator.js add 5 3)
 *   subtract   - Subtraction: subtract one number from another (e.g. node src/calculator.js subtract 5 3)
 *   multiply   - Multiplication: multiply two numbers (e.g. node src/calculator.js multiply 5 3)
 *   divide     - Division: divide one number by another (e.g. node src/calculator.js divide 5 3)
 *   modulo     - Modulo: remainder of a divided by b (e.g. node src/calculator.js modulo 10 3)
 *   power      - Exponentiation: base raised to exponent (e.g. node src/calculator.js power 2 8)
 *   squareRoot - Square root: square root of n (e.g. node src/calculator.js squareRoot 144)
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> [num2]
 */

/**
 * Addition: returns the sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction: returns the difference of a minus b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication: returns the product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division: returns the quotient of a divided by b.
 * Throws an error if b is zero.
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

/**
 * Modulo: returns the remainder of a divided by b.
 * Throws an error if b is zero.
 */
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

/**
 * Exponentiation: returns base raised to the power of exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root: returns the square root of n.
 * Throws an error if n is negative.
 */
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

// CLI entry point
if (require.main === module) {
  const [,, operation, arg1, arg2] = process.argv;
  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  const needsTwoArgs = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power'].includes(operation);
  if (!operation || isNaN(a) || (needsTwoArgs && isNaN(b))) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]');
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':        result = add(a, b); break;
      case 'subtract':   result = subtract(a, b); break;
      case 'multiply':   result = multiply(a, b); break;
      case 'divide':     result = divide(a, b); break;
      case 'modulo':     result = modulo(a, b); break;
      case 'power':      result = power(a, b); break;
      case 'squareRoot': result = squareRoot(a); break;
      default:
        console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
