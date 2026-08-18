// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution ko thik karne k lie hamne IIFE ko implement
// ye iife implement to hogya hai pr ise rokne k lie last me hum semicolon ; lagate hai (explicitly)

(function chai() {
    console.log(`DB CONNECTED`)
})(); // DB CONNECTED -- the second parenthesis is of execution


( () => {
    console.log(`DB CONNECTED TWO`);
})();  // error if earlier parenthesis were not given after function chai

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("RAHUL");

