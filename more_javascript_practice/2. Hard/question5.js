/**
 * Sorts an array in the order specified by the user. Highest to lowest based on the frequency that a number appears in the array. If there's a tie, the smallest number goes first for ascending, last for descending. Ex. input: [1,2,1,2], asc; output: [1,1,2,2]. 
 * @param {Array.<Number>} arr array of numbers you wish to sort by
 * @param {String} order order in which you would like to sort the array. Valid options are "asc" for ascending or any other string for descending. Default is "asc".
 * @returns {Array.<Number>} returns the sorted array
 */
const customSort = (arr = [], order = "asc") => {
    const frequency = {};

    arr.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    // Manual bubble sorting in ascending order. TODO: study sorting algorithms
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            const shouldSwap = order.toLowerCase() === "asc" ?
                frequency[arr[j]] < frequency[arr[j + 1]] ||
                (frequency[arr[j]] === frequency[arr[j + 1]] && arr[j] > arr[j + 1]) :
                frequency[arr[j]] < frequency[arr[j + 1]] ||
                (frequency[arr[j]] === frequency[arr[j + 1]] && arr[j] < arr[j + 1]);
            if (shouldSwap) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            };
        };
    };

    return arr
};

// Test Cases
console.log(customSort([9, 7, 6, 11], "asc")); // [6, 7, 9, 11]
console.log(customSort([2, 3, 2, 3, 4, 4])); // [2, 2, 3, 3, 4, 4]
console.log(customSort([])); // []
console.log(customSort([5, 5, 5, 4])); // [5, 5, 5, 4]
console.log(customSort([-1, -3, -1, -3, -2, -2], "asc")); // [-3, -3, -2, -2, -1, -1]
console.log(customSort([1000, 2000, 3000, 1000, 2000, 1000], "asc")); // [1000, 1000, 1000, 2000, 2000, 3000]
console.log(customSort([40])); // [40]
console.log(customSort([1, 2, 3], "desc")) // [3, 2, 1]
console.log(customSort([1, 1, 3, 2, 3], "")) // [3, 3, 1, 1, 2]