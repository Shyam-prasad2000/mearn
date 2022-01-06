var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]  
]

// q1 higest test + ve case district

// var highTesPo=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2);
// console.log(highTesPo);

// q2 district with higest 1 dose vaccination rate
// var highTesPoR=coivd_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5];
// console.log(highTesPoR);
// var disName=coivd_data.filter(dis=>dis[5]==highTesPoR);
// console.log(disName);

// q3 district with lowest death cases
// var lowDeR=coivd_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
// console.log(lowDeR);

// q4 sort district with +ve cases

// var DisSort=coivd_data.sort((d1,d2)=>d1[2]-d2[2])
// console.log(DisSort);


// q5 sort the districts based on 1st dose
// var FirDos=coivd_data.sort((d1,d2)=>d1[5]-d2[5])
// console.log(FirDos);


// q6 is there any states with +ve cases > 60000

// var posCas=coivd_data.some(dis=>dis[2]>60000)
// console.log(posCas);
// q7 print trissur details
// var disName=coivd_data.find(dis=>dis[1]=="thrissur")
// console.log(disName);

// q8 total nu,ber of +ve cases
// var totalCase=coivd_data.reduce((d1,d2)=>d1[2]+d2[2]);
// console.log(totalCase);

// q9 total number of cured cases
var totalCuredCase=coivd_data.map(d=>d[4]).reduce((dis1,dis2)=>dis1+dis2)
console.log(totalCuredCase);

// q10 cured numbers of iduky
// var curedNumber=coivd_data.find(cur=>cur[1]=="iduky")[4]
// console.log(curedNumber);

// q11 total number of death cases
// var death=coivd_data.map(d=>d[3]).reduce((dis1,dis2)=>dis1+dis2);
// console.log(death);
