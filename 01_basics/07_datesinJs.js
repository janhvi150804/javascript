// Dates can be declared from 1st January, 1970 to Today.
// represnted in milliseconds
// https://tc39.es/proposal-temporal/docs/index.html

let myDate = new Date();
console.log(typeof myDate); // Datatype of date is object
console.log(myDate); // o/p non-readable
console.log(myDate.toString()); // o/p converts date into string
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

// Create a past Date
let myCreatedData = new Date(2023, 0, 23, 5, 3); //(year,month,date,hour,min)
console.log(myCreatedData.toDateString());
console.log(myCreatedData.toLocaleString());

// More deatiled formed
let myCreatedData1 = new Date('01-14-2023');
console.log(myCreatedData1.toDateString()); 
 


