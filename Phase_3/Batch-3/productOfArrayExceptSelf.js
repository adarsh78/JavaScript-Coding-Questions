// Input : [1,2,3,4]
// Output : [24,12,8,6]

function productOfArrayExceptSelf(arr) {
  let leftArr = [];
  let rightArr = [];
  let result = [];
  leftArr[0] = 1;
  rightArr[arr.length - 1] = 1;

  for (let i = 1; i < arr.length; i++) {
    leftArr[i] = leftArr[i - 1] * arr[i - 1];
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * arr[i + 1];
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = leftArr[i] * rightArr[i];
  }

  return result;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
