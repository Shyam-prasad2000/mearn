var expenses=[2000,3000,4000,1000,5000];
var max_exp=0;
for(let amount of expenses){
    if(amount>max_exp){
        max_exp=amount
    }
}
console.log(max_exp);