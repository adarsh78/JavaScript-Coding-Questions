function checkAnyEvenExist (arr) {
    return arr.some(ar => ar%2 === 0);

}

console.log(checkAnyEvenExist([1,3,5,7,8,9]));
console.log(checkAnyEvenExist([1,3,5,7,9]));