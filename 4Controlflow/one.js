// falsy values 
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function[]{}, 

const emptyObject = {}

if(Object.keys(emptyObject).length === 0) { // Object.keys(emptyObject).length returns array of keys
    console.log("Object is empty");
}

// during inspection in browser
false == 0 // true
false == '' // true
0 == '' // true

// Nullish Coalescing Operator (??): null undefined

let val1, val2, val3, val4;
val1 = 5 ?? 10
console.log(val1); // 5

val2 = null ?? 10
console.log(val2); // 10

val3 = undefined ?? 15
console.log(val3); // 15

val4 = null ?? 10 ?? 15
console.log(val4); // 10


// TERNIARY OPERATOR
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80") // greater than 80




