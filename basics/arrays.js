let array = [1, 2, 3, 4, 5];
// Accessing elements
console.log(array[0]); // 1

let array2 = new Array(1, 2, 3, 4, 5);
// Accessing elements
console.log(array2[0]); // 1

/*

let a = new Array(5); // Creates an empty array with length 5 (not [5])
console.log(a);       // [ <5 empty items> ]

let b = [5]; // Creates an array with one element
console.log(b); // [5]


*/

// Array methods// Adding elements
array.push(6); // Adds 6 to the end
console.log(array); // [1, 2, 3, 4, 5, 6]

// Removing elements
array.pop(); // Removes the last element
console.log(array); // [1, 2, 3, 4, 5]

// Adding elements at the beginning
array.unshift(0); // Adds 0 to the beginning
console.log(array); // [0, 1, 2, 3, 4, 5]

// Removing elements from the beginning
array.shift(); // Removes the first element
console.log(array); // [1, 2, 3, 4, 5]  

// Finding the index of an element
let index = array.indexOf(3); // Finds the index of 3
console.log(index); // 2

// Slicing the array
let slicedArray = array.slice(1, 4); // Gets elements from index 1 to 3
console.log(slicedArray); // [2, 3, 4]

// Splicing the array
array.splice(1, 3); // Removes 3 elements starting from index 1
console.log(array); // [1, 5]

// Concatenating arrays
let array3 = [6, 7, 8];
let concatenatedArray = array.concat(array3); // Combines two arrays
console.log(concatenatedArray); // [1, 10, 20, 4, 5, 6, 7, 8]

// joining elements into a string
let joinedString = array.join(', '); // Joins elements with a comma
console.log(joinedString); // "1, 2, 3, 4, 5"

// length of the array
console.log(array.length); // 5

// Iterating over an array
array.forEach((element) => {
  console.log(element); // Logs each element
});

// spread operator
let array4 = [...array, ...array3]; // Combines muliple arrays using spread operator
console.log(array4); // [1, 2, 3, 4, 5, 6, 7, 8]    

// array.from
let arrayFrom = Array.from('hello'); // Converts a string to an array
console.log(arrayFrom); // ['h', 'e', 'l', 'l', 'o']    

// array.of 
let arrayOf = Array.of(1, 2, 3); // Creates an array from arguments
console.log(arrayOf); // [1, 2, 3]

// Array.isArray
console.log(Array.isArray(array)); // true