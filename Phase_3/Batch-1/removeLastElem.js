// Input : [1,2,3]
// Output : [1,2]

function removeLastElem (arr) {
    const removedElement = arr.pop();
    console.log(removedElement);
    return arr;

}

console.log(removeLastElem([1,2,3]))