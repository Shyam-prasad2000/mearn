var num=3;
var low=8,upp=30;
for(i=1;i<=upp;i++){
    let result=i**num;
    if (result>=low && result<=upp){
        console.log(i);
    }
}