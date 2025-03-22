// Conversions between Data Types
// For Number
let score = "33"
console.log(typeof score);
console.log(typeof(score)); // use of method
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(typeof score);
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

//For Boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);
// 1 => true
// 0 => false
// string => true
// empty string => false

// For String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
// ~~~~~~~~~~~~~~~~~~~~~~~ Operation ~~~~~~~~~~~~~~~~~~~~~~
let value = 3 ;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Radha";
let str2 = " Krishna";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //treats all as the string
console.log(1 + 2 + "2");

console.log( + true); // O/P => 1
console.log( + ""); // O/P => 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2 ;
console.log(num1);
console.log(num2);
console.log(num3);

// Increment Operator
let gameCounter = 100;
gameCounter++ ;
console.log(gameCounter) ;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


