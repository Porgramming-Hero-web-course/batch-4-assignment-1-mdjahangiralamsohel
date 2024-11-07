// Problem-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (numbers: number[]): number => {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
};

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
