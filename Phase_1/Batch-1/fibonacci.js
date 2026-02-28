// Print Fibonacci till N (Iterative)

// Input: 7
// Output:
// 0 1 1 2 3 5 8

function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

for(let i=0; i<(num = 7); i++){
    console.log(fibonacci(i));
}