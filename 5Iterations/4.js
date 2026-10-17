const myobj = {
    js : 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobj) {
    console.log(key); // all keys will be displayed
    console.log(myobj[key]); // all values will be displayed
    
}

const prog = ['js', 'rb', 'py', 'java', 'cpp']

for(const key in prog) {
    console.log(key); // now it will print the index always i.e 0 then 1 then 2 then 3...
    console.log(prog[key]); // this will print actual prog array
}

// is waale for loop se map iterate nhi ho skta