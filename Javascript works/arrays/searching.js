var arr=[10,11,12,15,16,7,7];
var num=7;
var flag=0;

for (let i of arr){
    if(num==i){
        console.log("number found");
        flag++
        break;
    }

}if(flag==0)
console.log("number not found");

/*
 for(let i of arr){
     if(num==i){
         flag=1;
         break;
     }
 }
 if(flag==0){
     console.log("element not found")
 }
 else{
     console.log("element found")
 }

 */

//  arr[2,4,6]

//  arr1[10,8,6]