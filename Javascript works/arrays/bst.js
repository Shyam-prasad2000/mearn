var arr=[2,5,6,8,9,10,12];
arr.sort((n1,n2)=>n1-n2);
var element=12;
var low=0,upp=arr.length-1;
flag=0;
while (low<=upp) {
    var mid=Math.floor((low+upp)/2)
    if(element==arr[mid]){
        flag=1;
        break;
    }   
    else if(element>arr[mid]){
        low=mid+1
    } 
    else if(element<arr[mid]){
        upp=mid-1;
    }
}
if(flag==0){
    console.log("elememt not found");
}
else{
    console.log('element found');
}