// Input : 42
// Output : "00042"

function addLeadingZeros (num, length) {
    let str = String(num);
    return str.padStart(length, "0");

}

console.log(addLeadingZeros(42, 5));