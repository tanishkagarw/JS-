if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: a is not defined
// console.log(c); // 30

// hence this proves that var is always assigned globally that's why we avoid var
// hence scope starts when {} braces are there



function one() {
    const username = "tanishk"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // website is not defined
    two()
}
one()


//_------------------------------------------interesting-------------------------------------------------

console.log(addone(5)); // 6
function addone(num) {
    return num+1
}


console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) { // this is also called an expression
    return num + 2
}


