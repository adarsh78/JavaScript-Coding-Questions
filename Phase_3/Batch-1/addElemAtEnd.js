// Input : [1,2,3], 4
// Output : [1,2,3,4]

function addElementAtEnd (arr, elem) {
    let length = arr.push(elem);
    console.log(length);
    return arr;
}

console.log(addElementAtEnd([1,2,3], 4));