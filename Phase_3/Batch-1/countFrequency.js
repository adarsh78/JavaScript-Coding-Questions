function countFrequency (arr) {
    let freq = {};
    for(char of arr) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

console.log(countFrequency([1,2,3,4,1,2,4,5,6,6,8,6]));