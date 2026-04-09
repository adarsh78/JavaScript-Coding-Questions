// Input : [1,1,1], k = 2
// Output : 2

function subArraySumEqualToK(arr, target) {
  let count = 0;

  for (let start = 0; start < arr.length; start++) {
    let currentSum = 0;
    for (let end = start; end < arr.length; end++) {
      currentSum += arr[end];

      if (currentSum === target) {
        count++;
      }
    }
  }
  return count;
}

console.log(subArraySumEqualToK([1, 1, 1], 2));
console.log(subArraySumEqualToK([1, 2, 3], 3));
console.log(subArraySumEqualToK([1, 1, 1], 3));
