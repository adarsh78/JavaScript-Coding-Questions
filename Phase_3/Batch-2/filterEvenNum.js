function filterEvenNumbers (arr) {
   const newArr = arr.filter(ar => ar % 2 === 0);
   console.log(arr);
   return newArr;

}

console.log(filterEvenNumbers([1,2,3,4,5,6,7,8]));