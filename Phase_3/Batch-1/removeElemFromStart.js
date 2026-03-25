// Input : [1,2,3]
// Output : [2,3]

function removeFirstElement (arr) {
    const removedElem = arr.shift()
    console.log(removedElem);
    return arr;
}

console.log(removeFirstElement([1,2,3]));