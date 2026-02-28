// 🧠 Q1 — Reverse a Number (Without converting to string)

// Input:
// 12345

// Output:
// 54321

// Edge cases:

// Negative number
// Ending zero (1200 → 21)
// Large number

function reverseNumber(num) {

  let sign = Math.sign(num);
  num = Math.abs(num);
  let revNum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    revNum = revNum * 10 + lastDigit;
    num = Math.trunc(num / 10);
  }
  return revNum * sign;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12300));
console.log(reverseNumber(12356789012345));
console.log(reverseNumber(-1234));
