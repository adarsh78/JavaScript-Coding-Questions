function extractNames(arr) {
    const nameArr = arr.map(ar => ar.name);
    return nameArr;
}

console.log(
  extractNames([
    { name: "Adarsh", age: 25 },
    { name: "Rahul", age: 30 },
  ]),
);
