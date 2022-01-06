var arr=[2,3,4,5];
var element=5;
var upp=arr.length-1,low=0;
flag=0
while(low<upp){
    let cur_sum=arr[low]+arr[upp]
    if(element==cur_sum){
        console.log(`pair (${arr[low]},${arr[upp]})`);
        flag++
        break;
    }
    else if(cur_sum<element){
        low+=1;

    }
    else if(cur_sum>element){
        upp-=1;
    }
    
}
if(flag==0){
    console.log("element not found");
}