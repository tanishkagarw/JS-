function sayName() {
    console.log('t');
    console.log('a');
    console.log('n');
    console.log('i');
    console.log('s');
    console.log('h');
    console.log('k');
} 

sayName()

function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("tanishk")); // tanishk just logged in
console.log(loginUserMessage("")); //  just logged in
console.log(loginUserMessage()); // undefined just logged in

// empty string and undefined is considered as false


// now problem comes jab hum shopping krte hue items add krte jaate hai and there is no fix number of items
// to solve this problem we have rest operator
function calculateCartPrice(val1, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500)); // [ 400, 500 ]

// ----------------------------------------------functions with objects----------------------------------------------------
const User = {
    username : "tanishk",
    price: 199
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(User)
handleObject({
    username: "tanishk",
    price: 2000
})




