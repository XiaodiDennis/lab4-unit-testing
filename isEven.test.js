const isEven = require('./isEven');

// ✅ Basic even number tests
test('returns true for even numbers', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(0)).toBe(true);
  expect(isEven(-2)).toBe(true);
});

// ✅ Basic odd number tests
test('returns false for odd numbers', () => {
  expect(isEven(3)).toBe(false);
  expect(isEven(-5)).toBe(false);
});

// ✅ Corrected edge case tests
test('handles edge numeric cases', () => {
  expect(isEven(Number.MAX_SAFE_INTEGER)).toBe(false); // 9007199254740991 → odd
  expect(isEven(Number.MIN_SAFE_INTEGER)).toBe(false); // -9007199254740991 → also odd
  expect(isEven(0)).toBe(true);
  expect(isEven(-100)).toBe(true);
});

// ✅ Invalid input tests
test('throws error on invalid input', () => {
  expect(() => isEven(null)).toThrow('Invalid input');
  expect(() => isEven(undefined)).toThrow('Invalid input');
  expect(() => isEven('hello')).toThrow('Invalid input');
  expect(() => isEven(NaN)).toThrow('Invalid input');
});
