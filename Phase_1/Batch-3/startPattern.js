// *
// **
// ***
// ****
// *****

function starPattern (num) {
    if(num < 1) return "Enter number greater than 1";

    let pattern = ""

    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= i; j++){
           pattern += "* "
        }
        pattern += "\n"
    }
    return pattern;
}

console.log(starPattern(5));
console.log(starPattern(1));