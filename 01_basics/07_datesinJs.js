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

// Stamps o/p in milliseconds used to find current time , who won the race , etc.
let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedData1.getTime()); // Converts the date into milliseconds from 1st Jan , 1970 till now.
console.log(Math.floor(myCreatedData1.getTime()/1000)); // Converts the date into seconds from 1st Jan , 1970 till now.
console.log(myCreatedData1.getMonth()+1); // results only month of the that date(month is added by 1 as the months starts from zero). By using getResult we can get day , millisecond , second hour , etc.

// IMP point (we can customize)
console.log(myDate.toLocaleString('default',{
    weekday: "long"
})) //default => US
