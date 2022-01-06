var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//names
// for(let data of employees){
    
//     console.log(data[1]);
// }

//developer details

// for(let data of employees){
//     if (data[3]=="developer") {
//         console.log(data);        
//     }
// }

//experience
// var exp=0;
// for(let employee of employees){
//    exp=employee[5]-employee[4];
//    console.log(exp);
// }

//experience >10

// for(let employee of employees){
//     if ((employee[5]-employee[4])>10) {
//         console.log(employee);
//     }
// }

//height salary
// var high=0;
// for(let emp of employees){
//     if (emp[2]>high) {
//         high=emp[2]
//     }
// }console.log(high);

//2nd highest salary

// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);

//min salary

// employees.sort((e1,e2)=>e2[2]-e1[2]);
// console.log(employees[employees.length-1][2]);



//no of employees

// console.log(employees.length);



//details of developer with highest salary
// var developer_details=[];
// for(let emp of employees){
//     if(emp[3]=="developer"){
//         developer_details.push(emp)
//     }
// }
// developer_details.sort((e1,e2)=>e2[2]-e1[2]);
// console.log(developer_details[0][2]);




//details of employees whose name starts with A


// for(let emp of employees){
//     if(emp[1][0]=="A"||emp[1][0]=="a"){
//         console.log(emp);
//     }
// }


//details of students whose working period during 2010-2015

for(let emp of employees){
    if(emp[4]>=2010 && emp[5]<=2015){
        console.log(emp);
    }
}