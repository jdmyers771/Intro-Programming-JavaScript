let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(arr) {
  let output = arr.reduce((accumulator, element) => accumulator + (element ** 2), 0);
  return output
}