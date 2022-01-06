class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
  session={}

  validateAccountNumber(acno){
      return acno in this.accounts?true:false

  }
  authenticate(acno,password){
    if(this.validateAccountNumber(acno)){
        let pwd=this.accounts[acno].password
        if(password==pwd){
            console.log("access granted");
            this.session["user"]=acno
        }
        else{
            console.log("invalid password");
        }
    }
  }
  getBalance(acno){
    // if(this.validateAccountNumber(acno)){
    //     let bal=this.accounts[acno].balance
    //     console.log(bal);
    // }
    // else{
    //     console.log("invalid account number");
    // }
    return this.accounts[acno].balance
  }
  balanceEnquiry(){
      if("user" in this.session){
          let loggedUser=this.session["user"]
          console.log(this.getBalance(loggedUser));
      }
      else{
          console.log("Invalid session u must login");
      }
  }
  loginRequired(){
      return "user" in this.session?true:false
  }

  loggedUser(){
      if(this.loginRequired()){
          return this.session["user"]
      }
  }
  fundTransfer(to_acno,amount){
    if("user" in this.session){
        let loggedUser=this.session["user"]
        if(this.validateAccountNumber(to_acno)){
            let curBal=this.accounts[loggedUser].balance
            if(amount>curBal){
                console.log("insufficient balance");
            }
            else{
                
                console.log("transaction completed");
            }
        }
        else{
            console.log("invalid To accountnumber");
        }

    }
    else{
        console.log("invalid section you nust login");
    }
  }
  getDebitTransactions(){
      let user=this.loggedUser()
    this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t))
    
    
  }
  getCreditTransaction(){
      let user=this.loggedUser()
      this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t))
      

  }
  getTransactionHistory(){
        let user=this.loggedUser()
        console.log(this.accounts[user].transactions);

  }
}

var bank=new Bank()
// console.log(bank.validateAccountNumber(1000));
bank.authenticate(1000,'userone')
bank.balanceEnquiry()
bank.fundTransfer(1001,2000)

