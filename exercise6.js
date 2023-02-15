console.log(prompt("Enter name 1"))
console.log(prompt("Enter name 2"))

//document.getElementById('button').onclick=my;
let p=Math.random()
p=p*100
p=Math.floor(p)+1
console.log(p)
if(p<30){
    var result="There is no meaning of your relationship"
    
}
else if (p>30 && p<70) {
    result="Work little hard"
} 
else{
    result="Perfect"
}
alert((p+"%"+" "+result))


//document.getElementById('lovevalue').value=p+"%"

