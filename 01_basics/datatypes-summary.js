// Primitive Types
// 7 types => String , Number , Boolean , null , undefined , Symbol , BigInt

// Referance (Non-Primitive)
// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name: "Radha",
    age: 2,
}

const myfun = function(){
    console.log("Hello world");
}

// TYPEOF 

// Type of val => Result
// umdefined => "undefined"
// null => "object"
// boolean => "boolean"
// number => "number"
// string => "string"
// object => "object"
// function => "function" aka object function
// All non-primitive data types results into "object"

// https://262.ecma-international.org/5.1/#sec-11.4.3


// *************************** MEMORY ******************************
// Stack(Primitive) , Heap (Non-primitive)

let myName = "Radha";
let myName2  = myName;
console.log(myName);
console.log(myName2);

myName2 = "Krishna";
myName ="radha"
console.log(myName);
console.log(myName2);

// In stack there is a copy of value , so if there is any changes in either of the variables ,then there will be  changes in the respected variables.


let userOne ={
    email: "abc@gmail.com",
    upi: 1234
}

let userTwo = userOne;

userTwo.email = "radha@123.com",
userOne.upi = 5678,

console.log(userOne);
console.log(userTwo);

// In Heap there is referance of value , so if there are changes in either of variable , then the changes will occur in both the variables.