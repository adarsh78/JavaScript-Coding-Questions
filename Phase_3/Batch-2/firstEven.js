function findFirstEven (arr) {
    return arr.find(ar => ar%2 === 0);
}

console.log(findFirstEven([6,1,8,2,3,4,5]));