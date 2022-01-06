//create employee object with prps eid,ename,salary,designation

var employee={
    eid:0001,
    ename:"shyam",
    salary:20000,
    desig:"developer",
    experience:2,

    getEmployee(){
        console.log(this.salary);
    }
}

// employee.getEmployee();

// console.log(employee.desig);


// employee.experience="2years"
// console.log(employee);

// console.log("gender" in employee);

if("experience" in employee){
    employee.experience+=1
}
else{
    employee.experience=1
}
console.log(employee);