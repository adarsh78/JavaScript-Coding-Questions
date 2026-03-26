function groupByAge(arr) {
  let obj = {};
  for (char of arr) {
    if (!obj[char.age]) {
      obj[char.age] = [];
    }

    obj[char.age].push(char);
  }
  return obj;
}

console.log(
  groupByAge([
    { name: "A", age: 20 },
    { name: "B", age: 20 },
    { name: "C", age: 25 },
  ]),
);
