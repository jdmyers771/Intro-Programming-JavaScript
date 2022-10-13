//multiply function
function multiply(x,y) {
  return x * y;
}

//reader function
function reader(prompt) {
  rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let n1 = reader('Enter the first number: ');
let n2 = reader('Enter the second number ');
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`)