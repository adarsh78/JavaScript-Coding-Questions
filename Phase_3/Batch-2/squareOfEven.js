function squareOfEvenNumbers (arr) {
    const newArr = arr.filter(ar => ar % 2 === 0).map(ar => ar*ar);
    console.log(arr);
    return newArr;
}

console.log(squareOfEvenNumbers([1,2,3,4,5,6,7,8]));