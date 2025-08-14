

function Myname(){
console.log("N")
console.log("O")
console.log("O")
console.log("R")
}

// Myname  => function reference
// Myname() => function

Myname()

function addTwoNumbers(num1,num2){   // these are parameters

   console.log(num1+num2)

    // OR
    // const num3 = num1 + num2
    // console.log(num3)

    // OR
    return num1+num2 // function return

}

addTwoNumbers(3,3)  // 5  , these are arguments 

const result = addTwoNumbers(2,3)
console.log(result)

function hello(username){

    if(username === undefined){
        console.log("Please enter a username.")
        return
    }
    
    return `Hello, ${username}`
}

console.log(hello("Noor"))


//    ...number these three dots are called rest operator and also spread operator.
//   ( here we are using this for taking multiple arguments in function )

function cart(...items) { // used rest operator
    return items
}

console.log(cart("soap","suger","oil","flour"))   // all values are returned in an single array. e.g [ 'soap', 'suger', 'oil', 'flour' ]


const Item = {        // an object
    name: "shampoo",
    price: 250
}

function objHandler(anyObj){
    console.log(`Item is ${anyObj.name} and price is ${anyObj.price}`)
}

objHandler(Item)    // Item is shampoo and price is 250

// OR

objHandler({         // Item is suger and price is 500
    name: "suger",
    price: 500
})


const arr = [1, 2 , "flour", "oil"]   // an array 

function arrHandler(anyArr){
    console.log(anyArr[2])
}

arrHandler(arr)   //  flour

// OR

arrHandler([1,2.2,"oil","soap"])  //  oil