var str="ABCCACC"
var arr=[]
for(let tex of str){
    if(arr.includes(tex)){
        console.log(tex);
        break;
    }
    else{
        arr.push(tex)
    }
}