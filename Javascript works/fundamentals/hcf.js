var num1=8;
var num2=12;
var limit=0;
let factor=0;
if(num1>num2){
    limit=num1;
}
else{
    limit=num2;
}
for(i=1;i<=limit;i++){
    if(num1%i==0  && num2%i==0){
        factor=i;
    }
}

console.log(`hcf ${factor}`);








// while(num1!=num2){
//     if(num1>num2){
//         num1-=num2;
//     }
//     else{
//         num2-=num1;
//     }
// }
// console.log(`hcf is ${num1}`);
