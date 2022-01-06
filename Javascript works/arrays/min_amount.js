var expenses=[2000,3000,4000,1000,5000];
var min_exp=expenses[0]
for(let amount of expenses){
   if(amount<min_exp){
       min_exp=amount
   }
}
console.log(min_exp);