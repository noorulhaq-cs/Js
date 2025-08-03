// console.log("Dates and time")

let myDate = new Date()
// console.log(myDate)  // 2025-08-02T10:20:49.802Z
// console.log(myDate.toString())  // Sat Aug 02 2025 10:20:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()) // 8/2/2025, 10:20:49 AM
// console.log(myDate.toDateString())  // Sat Aug 02 2025
// console.log(myDate.toTimeString()) // 10:20:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.getDate()) // 2
// console.log(myDate.getDay()) // 6
// console.log(myDate.getFullYear())  //2025
// console.log(myDate.getHours()) // 10
// console.log(myDate.getMonth()) // 7
// console.log(myDate.getSeconds()) // 49

// let newDate = new Date(2025,7,2)   // SET custom date
// let newDate = new Date(2025,7,2,3,34)   // SET custom date
// let newDate = new Date("2025-08-02")   // SET custom date
let newDate = new Date("02-08-2025")   // SET custom date


// console.log(newDate.toLocaleString())
// console.log(newDate.toString())

let recentDate = Date.now()  // return recent date

console.log(Math.floor(newDate.getTime()/1000)) // milisec to second

