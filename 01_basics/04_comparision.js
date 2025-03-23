// Comparision between two same Data Types gives o/p as Boolean values
console.log(2>1); // O/P => true
console.log(2<1); // O/P => false
console.log(2==2); // O/P => true
console.log(2!=2); // O/P => false
console.log(2>=0); // O/P => true
console.log(2<=1); //O/P => false

//Comparision between two different Data Types then o/p is unpredicatable
console.log("2">1);
console.log("02">1);

/* The reason is that an equality check == and comparisions > < >= <= works differently.
Comparisions convert null to a number, treating it as 0.
That's why(3) null >= 0 is true and (1) null > 0 is false. */
console.log(null > 0); // O/P => false
console.log(null == 0); // O/P => false
console.log(null >= 0); // O/P => true

console.log(undefined == 0); // O/P => false
console.log(undefined < 0); // O/P => false
console.log(undefined > 0); // O/P => false

console.log("2" == 2); // O/P => true
console.log("2" === 2); // O/P => false (The third '=' checks if it has same Data Type types.)


