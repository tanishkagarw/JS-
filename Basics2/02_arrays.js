const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // 3 index of marvel heroes = [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heroes[3][0]) // superman

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator
console.log(all_new_heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// people prefer spreading over cancat

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_arr.flat() // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
console.log(real_another_array);
// bydefault 1 is the depth

const arr = another_arr.flat(Infinity);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Hitesh"})) // []


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // 100 200 300









