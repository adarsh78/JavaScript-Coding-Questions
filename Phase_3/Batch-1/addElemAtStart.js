// Input : [2,3,4], 1
// Output : [1,2,3,4]

function addElementAtStart (arr, elem) {
    const length = arr.unshift(elem);
    console.log(length);
    return arr;
}

console.log(addElementAtStart([2,3,4], 1));