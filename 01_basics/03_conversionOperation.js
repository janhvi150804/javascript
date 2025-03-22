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

