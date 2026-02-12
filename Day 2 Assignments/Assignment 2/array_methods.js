const numbers = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

console.log("Original array:");
console.log(numbers);

// 1. Use map to multiply each array element by 2
// map creates a NEW array and does not change the original one
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log("Each number multiplied by 2 using map:");
console.log(doubledNumbers);

// 2. Use filter to find numbers greater than 10
// filter also returns a new array that only contains elements which pass the condition
const greaterThanTen = numbers.filter(function (num) {
  return num > 10;
});

console.log("Numbers greater than 10 using filter:");
console.log(greaterThanTen);

// 3. Use reduce to find the sum of array elements
// reduce takes an accumulator and the current value and keeps combining them
const sumOfNumbers = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of accumulator

console.log("Sum of all numbers using reduce:");
console.log(sumOfNumbers);

// 4. Reverse an array
// reverse() changes (mutates) the original array
const numbersCopy = numbers.slice(); // makes a copy so that original stays same
numbersCopy.reverse();

console.log("Reversed array (copy of original):");
console.log(numbersCopy);