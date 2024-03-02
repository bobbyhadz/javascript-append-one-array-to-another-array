// EXAMPLE 1 - Append one Array to another Array in JavaScript

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // 👉️ ['a', 'b', 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Append one Array to another array using `Array.concat()`

// const arr1 = ['a', 'b'];
// const arr2 = ['c', 'd'];

// const arr3 = arr1.concat(arr2);

// console.log(arr3); // 👉️ ['a', 'b', 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Append one Array to another Array using `push()`

// const arr1 = ['a', 'b'];

// const arr2 = ['c', 'd'];

// arr1.push(...arr2);

// console.log(arr1); // 👉️ ['a', 'b', 'c', 'd', 'e']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Append one Array to another Array using a `while` loop

// const arr1 = ['a', 'b'];

// const arr2 = ['c', 'd'];

// while (arr2.length) {
//   arr1.push(arr2.shift());
// }

// console.log(arr1); // 👉️ [ 'a', 'b', 'c', 'd' ]

// console.log(arr2); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 5 - Append one Array to another Array using `Array.forEach()`

// const arr1 = ['a', 'b'];

// const arr2 = ['c', 'd'];

// for (const element of arr2) {
//   arr1.push(element);
// }

// console.log(arr1); // 👉️ [ 'a', 'b', 'c', 'd' ]

// ------------------------------------------------------------------

// // EXAMPLE 6 - Append one Array to another Array using `for...of`

// const arr1 = ['a', 'b'];

// const arr2 = ['c', 'd'];

// for (const element of arr2) {
//   arr1.push(element);
// }

// console.log(arr1); // 👉️ [ 'a', 'b', 'c', 'd' ]

// ------------------------------------------------------------------

// // EXAMPLE 7 - Append one Array to another Array using a `for` loop

// const arr1 = ['a', 'b'];

// const arr2 = ['c', 'd'];

// for (let index = 0; index < arr2.length; index++) {
//   arr1.push(arr2[index]);
// }

// console.log(arr1); // 👉️ [ 'a', 'b', 'c', 'd' ]
