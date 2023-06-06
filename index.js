class Bank {
  constructor(balance){
    this.balance = balance
  }

  withdrew(amount){
    if (this.balance - amount <= 0){
      console.log('❌ You cannot withdraw more than what you have!')
      console.log({balance:this.balance})
      return
    }
    this.balance -= amount
    console.log('withdrew' , `$${amount}`)
    console.log({balance:this.balance})
  }

  deposit(amount){
    this.balance += amount
    console.log('deposit' , `${amount}`)
    console.log({balance:this.balance})
  }
}
const saadChecking = new Bank(0)
console.log(saadChecking.balance)
// saadChecking.deposit(1000)
// saadChecking.deposit(1200)
// saadChecking.withdrew(500)
  
const amountInput = document.getElementById('amount')
const depositButton = document.getElementById('creadit-btn') 
const withdrewButton = document.getElementById('deposit-btn')
const balanceDiv = document.getElementById('total-amt')
  
depositButton.onclick = () => {
  const amount = Number (amountInput.value)
  saadChecking.deposit(amount)
  balanceDiv.innerText = `Total-balance: ${saadChecking.balance}`
}

withdrawButton.onClick = () => {
  const amount = Number (amountInput.value)
  saadChecking.withdrew(amount)
  balanceDiv.innerText = `Total-balance: ${saadChecking.balance}`
}