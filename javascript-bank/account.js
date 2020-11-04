/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || (typeof amount !== 'number') || isNaN(amount)) {
    return false;
  }

  var aTransaction = new Transaction('deposit', amount);
  this.transactions.push(aTransaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || (typeof amount !== 'number') || isNaN(amount)) {
    return false;
  }

  var aTransaction = new Transaction('withdraw', amount);
  this.transactions.push(aTransaction);
  return true;
};

Account.prototype.getBalance = function () {
  var currentBalance = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      currentBalance += this.transactions[i].amount;
    } else {
      currentBalance -= this.transactions[i].amount;
    }
  }

  return currentBalance;
};
