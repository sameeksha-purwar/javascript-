let n=prompt("Enter word")
console.log(n)

console.log("You have written" +" "+(n.length)+" "+"characters, you have"+ " "+ (280-n.length) + " "+"characters left")
var n_length=n.slice(0,280)
alert(n_length)