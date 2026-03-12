// Input : "1234567812345678"

// Output : "************5678"

function maskCreditCard (str) {

    let lastFour = str.slice(-4);
    return lastFour.padStart(str.length, "*");
}

console.log(maskCreditCard("1234567812345678"));