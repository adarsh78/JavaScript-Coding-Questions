// Count vowels in a string

function countVowels (str) {
    let count = 0;
    let vowels = "aeiou";

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(countVowels("Learning"));
console.log(countVowels("JavaScript"));
console.log(countVowels("Aweripokula"));