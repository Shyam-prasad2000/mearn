var num=123;
var reverse="";
for(let i=num;i!=0;i=Math.floor(i/10)){
    let rem=i%10;
    reverse=reverse*10+rem;
    
}
console.log(reverse);