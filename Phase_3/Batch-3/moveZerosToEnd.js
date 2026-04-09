// Input : [0,1,0,3,12]
// Output : [1,3,12,0,0]

function moveZerosToEnd(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }

  while (newArr.length < arr.length) {
    newArr.push(0);
  }
  return newArr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));

// function moveZerosToEnd(arr) {
//     const nonZeros = arr.filter(num => num !== 0);
//     const zeros = arr.filter(num => num === 0);
//     return [...nonZeros, ...zeros]; // Merge both
// }
