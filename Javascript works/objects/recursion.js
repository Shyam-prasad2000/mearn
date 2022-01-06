var text="ABAAC"
// var rec={}
// for(let word of text){
//     if(word in rec){
//         rec[word]+=1;
//         console.log("first recursive charater",word);
//         break;
//     }
//     else{
//         rec[word]=1;
//     }
   
// }
var wc={}
var op=[]
text.split("").map(char=>char in wc?op.push(char):wc[char]=1)  //Array.from(text).map(char=>char in wc?op.push(char):wc[char]=1)
console.log(op[0]);