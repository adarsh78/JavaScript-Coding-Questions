function removeElementUsingSplice (arr, index) {
    const removed = arr.splice(index, 1); // (index, number of elements to be removed, replace with)
    console.log(removed);
    return arr;
    
}

console.log(removeElementUsingSplice([1,2,3,4,5], 1));
console.log(removeElementUsingSplice([1,2,3,4,5], 3));