// Input : "I love JS. JS is great"

// Output : "I love JavaScript. JS is great"

function replaceFirstOccurance (str, replaceTerm, newTerm) {
    return str.replace(replaceTerm, newTerm);
    // return str.replaceAll(replaceTerm, newTerm);
}

console.log(replaceFirstOccurance("I love JS. JS is great", "JS", "JavaScript"));