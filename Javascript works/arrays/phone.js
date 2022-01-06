var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]

// var samsung=mobiles.filter(samsung=>samsung[1]=="samsung")
// console.log(samsung);

//costly mobile

// mobiles.sort((m1,m2)=>m2[3]-m1[3]);
// console.log(mobiles[0]);


//mobiles with snampdragon processor

// for(let mob of mobiles){
//     if(mob[4]=="snapdragon"){
//         console.log(mob);
//     }
// }


//snapdragon process 5g and most costly
// var mob_g=[]
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon" && mob[6]=="5G"){
      
//        mob_g.push(mob) 
//     }
    
// }
// mob_g.sort((m1,m2)=>m2[3]-m1[3]);
// console.log(mob_g[0]);

//is there any mobile bellow 10k

// for(let mob of mobiles){
//    console.log( mob[3]<"10000"?true:false);
//     break;
// }

// //samsung A51 details

// for(let mob of mobiles){
//             if (mob[2]=="samsung A51") {
//                 console.log(mob);
//             }
           
// }

// var mob_name=mobiles.map(mob=>mob[2])
// console.log(mob_name);

//list all mobile prices

// var mob_price=mobiles.map(mob=>mob[3])
// console.log(mob_price);

//all mobiles under 25k

// var mob_price=mobiles.filter(mob_price=>mob_price[3]<25000).map(mob=>[mob[2],mob[3]])
// console.log(mob_price);


//price range between 35k and 25k 
// var mob_price=mobiles.filter(mob_price=>mob_price[3]>=25000 && mob_price[3]<=35000).map(mob=>mob[2])
// console.log(mob_price);


//list all 5G mobiles under 25k

// var mob_g=mobiles.filter(mob_g=>mob_g[6]=="5G" && mob_g[3]<=50000).map(mob=>mob[2])
// console.log(mob_g);



//list all 5G MOBILES

// var mob_g=mobiles.filter(mob_g=>mob_g[6]=="5G").map(mob=>mob[2])
// console.log(mob_g);




//list all samsung mobile names whose band=4g and display type AMOLED


// var samsung=mobiles.filter(samsung=>samsung[1]=="samsung" && samsung[6]=="4g" && samsung[5]=="AMOLED").map(mob=>mob[2])
// console.log(samsung);

//higest cost

// var max_price=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2);
// console.log(max_price);



// //low cost 

// var min_price=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2);
// console.log(min_price);
// var low_mob=mobiles.filter(mob=>mob[3]==min_price);
// console.log(low_mob);


// var mobAvlTen=mobiles.some(mob=>mob[3]==10000)
// console.log(mobAvlTen);

// var isAvl=mobiles.some(mob=>mob[3]>10000 && mob[3]<=25000)
// console.log(isAvl);

//find

var nameById=mobiles.find(mob=>mob[0]==1000)
console.log(nameById);