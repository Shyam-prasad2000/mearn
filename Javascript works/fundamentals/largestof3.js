var num1=30,num2=12,num3=15;
if (num1>num2 && num1>num3){
    console.log(`${num1} is largest`);
    if(num2>num3){
        console.log(`${num2} is the second largest number`);
    }
    else{
        console.log(`${num3} is the second largest`);
    }

}
else if( num2>num1 && num2>num3){
    console.log(`${num2} is largest`);
    if(num1>num3){
        console.log(`${num1} is the second largest`);
    }
    else{
        console.log(`${num3} is the second largest`);
    }
}

else if(num3>num1 && num3>num2){
    console.log(`${num3} is largest`);
    if(num1>num2){
        console.log(`${num1} is the second largest number`);
    }
    else{
        console.log(`${num2} is the second largest`);
    }
}
else{
    console.log("all are equal");
}