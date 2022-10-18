let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let output = [];
for(let i in obj){
  output.push(i.toUpperCase());
}

console.log(output);