
var result=0;
for(var num=321;num!=0;num=Math.floor(num/10)){
    let rem=num%10;
    
    result=result+rem**3;
    
    
}
console.log(result);