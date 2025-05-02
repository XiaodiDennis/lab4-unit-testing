function isEven(number) {
    if (typeof number !== 'number' || !Number.isFinite(number)) {
      throw new Error('Invalid input: number expected');
    }
    return number % 2 === 0;
  }
  
  module.exports = isEven;
  