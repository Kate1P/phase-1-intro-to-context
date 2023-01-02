// Your code here
 // A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour

function createEmployeeRecord(array) {
let [firstName, familyName, title, payPerHour, timeInEvents, timeOutEvents] = array;
let empObj = {firstName, familyName, title, payPerHour, timeInEvents, timeOutEvents};
empObj.timeInEvents = [];
empObj.timeOutEvents = [];

   // Returns JavaScript Object with keys:
//    let  employeeRecord =
//    {
//         firstName: [0],
//         familyName: [1],
//         title: [2],
//         payPerHour: [3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
//     return employeeRecord;
return empObj;
}    
 console.log(createEmployeeRecord())

 //createEmployeeRecords Argument(s) Array of Arrays =>(arrOfArr)


 function createEmployeeRecords(arrOfArr) {
   return arrOfArr.map(array => createEmployeeRecord(array) )
    }

function createTimeInEvent (empObj, empStamp){


    return employeeRecord;
}

