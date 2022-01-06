class Parent{
    bike(){
        console.log("passion pro");
    }
}

class Child extends Parent {
    bike(){
        super.bike()//parent objects
        console.log("royal enfield");
        
    }
}

// var ch= new Parent;
var ch= new Child()
ch.bike()