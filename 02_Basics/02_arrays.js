const marvel = ["thor","ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc) 
// console.log(marvel); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//the push function pushes the elements at the end of the array. And it happens to the original array, no copies are made

let heroes = marvel.concat(dc) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//SPREAD OPERATOR METHOD
const allHeroes = [...marvel,...dc]
// console.log(allHeroes);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_another_array); 
/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/

console.log(Array.isArray("Abhay"));//false //Checks if it is an array or not
console.log(Array.from("Abhay")); // [ 'A', 'b', 'h', 'a', 'y' ] //Creates an array from an iterable object. 
console.log(Array.from({myname:"Abhay"})); //[] => it gives an empty array 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ] //Returns a new array from a set of elements.

 