// let person = prompt('❌ You cannot withdraw more than what you have!');

class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  withdrew(amount) {
    if (this.balance - amount <= 0) {
      messageDiv.innerText = `('❌ You cannot withdraw less 100 than what you have!')`;
      console.log('❌ You cannot withdraw more than what you have!');
      console.log({ balance: this.balance });
      return;
    }
    this.balance -= amount;
    console.log('withdrew', `$${amount}`);
    console.log({ balance: this.balance });
  }

  deposit(amount) {
    this.balance += amount;
    console.log('deposit', `${amount}`);
    console.log({ balance: this.balance });
  }
}

const saadChecking = new Bank(0);
console.log(saadChecking.balance);


const amountInput = document.getElementById('amount');
const depositButton = document.getElementById('deposit-btn');
const withdrewButton = document.getElementById('credit-btn'); // Corrected typo in button id
const balanceDiv = document.getElementById('total-amt');
const messageDiv = document.getElementById('message-amt')

withdrewButton.onclick = () => {
  const amount = Number(amountInput.value);
  saadChecking.withdrew(amount);
  balanceDiv.innerHTML = `Total amount $${saadChecking.balance}`;
};

depositButton.onclick = () => {
  const amount = Number(amountInput.value);
  saadChecking.deposit(amount);
  balanceDiv.innerHTML = `Total amount $${saadChecking.balance}`;
};

