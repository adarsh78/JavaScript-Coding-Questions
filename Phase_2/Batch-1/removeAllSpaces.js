function removeAllSpaces (str) {
    return str.replaceAll(" ", "");
    // return str.split(" ").join("");

}

console.log(removeAllSpaces("I Am Learning JavaScript"));
console.log(removeAllSpaces("Hello world"));