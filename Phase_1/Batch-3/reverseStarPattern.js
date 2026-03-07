// *****
// ****
// ***
// **
// *

function reverseStarPattern(num) {
  let pattern = "";
  if (num < 1) return "Enter number greater than or equal to 1";

  for (let i = 1; i <= num; i++) {
    for (let j = 0; j <= num - i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(reverseStarPattern(5));
console.log(reverseStarPattern(0));
console.log(reverseStarPattern(6));
