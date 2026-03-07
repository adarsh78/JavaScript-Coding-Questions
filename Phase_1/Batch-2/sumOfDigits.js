// sum of digits until single digit

function sumOfDigits (num) {

    let sum = 0;
    if(num === 0) {
        return 0;
    }

    while(num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.trunc(num / 10);    
    }
    return sum > 9 ? sumOfDigits(sum) : sum;

}

console.log(sumOfDigits(12345));
console.log(sumOfDigits(9842));