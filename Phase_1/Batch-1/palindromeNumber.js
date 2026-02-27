function palindrome (num) {

    let revNum = 0;
    let initialNum = num;
    while(num > 0) {
        const lastDigit = num % 10;
        revNum = (revNum * 10) + lastDigit
        num = Math.trunc(num / 10);
    }

    return revNum == initialNum ? true : false
}

console.log(palindrome(121))
console.log(palindrome(123))
console.log(palindrome(12321))
console.log(palindrome(1234321))
console.log(palindrome(12345321))