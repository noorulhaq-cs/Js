    //object literals (objects ko declare karne ka tareqa)

const User = {
    name: "Noor",  // the name is treated as string here. e.g => "name": "Noor"
    "last name": "ul Haq",  // you can not access this with . (dot)
    age: 22,
    email: "noorulhaq@gmail.com",
    isLoggedIn: true
}

console.log(User.name)  // mostly we use this type
console.log(User["last name"]) // for some specific reasons

User.age = 23 // value overwrite

console.log(User.age)

// Object.freeze(User)  
// // this freez the object

User.Intro = function() {        // function in an object
    console.log(`my name is, ${this.name}.`)
}

console.log(User.Intro()) 

// singleton (constructor se singleton banta he, literals se nahi) 
// e.g: object.create
// const obj = new Object()

const Profile = {        // nested objects 
    Username: "Noor012",
    Fullname: {
        fName: "Noor",
        lName: "ul Haq"
    },
    Password: "012345"
}

console.log(Profile.Fullname)
console.log(Profile.Fullname.fName)

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}

    // combining/merge two objects

const obj3 = Object.assign({} , obj1 , obj2)

// OR by using spread

const obj4 = {...obj1 ,...obj2}

console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


console.log(Object.keys(User))  // important method, it store all keys of a obj in to a single array.
 

// learned simple destructuring. e.g const {name} = User