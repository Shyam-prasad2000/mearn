var low_limit=10,upper_limit=30;
if(low_limit>upper_limit){
    console.log('please enter the correct value');
}
else{
    for(let i=low_limit;i<=upper_limit;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
