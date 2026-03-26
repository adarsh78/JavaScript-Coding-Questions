function totalPrice(arr) {
    const total = arr.reduce((acc, elem) => acc + elem.price, 0);
    return total;
}

console.log(
  totalPrice([
    { item: "A", price: 100 },
    { item: "B", price: 200 },
    { item: "C", price: 18 },
    { item: "D", price: 400 },
  ]),
);
