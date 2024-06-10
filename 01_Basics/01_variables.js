const accountID=1234
let accountEmail="abc@gmail.com"
var accountPassword="123435abc"
// accountState="haridwar" // this is a bad practice
let accountCity;
//Whenever we just leave the variable declared and try to print it then it gives undefined which means there is no value assigned to it.
// accountID=45678
//console.log(accountID); // Not allowed because u cannot re-assign values to const
/*
Prefer not to use var
because of issue in block scope and functional scope
 */
accountEmail="def@gmail.com"
accountPassword="1234567"
accountState="Delhi"
console.table([accountID,accountEmail,accountPassword,accountState,accountCity]);

//When Javascript did not have block scope concept at that time var was used.
//This created a problem as changing the value of a variable in the program resulted in the change of other variable in other scope which shared the same name as the earlier one
//So let is used to implement block scope concept
