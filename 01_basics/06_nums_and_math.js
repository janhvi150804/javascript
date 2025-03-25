const score = 400; // automatically declares datatype as number.
console.log(score);
const balance = new Number(100); // datatype can be explicitly declared.
console.log(balance);
console.log(balance.toString().length); // converts the datatype to String and methods of string can be used.
console.log(balance.toFixed(2)); // returns o/p till the given number mentioned.
const othernum =232.5639420;
console.log(othernum.toPrecision(3)); // can give in decimal value too
const othernum1=23.25639420;
console.log(othernum1.toPrecision(3));
const othernum2 = 2325.639420;
console.log(othernum2.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString()); // default as US standards
console.log(hundreds.toLocaleString("en-IN")); // Indian value
// Number.MAX_VALUE => gives maximum value
// Number.MIN_VALUE => gives minimun value;
// Number.MAX_SAFE_VALUE => gives safe value;


// ******************************** MATHS *******************************
console.log(Math); // Object 
console.log(Math.abs(-4+3)); // Always returns positive answer.
console.log(Math.round(4.3)); // If number after decimal is less than 5 then it rounds off at low value.
console.log(Math.round(4.5)); // If number after decimal is equal to or greater than 5 then it rounds off at high value.
console.log(Math.round(4.6));
console.log(Math.ceil(4.3)); // No matter even if the number after decimal is greater , equal or less than 5 , still the number rounds off at high value.
console.log(Math.floor(4.8)); // No matter even if the number after decimal is greater , equal or less than 5 , still the number rounds off at low value.
console.log(Math.min(5,6,7,2,1)); // Returns minimum value from given values.
console.log(Math.max(5,6,7,2,1)); // Returns maximum value from given values.

// MATH RANDOM
console.log(Math.random()); // Returns value between 0 to 1 ;

// Game using  MATH RANDOM IN JS
// number between 1 to 10
console.log(Math.floor(Math.random()*10)+1);

// GUESS NUMBER BETWEEN 10 - 20

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min + 1)) + min);