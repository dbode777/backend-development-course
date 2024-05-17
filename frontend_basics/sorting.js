const arr = [1, "6.1", 2, 3, 5, 6.2, 7, 88, 31];
//Use a sorting function if you don't want to sort based on ASCII characters
const sortedArr = arr.sort((a, b) => a - b); // use b - a to reverse sort order or use .reverse()
console.log(sortedArr);
console.log(arr);