// Input : 42
// Output : "42000"

function addTrailingZeros (num, length) {
    let str = String(num);
    return str.padEnd(length, "0");

}

console.log(addTrailingZeros(42, 5))