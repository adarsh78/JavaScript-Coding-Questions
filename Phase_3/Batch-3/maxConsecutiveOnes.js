// Input : [1,1,0,1,1,1]
// Output : 3

function maximumConsecutiveOnes(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }
  }

  return count;
}

console.log(maximumConsecutiveOnes([1, 1, 0, 1, 1, 1]));
