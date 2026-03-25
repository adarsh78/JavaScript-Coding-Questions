function extractSubArray (arr, subArrFrom, subArrTill) {
    return arr.slice(subArrFrom, subArrTill); // subArrTil not included
}

console.log(extractSubArray([1,2,3,4,5], 1, 4))