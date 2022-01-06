//find common elements from
var arr1=[1,101,232,21]
var arr2=[11,12,20,21]
var p1=0,p2=0;
var count=0;
while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log("common elements",arr1[p1]);
        p1++;
        p2++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++
     }
     
    count++
}
console.log(count);




// for(let i of arr1){
//     for(let j of arr2){
//         if(i==j){
//             console.log(i);
//             flag++
//         }   
//     }
// }
// if(flag==0){
//     console.log('no common elements found');
// }



