function findIndexOfFirstEven (arr) {
    return arr.findIndex(ar => ar%2 === 0);

}

console.log(findIndexOfFirstEven([1,4,2,4,5,6,7,8]));