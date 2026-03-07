function countDigit(num) {
  num = Math.abs(num);

  if (num === 0) return 1;
  let count = 0;

  while (num > 0) {
    num = Math.trunc(num / 10);
    count++;
  }
  return count;
}

console.log(countDigit(1234));
console.log(countDigit(12332674));
console.log(countDigit(-1234));
console.log(countDigit(0));
