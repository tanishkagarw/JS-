const promise1 = new Promise(function(resolve, reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task complete");
        // connecting resolve with .then
        resolve()
    }, 1000)
});


promise1.then(function(){
    console.log("Promise consumed");
}) // .then have connection with resolve


new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise 2 completed")
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Tanishk", email: "chai@example.com"})
    }, 1000)
})
promise3.then(function(user){
    console.log(user)
})


const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "Tanishk", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("Promise is resolved or rejected"))



// async await directly error handle nhi kr skte
const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: promise5 went wrong")
        }
    }, 1000)
})
async function consumepromise5(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumepromise5()


// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getallusers()


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})