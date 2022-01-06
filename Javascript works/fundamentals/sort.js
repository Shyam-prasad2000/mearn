var num1=10,num2=120,num3=15;
if (num1>num2 && num1>num3){
    console.log(`${num1} is largest`);
    if(num2>num3){
        console.log(`${num2} is the second largest number`);
        console.log(num1,num2,num3);
    }
    else{
        console.log(`${num3} is the second largest`);
        console.log(num1,num3,num2);
    }

}
else if( num2>num1 && num2>num3){
    console.log(`${num2} is largest`);
    if(num1>num3){
        console.log(`${num1} is the second largest`);
        console.log(num2,num1,num3);
    }
    else{
        console.log(`${num3} is the second largest`);
        console.log(num2,num3,num1);
    }
}

else if(num3>num1 && num3>num2){
    console.log(`${num3} is largest`);
    if(num1>num2){
        console.log(`${num1} is the second largest number`);
        console.log(num3,num1,num2);
    }
    else{
        console.log(`${num2} is the second largest`);
        console.log(num3,num2,num1);
    }
}
else{
    console.log("all are equal");
}