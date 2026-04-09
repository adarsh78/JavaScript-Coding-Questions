// Input : [7,1,5,3,6,4]
// Output : 5

function bestTimeBuyAndSellStock(arr) {
  let buy = arr[0];
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    buy = Math.min(buy, arr[i]);
    profit = Math.max(profit, arr[i] - buy);
  }
  return profit;
}

console.log(bestTimeBuyAndSellStock([7, 1, 5, 3, 6, 4]));
