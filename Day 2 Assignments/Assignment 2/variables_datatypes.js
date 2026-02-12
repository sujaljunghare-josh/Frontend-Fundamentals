//Tkaes input of different data types and prints their Datatype
const input = prompt("Enter input for checking type : ")
console.log(typeof(input))

//Difference between null and undefined

//undefined means that a vairaible is declared but has no value in it
var temp;
console.log(temp) 
//This will show undefined since the variable temp has been initializwed but does not contain any value

//null is a representation of empty. It can be assigned to a variable
var temp = null;
console.log(temp)
//Now the temp variable will print null instead of undefined since now it has null in it.