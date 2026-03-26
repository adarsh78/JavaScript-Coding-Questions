function sumOfEvenNumbers (arr) {
    return arr.filter(ar => ar % 2 === 0).reduce((acc, elem) => acc + elem, 0);
}
console.log(sumOfEvenNumbers([1,2,3,4,5,6,7,8]));