function firstOccuranceIndex(str, character) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) {
      return i;
    }
  }
}
console.log(firstOccuranceIndex("hello world", "o"));
console.log(firstOccuranceIndex("manuscrriprts", "r"));
