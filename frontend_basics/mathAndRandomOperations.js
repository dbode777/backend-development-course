const num = Math.random();
const n = 1;
const base = 10;
const decimalPlace = base ** n;

/**
 * Round numbers to the nth decimal place.
 * @param {Number} num The number to round.
 * @param {Int} degree The decimal place you want to round to. Positive values are to the right of the decimal. Negative values are to the left of the decimal. Default is base 10 for now, but this can be altered if desired.
 */
const roundedNum = (num, degree) => {
    round = Math.round(num * (degree)) / (degree);
    console.log(round);
    return round;
};
roundedNum(num, decimalPlace);

/**
 * Round down numbers to the nth decimal place.
 * @param {Number} num The number to round.
 * @param {Int} degree The decimal place you want to round to. Positive values are to the right of the decimal. Negative values are to the left of the decimal. Default is base 10 for now, but this can be altered if desired.
 */
const flooredNum = (num, degree) => {
    floor = Math.floor(num * (degree)) / (degree);
    console.log(floor);
    return floor;
};
flooredNum(num, decimalPlace);

/**
 * Round up numbers to the nth decimal place.
 * @param {Number} num The number to round.
 * @param {Int} degree The decimal place you want to round to. Positive values are to the right of the decimal. Negative values are to the left of the decimal. Default is base 10 for now, but this can be altered if desired.
 */
const ceiledNum = (num, degree) => {
    ceil = Math.ceil(num * (degree)) / (degree);
    console.log(ceil);
    return ceil;
};
ceiledNum(num, decimalPlace);

//Min, max and abs
const arr = [1, 2, 5, 3, 2]

const min = Math.min(...arr) // Output of 1 
const max = Math.max(...arr) // Output of 5
const abs = Math.abs(-5) // Output of 5

console.log(`There are ${abs} elements in the array. The range for this array is ${min} to ${max}.`);

const log2 = Math.log2(8); // 3
const log10 = Math.log10(10); // 1

console.log(log2);
console.log(log10);

// Use Infinity or -Infinity for comparisons or integrals. These values aren't actually infinitely large, just the largest storable number that can be stored in memory.

