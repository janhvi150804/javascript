const accountId = 144553
let accountEmail = "janhvi123@gmail.com"
var accountPassword= "1234"
accountCity = "Udaipur"
let accountState;

// accountId = 2
console.log(accountId)
/*
Prefer not to use var because of issue in block scope and function scope
*/
accountEmail = "hc@gmail.com"
accountPassword = "212121"
accountCity="Jaipur"
console.log(accountEmail)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])