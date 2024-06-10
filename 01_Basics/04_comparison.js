// Comaparison operator compares the value and gives boolean output
// console.log(2>1); //true 
// console.log(3==3); //true
// console.log(4<2); //false
// console.log(4<=2); //false
// console.log(4>=2); //true

//As long as we are comparing data of same data type then there is no problem.
//But there is problem with different datatypes
// console.log("2"<1); //false

//Note: The below type of comparision should be avoided to avoid confusion
console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true

/* 
The reason is that an equality check == and comparisons >, <, <=, => work differently
Comparisons convert null to a number, treating it as 0.
That's why null>0 is false and null>=0 is true */

/*
Note:
1. == this simply checks if the value is equal or not. Even for different datatypes it works
2. === strict check will check the value and as well its data types */
console.log("2"===2) // false