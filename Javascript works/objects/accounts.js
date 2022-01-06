var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]


  //total number of accounts
//   console.log(accounts.length);



//all account details whose account type is savings
// accounts.filter(type=>type.ac_type=="savings").forEach(element => console.log(element.acno));
// accounts.filter(type=>type.ac_type=="savings").map(acc=>acc.acno).forEach(element => console.log(element));




//print balance of acno=1000

// var accBal=accounts.find(acc=>acc.acno=1000).balance
// console.log(accBal);




//print all gpay transactions
// var trans=accounts.map(data=>data.transactions).flat().filter(trns=>trns.method=="g-pay").forEach(t=>console.log(t))





//print credit transactions of accno=1002



// accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002).forEach(t=>console.log(t))

//print highest balance accout

// var maxBal=accounts.flat().sort((t1,t2)=>t2.balance-t1.balance)[0]
// console.log(maxBal);


// print transaction history of 1002
var crd=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
var deb=accounts.find(acc=>acc.acno=1002).transactions
var tran={"Debittransactiions":deb,"CreditTransaction":crd}
console.log(tran);