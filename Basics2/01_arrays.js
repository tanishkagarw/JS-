const myArr = [0, 1, 2, 3, 4, 5] // dynamic hote hai ye always
const myheroes = ["ironman", "hulk", "thor"]

const myArr1 = new Array(1, 2, 3, 4)


// array methods
// myArr.push(6) // 0 1 2 3 4 5 6
// myArr.pop() // 0 1 2 3 4 

// myArr.unshift(9) // 9 0 1 2 3 4 5
// myArr.shift() // 1 2 3 4 5 

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)) // -1

// const newArr = myArr.join() // converts into string


// console.log(newArr) // output will be like - 0,1,2,3,4,5 bcoz here type changed
// console.log(typeof(newArr)); // string

// console.log(myArr); // output will be like - [ 0, 1, 2, 3, 4, 5 ]


// SLICE 
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) // will not take index 3
console.log(myn1);

//SPLICE
const myn2 = myArr.splice(1, 3) // will include 3
console.log(myn2);

// Also splice manuplates with the original array whereas slice does not
console.log(myArr); // 0 4 5 



