// function smartsub(num1,num2){
   
//     if (num1>num2) {
//         return num1-num2
//     }
//     else{
//         return num2-num1
//     }
// }
// var sub=(smartsub(5,10));
// console.log(sub);


var smartsub=(num1,num2)=>{
  return  num1>num2?(num1-num2):(num2-num1);
}
console.log(smartsub(20,100));