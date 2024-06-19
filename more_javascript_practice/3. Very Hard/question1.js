/**
 * Takes an array of numbers and returns the unique pairs of indices whose values' sum equals the targetSum. Each set of indices will be unique in the output array.
 * @param {Array.<Number>} numbers an array of numbers whose values will be checked against the targetSum
 * @param {Number} targetSum The target sum to check
 * @returns {Array.<Array.<Number>>} The array of unique pairs of indices whose total sum matched the targestSum.
 */
const findUniqueIndexPairs = (numbers, targetSum) => {
    const uniquePairs = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i; j < numbers.length; j++) {
            let pairSum = numbers[i] + numbers[j];
            let pairedArray = [i, j].sort((a, b) => a < b);
            if (pairSum === targetSum && !uniquePairs.includes(pairedArray) && j != i) {
                uniquePairs.push(pairedArray);
            };
        };
    };

    return uniquePairs;
};

// Test Cases, comments show the expected result
const numbers = [2, 4, -2, 1, 0, 5, -4];
const targetSum = 3;
console.log("Test Case 1");
console.log(findUniqueIndexPairs(numbers, targetSum)); // [[0, 3], [2, 5]]

const numbers2 = [1, 2, 3, 4];
const targetSum2 = 5;
console.log("Test Case 2");
console.log(findUniqueIndexPairs(numbers2, targetSum2)); // [[0, 3], [1, 2]]

const numbers3 = [1, 3, 5, 7];
const targetSum3 = 10;
console.log("Test Case 3");
console.log(findUniqueIndexPairs(numbers3, targetSum3)); // [[1, 3]]

const numbers4 = [-3, 1, 4, -1, 5];
const targetSum4 = 1;
console.log("Test Case 4");
console.log(findUniqueIndexPairs(numbers4, targetSum4)); // [[0, 2]]

const numbers5 = [2, 2, 3, 3, 4, 4];
const targetSum5 = 6;
console.log("Test Case 5");
console.log(findUniqueIndexPairs(numbers5, targetSum5)); //  [[0, 4], [1, 5], [2, 3]]

const numbers6 = [1000000, 999999, -1000000];
const targetSum6 = -1;
console.log("Test Case 6");
console.log(findUniqueIndexPairs(numbers6, targetSum6)); // [[ 0, 4 ], [ 0, 5 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ]]

const numbers7 = [0, 0, 0, 0, 1, -1];
const targetSum7 = 0;
console.log("Test Case 7");
console.log(findUniqueIndexPairs(numbers7, targetSum7)); //  [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3], [4, 5]] 