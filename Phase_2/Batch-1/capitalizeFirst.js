function capitalize(str) {
    if(str.charAt(0).toLowerCase()){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

}

console.log(capitalize("javaScript"));
console.log(capitalize("TypeScript"));
console.log(capitalize("python"));