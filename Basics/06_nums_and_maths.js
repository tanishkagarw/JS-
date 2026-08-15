const score = 400
console.log(score) // 400

const balance = new Number(300) // object
console.log(balance) // [Number: 300]

console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)) // 300.00


const otherNumber = 123.8966
const val = 23.4501

console.log(otherNumber.toPrecision(3)); // 124
console.log(val.toPrecision(3)) // 23.5

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000  -- us standards
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 -- indian

// -------------------------------------maths------------------------------------

console.log(Math) // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(4, 3, 7, 9)); // 3
console.log(Math.max(4, 3, 7, 9)); // 9

console.log(Math.random()); // RANGE LIES BETWEEN 0 - 1
console.log(Math.random()*10) // 0 - 10
console.log((Math.random()*10) + 1) // 1 - 11

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)





