// Input: 
// listen
// silent

// Output: 
// true

function chechAnagram (str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length) {
        return false;
    }

    let counter = {};

    for(let char of str1){
        counter[char] = (counter[char] || 0) + 1;
    }

    for(let char of str2){
        if(!counter[char]){
            return false;
        }
        counter[char]--
    }
    return true; // Time Complexity - O(n)

    // return str1.split("").sort().join("") === str2.split("").sort().join(""); // Time Complexity - O(nlogn)

}

console.log(chechAnagram("silent", "listen"));
console.log(chechAnagram("hello", "world"));
console.log(chechAnagram("hello", "ollhe"));