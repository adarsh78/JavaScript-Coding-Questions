function filterAdults(arr) {
    const newArr = arr.filter(ar => ar.age >= 18);
    return newArr;
}

console.log(
  filterAdults([
    { name: "A", age: 17 },
    { name: "B", age: 20 },
    { name: "C", age: 18 },
    { name: "D", age: 16 },
  ]),
);
