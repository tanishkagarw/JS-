const name = "tanishk"
const value = 50

console.log(name + value) // tanishk50  but dont prefer this...

// use backticks"``"  (string interpolation) 
// ${} it is called Placeholders

console.log(`My name is ${name} and value is ${value}`)
// decalring string

const gameName = new String('tanishkk') // here string is an object

console.log(gameName[0]) // t
console.log(gameName.__proto__) // {}

console.log(gameName.length) // 8
console.log(gameName.toUpperCase) // TANISHKK  note - orginal is not change remember stack and heap concept
console.log(gameName.charAt(1)) // a
console.log(gameName.indexOf('t')) // 0

// slicing
const newString = gameName.substring(0, 4) // agar isme 0 ki jagah -8 denge to wo tab bhi 0 se he shuru hoga
console.log(newString) // tani

const anotherString = gameName.slice(-7, 4) // isme negative de skte hai
console.log(anotherString) // ani

const newStringOne = "   tanishk             "
console.log(newStringOne.trim()) // "hitesh" starting and endspaces remove krta hai

// trimend and trimstart bhi hota hai and ye white space and line terminators like \n pe kaam krta hai..

const url = "https://tanishk.com/tanishk%20agarwal"

console.log(url.replace('%20', "-")) // https://tanishk.com/tanishk-agarwal 

url.includes('tanishk') // true


const gameName1 = new String('tanishk-kk-com')
console.log(gameName1.split('-')) // [ 'tanishk', 'kk', 'com' ]

