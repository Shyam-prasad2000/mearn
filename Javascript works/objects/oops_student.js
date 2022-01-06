class Student{
    constructor(sname,age,gender,course){//instance variable are initialized
        this.sname=sname;
        this.age=age;
        this.gender=gender;
        this.course=course;  
    }
    printDetails(){
            console.log(this.sname,this.age,this.gender,this.course);
    }
}    



var obj=new Student("shyam",21,"male","MEARN")
obj.printDetails()

var obj1=new Student("hsh",21,"male","pyhton")
obj1.printDetails()