// Input : "javascript"

// Output : "avascrip"

function removeFirstAndLast (str) {
    return str.slice(1, str.length-1);

}

console.log(removeFirstAndLast("javascript"));
console.log(removeFirstAndLast("python"));