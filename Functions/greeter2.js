
//reader function
function reader(prompt) {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
};

let firstName = reader("What is your first name? ");
let lastName = reader("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);