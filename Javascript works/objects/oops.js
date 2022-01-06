var balano={
    color:["red","blue","black","red"],
    varients:["petrol"],
    price:"8lakhs",
    manufactur:"nexa",
    getPrice(){
        return this.price
    }
}

var glanza={
    manufactur:"toyota",
    price:"9lakhs",
}

glanza.__proto__=balano;
console.log(glanza.getPrice());