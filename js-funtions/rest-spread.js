const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// ... rest -> ... spread 
const array3 = [...array1, 'AAA', ...array2, ...[7, 8, 9]];
console.log(array3);
