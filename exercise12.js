function add(num1,num2){
    return num1+num2
}
function multiply(num1,num2){
    return num1*num2
}
function divide(num1,num2){
    return num1/num2
}
function substarct(num1,num2){
    return num1-num2
}
function calculator(num1 ,num2, operator){
    return operator(num1,num2)
}
console.log(calculator(2,5,add))