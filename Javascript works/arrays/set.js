var expenses=[2000,3000,4000,1000,5000,5000];
//remove duplicates
var st=new Set()
for(let amount of expenses){
    st.add(amount)
}
console.log(st);
// var unique=[]
// for (let amount of expenses){
//     if(unique.includes(amount)){

//     }
//     else{
//         unique.push(amount)
//     }
// }
// console.log(unique);