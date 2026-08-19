const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currentvalue) {
    console.log(`accumulator ${accumulator} and cuurentvalue ${currentvalue}`)
    return accumulator + currentvalue
}, 0)
// ye jo 0 hai ye accumulator ki initial value assign hoti hai then-
//- accumulator = accumulator + currentvalue hota jaata hai..
// bas ek he baar ye 0 ka kaam hota hai..

console.log(myTotal);// output below
// accumulator 0 and cuurentvalue 1
// accumulator 1 and cuurentvalue 2
// accumulator 3 and cuurentvalue 3
// 6


const myTotal2 = myNums.reduce( (acc, currval) => (acc + currval), 0)
console.log(myTotal2); // 6






