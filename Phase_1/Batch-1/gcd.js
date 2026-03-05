// gcd or hcf

function gcd(num1, num2) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    if(num2 === 0){
        return num1;
    }

    return gcd(num2, num1 % num2);
}

console.log(gcd(12, 18));
console.log(gcd(15, 20));
console.log(gcd(20, 15));
console.log(gcd(20, 28));
