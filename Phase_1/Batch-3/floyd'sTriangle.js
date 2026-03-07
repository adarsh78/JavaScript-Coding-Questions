// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function floydTriangle (num) {
    let pattern = "";
    let currentNumber = 1;
    if(num < 1) return "Enter number greater than or equal to 1";

    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= i; j++){
            pattern += currentNumber + " ";
            currentNumber++;
        }
        pattern += "\n";
    }
    return pattern
}

console.log(floydTriangle(5));
console.log(floydTriangle(0));
console.log(floydTriangle(7));