var num=321;
var result=0;

while (num!=0) {
    let rem=num%10;

    rem=rem**3;

    result=result+rem;
    
    num=Math.floor(num/10);
}
console.log(result);