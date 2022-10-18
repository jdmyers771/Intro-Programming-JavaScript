let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddStrings(arr)); // => [1, 5, 3]


function oddStrings(arr) {
  let output = arr.map(val => val.length).filter(val => (val % 2))
  return output
};