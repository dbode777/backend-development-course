/**
 * Determines the largest difference of ages for any pair within an array.
 * @param {[[number, number], ...]} agePairs Pair of ages
 * @returns {number} Largest age difference
 */
const findLargestAgeDifference = (agePairs = []) => {
    if (typeof agePairs !== 'object' || agePairs.length === 0) {
        return 0;
    };

    return Math.max(...agePairs.map((pair) => Math.abs(pair[1] - pair[0])));
};

// Test Cases, comments are the expected results
console.log(findLargestAgeDifference([[10, 20], [20, 30], [30, 40], [40, 50],
[50, 60]])) // 10
console.log(findLargestAgeDifference([[18, 30], [29, 40], [50, 60]])); // 12
console.log(findLargestAgeDifference([[1, 5], [6, 10], [11, 20], [21, 35], [36, 55], [56, 80]])); // 24
console.log(findLargestAgeDifference([[33, 78], [55, 102], [90, 150], [120, 180]])); // 60
console.log(findLargestAgeDifference([])); // 0
console.log(findLargestAgeDifference([[10, 7], [23, 10], [12, 8], [23, 30]])); // 13
console.log(findLargestAgeDifference([[100, 300], [200, 400], [500, 800], [600, 900]])); // 300
console.log(findLargestAgeDifference([[15, 5], [25, 10], [60, 40], [100, 60]])); // 40
console.log(findLargestAgeDifference([[5, 25], [26, 46], [47, 67], [68, 88], [89, 109]])); // 20