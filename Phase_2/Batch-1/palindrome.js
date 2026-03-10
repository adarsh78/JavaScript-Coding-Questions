function palindrome (str) {
    let revStr = "";

    for(let i = str.length-1; i >= 0; i--){
        revStr += str[i];
    }

    return revStr === str ?  true : false;

}
console.log(palindrome("madam"));
console.log(palindrome("hello"));
console.log(palindrome("nitin"));