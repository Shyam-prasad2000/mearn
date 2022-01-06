var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transactions:[{creditTransaction:[]},{debitTransaction:[]}]},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transactions:[{creditTransaction:[]},{debitTransaction:[]}]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transactions:[{creditTransaction:[]},{debitTransaction:[]}]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transactions:[{creditTransaction:[]},{debitTransaction:[]}]},

}
//print details of user 1000
// console.log(users[1000])

//print the persion name of user 1003
// console.log(users[1003].personName)

 //1005 exist or not
// console.log("1005" in users)


function autenticate(ac_num,password){
    if(ac_num in users){
        let pwd=users[ac_num].password;
        if(pwd==password){
            // console.log("access granded");
            return 1

        }else{
            // console.log("access denade");
            return -1
        }

    }
    else{
        // console.log("invalid");
        return 0;
    }
}




function balanceEnquirey(accno){
    if(validateAccno(accno)){
        return(users[accno].balance);
    }
    else{
        console.log("invalid account number");
    }
}
// console.log(balanceEnquirey(1001));
// balanceEnquirey(1002)


function validateAccno(acno){
    return acno in users?true:false;
}

function fundTransfer(frAcNo,toAcNo,amount){
    if(validateAccno(frAcNo) && validateAccno(toAcNo)){
        let bal=users[frAcNo].balance
        if(amount>bal){
            console.log("insufficient balance");
        }
        else{
            
            users[frAcNo].balance-=amount;
            let frm_bal=balanceEnquirey(frAcNo)
            console.log(`your account ${frAcNo} has been debited with ${amount} and your balance is ${frm_bal}`);
            users[toAcNo].balance+=amount;
            let to_bal=balanceEnquirey(toAcNo)
            console.log(`your account ${toAcNo} has been creadited with ${amount} and your balance is ${to_bal}`);
            console.log("fund has been transfere");  
            let crTrans={from:frAcNo,amount:amount,balance:frm_bal}
            let dbTrans={to:toAcNo,amount:amount,balance:to_bal}
            users[frAcNo].transactions[1].debitTransaction.push(crTrans);
            users[toAcNo].transactions[0].creditTransaction.push(dbTrans);
            console.log(users[frAcNo].transactions[1]);
            console.log(users[toAcNo].transactions[0]);
        }
    }
    else{
        console.log("invalid account");
    }
}
fundTransfer(1002,1000,100)

// console.log(autenticate(2000,"user"));
