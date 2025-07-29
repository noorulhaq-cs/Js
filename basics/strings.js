let name = "Noor"
let age = 20

// this is how you create a string object, but it is not recommended to use this way.
// let stdName = new String("Noor") 

 console.log(`hey my name is ${name} and I am ${age} years old`)  //called string interpolation , modern way.

// console.log("hey my name is " + name + " and I am " + age + " years old") // this is called string concatenation.

const stdName = "Noor ul Haq"

console.log(stdName.length) // this will give you the length of the string
console.log(stdName.toUpperCase()) // this will convert the string to uppercase
console.log(stdName.toLowerCase()) // this will convert the string to lowercase
console.log(stdName.indexOf("ul")) // this will give you the index of the first occurrence of the string "ul"
console.log(stdName.slice(0, 4)) // this will slice the string from index 0 to index 4 (not inclusive)
console.log(stdName.slice(4)) // this will slice the string from index 4 to the end of the string
console.log(stdName.replace("Haq", "Khan")) // this will replace the first occurrence of "Haq" with "Khan"
console.log(stdName.replaceAll("ul", "UL")) // this will replace all occurrences of "ul" with "UL"
console.log(stdName.split(" ")) // this will split the string into an array of strings based on the space character
console.log(stdName.trim()) // this will remove any whitespace from the beginning and end of the string
console.log(stdName.startsWith("Noor")) // this will check if the string starts with "Noor"
console.log(stdName.endsWith("Haq")) // this will check if the string ends with "Haq"
console.log(stdName.includes("Noor")) // this will check if the string includes "Noor"
console.log(stdName.charAt(0)) // this will give you the character at index 0 of the string
console.log(stdName.concat(" is a student")) // this will concatenate the string " is a student" to the end of stdName
console.log(stdName.repeat(2)) // this will repeat the string twice
console.log(stdName.search("Haq")) // this will search for the string "Haq" and return its index
console.log(stdName.split("")) // this will split the string into an array of characters
console.log(stdName.substring(0, 4)) // this will return the substring from index 0 to index 4 (not inclusive)
