class BankAccount {
    constructor(balance = 0) {
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (this.balance < amount) {
        throw new Error('Insufficient funds');
      }
      this.balance -= amount;
    }
  
    transfer(amount, targetAccount) {
      this.withdraw(amount);
      targetAccount.deposit(amount);
    }
  }
  
  module.exports = BankAccount;
  