// check if a string contains another string

function checkStringContainsAnotherString (str1, str2) {
    return str1.toLowerCase().includes(str2.toLowerCase()) ? true : false;
}

console.log(checkStringContainsAnotherString("JavaScript", "script"));
console.log(checkStringContainsAnotherString("JavaScript", "scrip"));
console.log(checkStringContainsAnotherString("JavaScript", "python"));