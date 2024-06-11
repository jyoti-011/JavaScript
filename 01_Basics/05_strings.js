const name="abc"
const repoCount=4
console.log(`My name is ${name} and my repo count is ${repoCount}`); // My name is abc and my repo count is $4

const gameName = new String("Tessa")

//String Methods
// console.log(gameName[0]); //T
// console.log(gameName.length); //5
// console.log(gameName.toUpperCase()); //TESSA
// console.log(gameName.charAt(2)); //s
// console.log(gameName.indexOf('e')); //1

//String Slicing
//in substring u cannot give negative values
// const newString = gameName.substring(0,4)
// console.log(newString); //Tess

// const anotherString = gameName.slice(0,4)
// console.log(anotherString); //Tess

// const anotherString = gameName.slice(-5,4)
// console.log(anotherString); //Tess

// const newStringOne = "  Tessa  "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // it trims the extra spaces //Tessa
// console.log(newStringOne);//its doesnot change the original string

// const url="https://tessa.com//tessa%20tess"
// console.log(url.replace('%20','-'));//it replaces the string  //https://tessa.com//tessa-tess
// console.log(url);//no change in the original string

// console.log(url.includes('tessa')) // checks if the given string is included in the user given string

const nameOne = "Tesla-company"
console.log(nameOne.split('-')); //split function splits the string based on a separator and returns a list of string //[ 'Tesla', 'company' ]
