
// STACK (used by all premitive datatypes) -> (copies the values)

let num1 = 45
let num2 = num1
num2 = 20

console.log("num1 is "+num1)  // 45
console.log("num2 is "+num2)  // 20

// HEAP (used by non-primitive datatypes) -> (copy reference)

let std1 = {
    name: "Noor",
    gender: "Female"
}

console.log(std1.name)  // Noor

let std2 = std1

std2.name = "Sarah"

console.log(std1.name)  // Sarah, Value changed in original variable
console.log(std2.name)  // Sarah