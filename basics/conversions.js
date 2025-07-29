let score = "Noor"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// when changed into Number
// "33" => 33
// "33abc" => NaN
//  true => 1
// false => 0

let isLoggedIn = "Noor"

//console.log(typeof isLoggedIn)
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(typeof booleanIsLoggedIn)
//console.log(booleanIsLoggedIn);

// 1,12,-45 => true
// 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ***************************OPERATIONS**********************

let num1 = 10
let negNum1 = -num1
console.log(negNum1);

console.log(4 + 5);
console.log(5 - 4)
console.log(4 * 5);
console.log(4 / 5);
console.log(4 % 5); // remainder
console.log(4 ** 5); // exponentiation

console.log(4 + "5"); // 45
console.log(4 - "5"); // -1
console.log("4" + 5); // 45
console.log("4" - 5); // -1
console.log("4" * 5); // 20
console.log("4" + 2 + 5); // 425
console.log(4 - 2 + "5"); // 25

let count = 0
count++ // count = count + 1
console.log(count); // 1
count-- // count = count - 1
console.log(count); // 0