function checkAllArePositive (arr) {
    return arr.every(ar => ar > 0);

}

console.log(checkAllArePositive([1,2,-3,4,5,6]));
console.log(checkAllArePositive([1,2,3,4,5,6]));