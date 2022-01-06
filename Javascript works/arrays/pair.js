var arr=[2,3,4,5];
var sum=5;
// counter=0;
var flag=0;
for(let i of arr){
    for(let j of arr){
        if(i+j==sum){
            console.log(`(${i},${j})`);
            flag=1;
        }
        
        // counter++
        break
    }
  
}
if(flag==0){
        console.log('no pairs found');
}
// console.log(counter);