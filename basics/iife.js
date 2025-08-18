// iife , means immediately invoked function expression

(function tea(){
    console.log("This is an IIFE example!");
} ) ();
// The above code defines an IIFE that runs immediately and logs a message to the console. it prints "This is an IIFE example!" to the console and stops there.


( (name) =>{
    console.log("This is another IIFE example using arrow function syntax!");
    console.log(`Welcome ${name}`)
})("Noor"); 
// this will print "This is another IIFE example using arrow function syntax!" and "Welcome Noor" to the console.
// The above code defines an IIFE using arrow function syntax that takes a parameter and runs immediately
// with the argument "Noor".

(function() {
    // This is an IIFE, it runs immediately after it's defined
    console.log("This code runs immediately!");
    
    // You can define variables and functions here that won't pollute the global scope
    var privateVariable = "I am private";

    function privateFunction() {
        console.log(privateVariable);
    }

    // Call the private function
    privateFunction();
})();

// it uses for two main resons:

// 1. To create a private scope, avoiding polluting the global namespace.
// 2. To execute code immediately without needing to call a function later. for example, database connection, event listeners, etc.