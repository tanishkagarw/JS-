const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);

const newNums = myNumbers.map( (num) => num*10).map( (num) => num + 1)
console.log(newNums); // [11, 21, 31, 41, 51 and so on]

const newNums1 = myNumbers.map((num) => num*10).map((num) => num + 1).filter((num) => num >= 40)
// first multiply by 10 then +1 and then output >= 40
console.log(newNums1);