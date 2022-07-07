// BUILT-IN SORT
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// converts input to strings and compares alphabetical order, not numerical
let sortedString = nums.slice().sort();
console.log(sortedString);
// [
//   1024, 128, 16,   2,
//    256,  32,  4, 512,
//     64,   8
// ]

// EXAMPLE: ASCENDING NUMERICAL SORT
let numSortAsc = nums.slice().sort((a, b) => {
  return a - b;
});
console.log(numSortAsc);

// EXAMPLE: SORT BY EVEN THEN ODD
function oddEvenCompare(a, b) {
  if (a % 2 === 1 && b % 2 === 0) return 1;
  if (a % 2 === 0 && b % 2 === 1) return -1;
  return a - b;
}
let oddEvenSorted = nums.slice().sort(oddEvenCompare);
console.log(oddEvenSorted);
