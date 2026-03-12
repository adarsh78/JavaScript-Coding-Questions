// Input : "johnsnow@gmail.com"
// Output : "johnsnow"

function extractUsername (str) {
    let index = str.indexOf("@");
    return str.slice(0, index);
}

console.log(extractUsername("johnsnow@gmail.com"));