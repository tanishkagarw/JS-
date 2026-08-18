// JS execution Context
// global execution context hamesha banta hai during execution and 'this' variable ke andar global execution context ko-
// -rakh diya jaata hai
// also browser ke andar 'this' ki value window aati hai..baaki alag alag frameworks pe alag alag value hoti hai

// also there r two more context - function execution context and eval execution context

// how js is run in two phases - memory creation phase and execution phase

// suppose code - 
let val1 = 1;
let val2 = 2;
function addnum(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addnum(val1, val2);
let result2 = addnum(10, 2)

// NOW HOW IT RUNS STEP BY STEP
// 1 - Global execution  -- this
// 2 - memory creation phase -
//     val1 = undefined
//     val2 = undefined
//     addnum = definition
//     result1 = undefined
//     result2 = undefined
    
// 3 - execution phase - 
//     val1 = 1
//     val2 = 2
//     when result 1 comes =>addnum => ek naya executional context banta h i.e consist of(new variable environment + execution thread)-
//     -now memory phase and execution phase will run for result 1 - 
//     memory creation - 
//     val1 = undefined
//     val2 = undefined
//     total = undefined

//     execution phase - 
//     num1 = 1
//     num2 = 2
//     total = 3
//     then total return to global execution context
//     now executional context will be deleted once result1 execution ends
//     result1 = 3

//     result2 = again same process as result 1  - new (nve + thread) also known as sandbox
//     memory phase - 
//     val1 = undefined
//     val2 = undefined
//     total = undefined
//     execution phase - 
//     num1 = 1
//     num2 = 2
//     total = 3
//     then total return to global execution context
//     now executional context will be deleted once result2 execution ends
//     result1 = 12

// Callstacks
// first global execcution context
//  suppose there r 3 functions
//  one() , two() , three()
 
//  one() goes into callstack then execute then removed from callstack.. same as with two() and three()

//  now suppose - 
//  when two() is called inside function one()
//  then one() goes into callstack and then two() also goes into callstack
//  then LIFO applies
//  so two() goes outside and then one() goes outside
//  then three() inside execute and outside
// THIS IS JUST LIKE STACK 
// ISKO TRY KRNE K LIE INSPECT => SOURCES => SNIPPETS
