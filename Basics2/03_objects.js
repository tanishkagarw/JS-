// two ways to declare objects - literals and constructors
// if declared literals then singleton does not form..but with constructor singleton forms
// Object.create this is constructor method


// object literals

const mySym = Symbol("Key1")


const JSuser = {
    name: "tanishk",
    "full name": "Tanishk Agarwal",
    // to use symbol
    [mySym]: "MyKey1",
    age: 20,
    location: "Jaipur",
    email: "25bcs109@nith.ac.in",
    isLoggedIn: false,
    lastLogindays: ['Monday', 'Saturday']
}

console.log(JSuser.email);
// console.log(JSuser[email]); // error because email is a string
console.log(JSuser["email"]);

// console.log(JSuser.full name); error
console.log(JSuser["full name"]); // only this meThod works here

// access symbol
console.log(JSuser[mySym]); 
console.log(JSuser); // last line -  Symbol(Key1): 'MyKey1'



// JSuser.email = "tanishk@chatgpt.com"
// Object.freeze(JSuser) // now the object is freeze hence no changes further will take place
// JSuser.email = "tanishk@grok.com"
// console.log(JSuser["email"]); // tanishk@chatgpt.com

JSuser.greeting = function(){
    console.log("Hello js user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greeting); // [Function (anonymous)]
console.log(JSuser.greeting()); // Hello js user \n undefined
console.log(JSuser.greetingTwo()); // Hello JS user, tanishk














