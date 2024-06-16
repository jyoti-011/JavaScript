//singleton object
//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "001"
tinderUser.name= "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //{ id: '001', name: 'Sam', isLoggedIn: false }
 
const regularUser = {
    email : "sam@gmail.com",
    fullname:{
        userfullname : {
            firstname:"Sam",
            lastname:"Dsouza"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

//combining two objects

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
// const obj3 = {obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } => But we dont want output like this so we use assign method of object class

//using assign method
// const obj3 = Object.assign({},obj1,obj2) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//Here target object is {} and  source objects are obj1 and obj2

// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// using spread 
const obj3 = {...obj1,...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id :'123',
        name : "sam",
        age:18
    },
    {
        id :'123',
        name : "sam",
        age:18
    },
    {
        id :'123',
        name : "sam",
        age:18
    }
]
console.log(users[1].id); //123

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] // Returns the names of the enumerable string properties and methods of an object.
console.log(Object.values(tinderUser)); //[ '001', 'Sam', false ] //Returns an array of values of the enumerable properties of an object
console.log(Object.entries(tinderUser));//[ [ 'id', '001' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ] //Returns an array of key/values of the enumerable properties of an object
console.log(Object.hasOwnProperty('isLogged')); //false
//Determines whether an object has a property with the specified name