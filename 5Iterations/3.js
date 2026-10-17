// for of
const arr = [1, 2, 3, 4, 5]
for(const num of arr) {
    console.log(num);
}


// Maps are object that hold key value pairs...only unique key value pairs exist
const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

console.log(map);// Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

for(let x of map) {
    console.log(x);
    // [ 'a', 1 ]
    // [ 'b', 2 ]
    // [ 'c', 3 ]
}

for(let [y, z] of map) {
    console.log(y); // keys
    console.log(z); // values
}

// const obj = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// }
// obj is not iterable..so durse tareeke hote hai object ko iterate krne k lie

