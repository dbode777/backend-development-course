/**
 * Takes an array whose elements are 2D arrays representing intervals and reduces all overlapping intervals into a single interval.
 * @param {Array.<Array<Number, Number>>} intervals An array of 2D arrays each containing a range of numeric intervals. The initial index of each array will be smaller than the last index.
 * @returns {Array} An array of 2D arrays containing the merged intervals. If empty array is passed as the input, an empty array is returned.
 */
const mergeIntervals = (intervals) => {

    if (intervals.length === 0) {
        return [];
    }

    let mergedIntervals = [].sort();
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let startingInterval = sortedIntervals.shift();

    if (sortedIntervals.length === 0) {
        return [startingInterval];
    }

    let lastInterval = false;

    while (!lastInterval) {
        let endingInterval = [];
        if (sortedIntervals.length > 0) {
            endingInterval = sortedIntervals.shift();
        } else {
            lastInterval = true;
        };

        if ((!lastInterval && startingInterval[1] >= endingInterval[0] && startingInterval[1] >= endingInterval[1])) {
            continue; // Range of the starting interval completely overlaps the next interval
        } else if ((!lastInterval && startingInterval[1] >= endingInterval[0] && startingInterval[1] <= endingInterval[1])) {
            startingInterval = [startingInterval[0], endingInterval[1]];
        } else if (!lastInterval && startingInterval[1] <= endingInterval[0]) {
            mergedIntervals.push(startingInterval)
            startingInterval = endingInterval;
        } else {
            mergedIntervals.push(startingInterval);
        };
    };

    return mergedIntervals;
};

// Test Cases, expected results in the comments
console.log('Test case 1')
const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals1)); // [[1, 6], [8, 10], [15, 18]]

console.log('Test case 2')
const intervals2 = [[1, 4], [4, 5]];
console.log(mergeIntervals(intervals2)); // [[1, 5]]

console.log('Test case 3')
const intervals3 = [[1, 2], [3, 4], [5, 6]];
console.log(mergeIntervals(intervals3)); // [[1, 2], [3, 4], [5, 6]]

console.log('Test case 4')
const intervals4 = [[1, 10], [2, 3], [4, 5], [6, 7]];
console.log(mergeIntervals(intervals4)); // [[1, 10]]

console.log('Test case 5')
const intervals5 = [[1, 5]];
console.log(mergeIntervals(intervals5)); // [[1, 5]]

console.log('Test case 6')
const intervals6 = [[-10, -8], [-6, -3], [-4, 0], [1, 5]];
console.log(mergeIntervals(intervals6)); // [[-10,-8], [-6, 0], [1, 5]]

console.log('Test case 7')
const intervals7 = [[2, 6], [1, 3], [8, 10], [15, 18], [18, 21]];
console.log(mergeIntervals(intervals7)); // [[1, 6], [8, 10], [15, 18]]
