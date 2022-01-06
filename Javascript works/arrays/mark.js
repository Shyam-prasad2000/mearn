var arr=[5,6,7,8,3,2]
var newarr=[]
//if num<5 num-1
//if num>5 num+1
//[10,7,8,9,2,1]
for(let mar of arr){
 mar>5?newarr.push(mar+1):newarr.push(mar-1)
    
}
console.log(newarr);