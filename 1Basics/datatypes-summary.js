// primitive type(call by value) - 7 types 
// string, number, boolean, null, undefined, Symbol, BigInt

const value = 100;
const scorevalue = 100.3
const outsidetemp = null
let email;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid) // false

const bignumber = 1111111111111111111111n // convert to big int if we place n after the number

// non-primitive(call by reference) - 
// arrays, objects, Functions

const heroes = ["shaktimaan", "doraemon", "hulk"]
const myobj = {
    name: "tanishk",
    age: 20, 
}
const myfunction = function() {
    console.log("hello world");
}

// two types of language are threre- statically typed and dynamically typed
// javascript is dynamically typed as we dont need to tell what type of variable
// whereas in cpp is a statically typed as we need to give the type of variable.   ]


console.log(typeof bignumber) //bigint
console.log(typeof outsidetemp) //object
console.log(typeof undefined) // undefined
console.log(typeof myfunction) //function
// btw its called function object