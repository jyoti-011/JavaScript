//Dates
let myDate = new Date()
// console.log(myDate.toString());//Fri Jun 14 2024 17:44:27 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Fri Jun 14 2024
// console.log(myDate.toISOString());//2024-06-14T12:14:27.107Z
// console.log(myDate.toLocaleDateString());//14/6/2024
// console.log(myDate.toLocaleString()); //14/6/2024, 5:44:27 pm
// console.log(myDate.toLocaleTimeString()); //5:45:55 pm
// console.log(myDate.toTimeString()); //17:46:32 GMT+0530 (India Standard Time)

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,23) 
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

// let myCreatedDate = new Date(2023,0,23,14,3) // in this the month starts from 0
// console.log(myCreatedDate.toLocaleString()); //23/1/2023, 2:03:00 pm

// let myCreatedDate = new Date("2023-1-12") //YY-MM-DD
// console.log(myCreatedDate.toLocaleString());//12/1/2023, 12:00:00 am

// let myCreatedDate = new Date("1-12-2024") //MM-DD-YY
// console.log(myCreatedDate.toLocaleString()); //12/1/2024, 12:00:00 am

let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime()); //1704997800000 => This gives the time stamp in milliseconds from the created date uptil now

// console.log(Date.now()/1000); //This gives timestamp in seconds from 1st Jan 1970 uptil now
// console.log(Math.floor(Date.now()/1000)); // since the above ans comes in decimal therefore we take the floor value

let newDate = new Date()
console.log(newDate);// 2024-06-14T13:22:08.064Z
console.log(newDate.getTime());// 1718371328064 in milliseconds
console.log(newDate.getFullYear()); // 2024
console.log(newDate.getMonth()); // 5 => which is June since month starts from 0
console.log(newDate.getDay()); // 5 => which is Friday since sunday starts with 0 

//Example:
//We can customise the toLocaleString Function
newDate.toLocaleString('default',{
    weekday:'long'
}
)

  