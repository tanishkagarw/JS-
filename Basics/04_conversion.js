console.log("2" > 1) //true => 2 automatically converted to number


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// reason - equality check and comparison check both works diffrently...
// commparisons convert null to a number , treating it as 0.

console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

