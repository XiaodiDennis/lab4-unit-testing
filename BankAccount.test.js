const BankAccount = require('./BankAccount');

// Test deposit
test('deposit increases balance', () => {
  const account = new BankAccount();
  account.deposit(100);
  expect(account.balance).toBe(100);
});

// Test withdraw
test('withdraw decreases balance', () => {
  const account = new BankAccount(200);
  account.withdraw(50);
  expect(account.balance).toBe(150);
});

// Test withdraw error
test('withdraw throws error when insufficient funds', () => {
  const account = new BankAccount(30);
  expect(() => account.withdraw(100)).toThrow('Insufficient funds');
});

// ✅ New test: transfer
test('transfer moves funds between accounts', () => {
  const alice = new BankAccount(300);
  const bob = new BankAccount(100);

  alice.transfer(150, bob);

  expect(alice.balance).toBe(150);
  expect(bob.balance).toBe(250);
});
