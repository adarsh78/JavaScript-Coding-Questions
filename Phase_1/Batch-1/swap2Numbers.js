// without temp variable

function swap (num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    return [num1, num2];

    //destructuring
    // [a,b] = [b,a];

}

console.log(swap(5,10));
console.log(swap(4,6));
console.log(swap(7,2));
console.log(swap(3,9));