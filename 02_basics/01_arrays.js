// Arrays in javacript can contain different datatypes and aslos resizable.
// Array elements cannot be accessed using arbitrary strings as indexes .
// In JS arrays have zero indexing and it creates a swallow copy . 
// (swallow cop == heap memory) and (deep copy == stack copy)

//Declaration of Arrays
const myArr = [0,1,2,3,4,5,true,"radha"];
const myHeros = ["shaktiman" , "naagraj"];
const myArr2 = new Array(1,2,3,4,5);

//Array Methods

myArr.push(6); // Adds element at the end of the Array.
console.log(myArr); 
myArr.pop(); // Removes the last element from the Array and pop doesn't need argument.
console.log(myArr);
myArr.unshift(9); //Adds element at the start of the Array and sometimes it is not optimize to use while solving the problem as the new element take index zero the elements after zero chnages there position.
console.log(myArr);
myArr.shift(); // Removes the first element from the Array and shift doesn't need argument.
console.log(myArr);
console.log(myArr.includes(9)); // Checks if the argument is present or not in the array and return the answer in boolean value.
console.log(myArr.indexOf(3)) ; // Returns the index if the argument is present , if not returns -1.
const newArr = myArr.join() ; // Adds all the elements of the an array into a string.
console.log(`Normal Array => ${myArr} and Array after using join function => ${newArr} and it's Datatype is ${typeof newArr} .`) 
// slice , splice
console.log("A ",myArr);
let myn1 = myArr.slice(1,3); // makes a copy of an array from the given range. Doesn't include the second argument.
console.log(myn1);
console.log("B ",myArr);
let myn2 = myArr.splice(1,3); // Removes the part of the array from the given range. It does include the second argument.
console.log("C ", myArr);
console.log(myn2);
