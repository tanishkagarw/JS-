// const tinderUser = new Object(); 
const tinderUser = {}

tinderUser.id = "tanishk12"
tinderUser.email = "tanishkagrawal9882@gmail.com"
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email : "25bcs109@nith.ac.in",
    fullname : {
        userfullname : {
            firstname : "tanishk",
            lastname : "agarwal"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);

const obj3 = {...obj1, ...obj2} // spreading
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj4 = Object.assign(obj1, obj2)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj4 === obj1) // true
 
const obj5 = Object.assign({}, obj1, obj2) // ye curly bracket dena achha hota hai
console.log(obj5 === obj1); // false


const users = [
    {
        id: 1,
        email: "32fmail.com", 
    },
    {
        id: 2,
        email: "32gmail.com", 
    },
    {
        id: 3,
        email: "32gfmail.com", 
    },
    {
    }
] // array of objects

console.log(users[1].email);

console.log(Object.keys(tinderUser)); // [ 'id', 'email', 'isLoggedIn' ] 
console.log(Object.values(tinderUser)); // [ 'tanishk12', 'tanishkagrawal9882@gmail.com', false ]
console.log(Object.entries(tinderUser)); // output below | array ke inside array milta hai
// [
//   [ 'id', 'tanishk12' ],
//   [ 'email', 'tanishkagrawal9882@gmail.com' ],
//   [ 'isLoggedIn', false ]
// ]


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true



// destructuring
const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh sir",
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor); // hitesh sir

// also we can define it in our own way just like ll for long long
const {courseInstructor: inst} = course;
console.log(inst); // hitesh sir


// backend se jab values aati hai to wo json format me aati hai
// json se api call hoti hai to kuch aisa dikhta hai --keys and val dono string hoti hai.. pr numbers and true, false directly daal skte h
// Yes, Web APIs commonly return data in JSON format which is seen below

// {
//     "name": "tanishk",
//     "coursename": "js in hindi",
//     "price": 999,
//     "studying?": true
// }


// array bhi mil skta hai api calling se which is shown below
// [
//     {},
//     {},
//     {}
// ]

