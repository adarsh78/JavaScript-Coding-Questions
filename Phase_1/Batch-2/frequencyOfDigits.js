// frequency of digits in a number

function frequency(num) {
  let obj = {};

  while (num > 0) {
    let digit = num % 10; // Get the last digit
    obj[digit] = (obj[digit] || 0) + 1;
    num = Math.floor(num / 10); // Remove the last digit
  }
  return obj;
}

console.log(frequency(123332));
