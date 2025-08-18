var c = 600 // block scope problem

let a = 300

if (true) {
    let a= 10
const b = 20
var c = 30
console.log("inner:",a)
}

console.log(a)
// console.log(b)
console.log()

                // nested scope

function one(){
    const name  = "Noor ul Haq"

    function two(){
        const father_name = "Nisar ul Haq"
        console.log(name)           // Closure, mean inner scope (child) outer scope (parent) ko access kar sakta he 
    }
   
    //  console.log(father_name) , Not accesable

    two()
}

one()


            // interesting concept || hoisting , execution contest

console.log(addOne(3))

function addOne(num){
    return num + 1
}

        // 2nd way of making function

// console.log(addTwo(6))      

// in this type of decration of function the funcntion call will not work, mean Cannot access 'addTwo' before initialization, it will gives an error

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(6))      

