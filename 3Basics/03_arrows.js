const user = {
    username: "tanishk",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`); // this refers to the current context
        // console.log(this); 
        // output of this will be
        // {
        //     username: 'tanishk',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        // }
    }
}

// user.welcomeMessage() // tanishk , Welcome to website -- provided console.log(this) is commented
// user.username = "Sam"
// user.welcomeMessage() // Sam , Welcome to website -- provided console.log(this) is commented


console.log(this); // {} because current context is empty


// function chai() {
//     let username = "tanishk"
//     console.log(this.username);
// }
// chai() // undefined



// function code() {
//     console.log(this)
// }
// code() // tagda output aata hai is baar

// hence this works only in objects not in functions



const chai = function() {
    let username = "tanishk"
    console.log(this.username);
}

chai() // undefined


const chai2 = () => { // arrow function
    let username = "tanishk"
    console.log(this);
}
chai() // {} and if this.username is executed undefined comes


// explicit return mtlb jab hame return lagana padta hai
// ---------------------------------implicit return----------------------------------
// const addTwo = (num1, num2) => num1 + num2 // aise bhi likh skte hai and curly braces lagake bhi likh skte hain
// const addTwo = (num1, num2) => (num1 + num2) // curly braces me daala to return likhna padta hai


// but to return an object you must use parenthesis()
const addTwo = (num1, num2) => ({username: "tanishk"})
console.log(addTwo(3, 4))  // { username: 'tanishk' }




