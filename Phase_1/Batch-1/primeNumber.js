function primeNumber(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;

  for (let i = 3; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    } 
  }
  return true;
}

console.log(primeNumber(7));
console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(0));
console.log(primeNumber(-2));
console.log(primeNumber(9));
console.log(primeNumber(11));
console.log(primeNumber(13));
console.log(primeNumber(21));
console.log(primeNumber(23));
console.log(primeNumber(25));
console.log(primeNumber(28));
console.log(primeNumber(37));
