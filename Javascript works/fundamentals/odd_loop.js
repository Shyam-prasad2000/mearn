var low_limit=10,upper_limit=50;
if(low_limit>upper_limit){
    console.log('please enter the correct value');
}
else{
    while (low_limit<=upper_limit) {
        if(low_limit%2 !=0){
            console.log(low_limit);
        }
        low_limit++
    }
}
