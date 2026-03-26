function flattenArray(arr) {
  // return arr.flat(); // only 1 level
  // return arr.flat(Infinity); // any level

  let resultArr = [];
  for (let char of arr) {
    if (Array.isArray(char)) {
      resultArr = resultArr.concat(flattenArray(char));
    } else {
      resultArr.push(char);
    }
  }
  return resultArr;
}

console.log(flattenArray([1, 2, [3, 4, [5], [6, [7, [8]]]]]));
