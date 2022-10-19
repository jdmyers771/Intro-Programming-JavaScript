
let array1 = [1, 6, 3, 2];
let array2 = [-1, -6, -3, -2];
let array3 = [2,2];

console.log(array1.reduce((a, b) => Math.max(a, b), -Infinity));
console.log(array2.reduce((a, b) => Math.max(a, b), -Infinity));
console.log(array3.reduce((a, b) => Math.max(a, b), -Infinity));


