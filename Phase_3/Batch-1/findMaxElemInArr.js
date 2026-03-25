function findMax (arr) {
    // return Math.max(...arr);
    let maxElem = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > maxElem){
            maxElem = arr[i];
        }
    }
    return maxElem;
}

console.log(findMax([1,25,8,9,78]));