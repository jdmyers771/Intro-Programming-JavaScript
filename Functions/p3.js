rlSync = require('readline-sync');

n1 = rlSync.question("Enter first number.\n");
n2 = rlSync.question("Enter second number.\n");

function multiply(x,y) {
  let ans = Number(x) * Number(y);
  return console.log(`${x} * ${y} = ${ans}`)
};

multiply(n1, n2);