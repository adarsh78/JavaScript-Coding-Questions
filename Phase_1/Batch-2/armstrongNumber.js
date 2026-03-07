// An Armstrong number (or narcissistic number) is a positive integer equal to the sum of its own digits,
// each raised to the power of the total number of digits. For instance 153 is a 3-digit Armstrong number because 1 pow 3 + 5 pow 3 + 3 pow 3 = 153

function isArmstrongNumber(num) {
  let digits = String(num).length;
  let originalnumber = num;
  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    sum += lastDigit ** digits;
    num = Math.trunc(num / 10);
  }
  return sum === originalnumber ? true : false;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(151));
console.log(isArmstrongNumber(8));
console.log(isArmstrongNumber(9474));
