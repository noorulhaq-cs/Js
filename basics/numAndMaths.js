const num1 = 52.5584
const std1 = "Noor"

console.log(typeof num1)
console.log(typeof std1)

console.log(num1)
console.log(std1)

console.log(typeof num1.toString()) // return string
console.log(num1.toString()) // return number as string

console.log(num1.toFixed(2)) // return 52.56 , used for after decimal.
console.log(num1.toPrecision(2))  // roundoff , return 53

const num2 = 1000000

console.log(num2.toLocaleString("en-PK")) // return number with commas, eg: 1,000,000

console.log(num2.toString().length) // convert number to String and return langth of the String


// *********************** MATHS ***********************

console.log(Math.abs(-45)) // always return possitive value
console.log(Math.round(526.566))

console.log(Math.floor(45.85)) //return 45 , Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.floor(Math.random()*10)) // return any random number bt 0 to 10

