let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate)); // object


let mycreateddate = new Date(2023, 0, 23); // year, month indexing start from 0,  date
console.log(mycreateddate.toDateString());

let d = new Date(2032, 12, 21);
console.log(d.toDateString());

let newd = new Date(2023, 1, 23, 5, 6) // after date time starts.... hour minutes and seconds acc to 24 hour format
console.log(newd.toLocaleString());

// ab agar dd mm yy format chaiye toh
let newFormat = new Date("2023-01-14") // here month start from index = 1
console.log(newFormat.toDateString());

let indiasyntax = new Date("01-14-2023") // mm dd yy
console.log(indiasyntax.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); // time in miliseconds from 1 jan 1970

console.log(indiasyntax.getTime()); // in miliseconds
console.log(Math.floor(Date.now()/1000)) // in seconds


let newDate = new Date()
console.log(newDate.getDate()); // use get function to get the month or year or day or time
// get month me + 1 krna hota bcoz its indexed from 0 initially


newDate.toLocaleString('default', {
    // ctrl + space give the properties
    weekday: "long", // long - monday short - mon
})











