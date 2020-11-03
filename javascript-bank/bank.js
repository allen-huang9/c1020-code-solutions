/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || (typeof balance !== 'number')) {
    return null;
  }

  var newBankAccount = new Account(this.nextAccountNumber, holder);
  newBankAccount.deposit(balance);
  this.accounts.push(newBankAccount);
  return this.nextAccountNumber++;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }

  return null;
};

Bank.prototype.getTotalAssets = function () {

  if (this.accounts.length === 0) return 0;

  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    grandTotal += this.accounts[i].getBalance();
  }

  return grandTotal;
};
