// 1
// 12
// 123
// 1234
// 12345

function numberPattern (num) {
    if(num < 1) return "Enter number greater than or equal to 1";
    let pattern = "";

    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= i; j++){
            pattern += j;
        }
        pattern += "\n"
    }
    return pattern;
}

console.log(numberPattern(5));