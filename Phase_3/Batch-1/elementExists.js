function checkElementExists (arr, elem) {
    return arr.includes(elem);
}

console.log(checkElementExists([1,2,3,4,5], 3));
console.log(checkElementExists([1,2,3,4,5], 6));
console.log(checkElementExists([1,2,3,4,5], 2));