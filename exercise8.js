let a=[]
let count=1
function fizzbuzz(){
    while(count<100){
    if(count%3==0 && count%5==0){
        a.push("FizzBuzz")
    }
    else if(count%3==0){
        a.push("Fizz")
    }
    else if(count%5==0){
        a.push("Buzz")
    }
    else{
    a.push(count)
    }
   count++
    //console.log(a)
}
console.log(a)

}
fizzbuzz()