// Example
// 145
// Process
// 1! + 4! + 5!
// 1 + 24 + 120 = 145

function factorial (num) {
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}

function strongNumber (num) {
    let sum = 0;
    let originalNumber = num;
    if(num < 1) return false
    
    while(num >= 1){
        let lastDigit = num % 10;
        sum += factorial(lastDigit);
        num = Math.trunc(num / 10);
    }
    return sum === originalNumber ? true : false;
}

console.log(strongNumber(145));
console.log(strongNumber(146));