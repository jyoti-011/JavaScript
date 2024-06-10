// let score=33 =>number type
// let score="33" => string type converted to number type
// let score="33abc" => string type converted to number type but not a number
// let score = null // converts into number type and gives the value as 0

// let score = undefined // converts into number type but it has value NaN
// let score = true // converts boolean type to number type and gives the value 1 => true : 1 and false : 0

let score = "abc" // converts into number type but give NaN as the output
// console.log(typeof score)

let valueInNumber = Number(score)  // converting string into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber); //NaN => a special type which says it is not a number

let loggedIn=""

let booleanLoggedIn = Boolean(loggedIn)
// console.log(booleanLoggedIn);

// 1:true ; 0:false
// "" : false; "jyoti":true

let someNumber=33
let stringsomeNumber = String(someNumber)
console.log(stringsomeNumber)
console.log(typeof stringsomeNumber);