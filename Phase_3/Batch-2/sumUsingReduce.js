function sumUsingReduce (arr) {
    return arr.reduce((acc, elem) => acc + elem, 0);

}
console.log(sumUsingReduce([1,2,3,4,5,6]));