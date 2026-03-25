// Input : [1,2,4], index=2, value=3
// Output : [1,2,3,4]

function insertElementUsingSplice (arr, index, value) {
    const length = arr.splice(index, 0, value);
    console.log(length);
    return arr;

}

console.log(insertElementUsingSplice([1,2,4], 2, 3))