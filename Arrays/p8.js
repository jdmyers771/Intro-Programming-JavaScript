let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {

  return output = arr.reduce((filteredArray, string) => {
    let lengthString = string.length;
    if (lengthString % 2 !== 0) {
      filteredArray.push(lengthString);
    }

    return filteredArray
  }, [])

}