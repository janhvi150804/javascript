// Strings can be declared in single quote or double quote [' ' , " "]
// Concanetation of 2 strings can be done by using "+" sign

const name = "Radha"; 
const repoCount = 50;
console.log(name + repoCount + " Value"); // old method to concanate the string

//String Interpolation. method can be used . eg:- naem.ToUpper => converts the letter to uppercase
console.log(`Hello my name is ${name} and the count of repo is ${repoCount}`);

const gameName = new String('Radha'); // another way to declare string. String is object

console.log(gameName[0]);
//console.log(gameName.__proto__); // can acces proto type too
console.log(gameName.length); //proto type => result the number of characters present in the string.
console.log(gameName.toUpperCase()); //proto type => converts the given string into upper case.
console.log(gameName.charAt(2)); // proto type => find at given index which character is present.
console.log(gameName.indexOf('t')); // proto type => find at what index the given character is present.
const newString = gameName.substring(0,2); // proto type => includes the character from start index to end-1 index.
console.log(newString); // proto type => can't give negative values to substring it automatically reads it as zero if any negative value present.
const newString1 = gameName.slice(-8,2); // proto type => can take negative value .
console.log(newString1);
const newString2 = "            Radha   ";
console.log(newString2);
console.log(newString2.trim()); // proto type => Deletes the spaces present in the string.
console.log(newString2.trimStart()); // proto type => Deletes only the spaces present in the start of string.
console.log(newString2.trimEnd()); // proto type => Deletes only the spaces present in the end of string.
const url = "https://radha.com/radha%7" ;
console.log(url.replace("%7", "krishna")); // proto type => replace the value 
console.log(gameName.includes('radha')); // proto type => checks if the given value is present or not , returns answer in boolean value
let newString3 = "janhvi-laxmanrao-deshmukh" ;
console.log(newString3.split("-")); // proto type => splits the string into array on the based on separator given in the method.

// GO THROUGH ALL THE METHODS ON STRINGS USING MDN
// PRACTICE MAXIMUM TIMES
// SPLICE
