const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (item) { // function ka naam isilie ni hai kyuki ye callback function h
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// })


// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme) // function ka refrence dena hai sirf isilie printme() nhi likha


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); output shown below
//     // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// })


const myCoding = [
    {
        languagename: 'javascript',
        langfile: 'js'
    },
    {
        languagename: 'java',
        langfile: 'java'
    },
    {
        languagename: 'python',
        langfile: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagename);
    console.log(item.langfile);
})