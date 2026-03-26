function countOccurences (arr) {
    let freq = {};
    for(let char of arr){
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

console.log(countOccurences(["a","b","a","c","b","a"]));