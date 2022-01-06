function displayNum(num){
    display.value+=num
}
function clearBox(){
    display.value=""
}
function evaluateExpression(){
   
    display.value=eval(display.value)
}
function deleteFun(){
    display.value=display.value.slice(0,-1)
}