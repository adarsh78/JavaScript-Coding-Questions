// using mathematical formula - (a*b)/gcd(a,b)

function gcd(num1, num2) {

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    if(num2 === 0){
        return num1;
    }

    return gcd(num2, num1 % num2);

}

function lcm(num1, num2) {
    if(num1 === 0 || num2 === 0) return 0
    return (num1 * num2) / gcd(num1, num2);
}

console.log(lcm(12, 80));
console.log(lcm(12, 0));