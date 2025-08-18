const User = {
    name: "Noor ul Haq",
    price: 299,
    
    welcomeMsg: function() {
        console.log(`Welcome ${this.name}`);   // this refers to the User object, mean current context
    }
}

User.welcomeMsg()  // Output: Welcome Noor ul Haq
User.name= "Nasir"
User.welcomeMsg()  // Output: Welcome Nasir, because of the this keyword , current context is User object, context means values


console.log(this);  // Output: global object in browser, window object, in node.js it is global empty object

const coffee = function() {

    const name = "Coffee"
    console.log(this.name);  // Output: undefined, because this refers to global object and name is not defined in global scope
}

coffee();  // Output: undefined

const coffeeArrow = () => {            // basic arrow function.
    const name = "Coffee"
    console.log(this.name);  // Output: undefined, because arrow function does not have its own this, it refers to the global object
}

coffeeArrow();  // Output: undefined

// other ways to use arrow function

const coffeeArrow2 = () => console.log("Coffee");  // single line arrow function  , also called IMPLICIT RETURN
coffeeArrow2();  // Output: Coffee  

const addFive = (num) => (num + 5);  // arrow function with single parameter
console.log(addFive(10));  // Output: 15    

// for object 

const returnObject = () => ({ name: "Coffee", price: 299 });  // arrow function returning an object
console.log(returnObject());  // Output: { name: 'Coffee', price: 299 }

