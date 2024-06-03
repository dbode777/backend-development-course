/**
 * Takes two sorted arrays and merges them together in the order specified. All elements are sorted between the two arrays.
 * @param {Array.<number>} arr1 First sorted array
 * @param {Array.<number>} arr2 Second sorted array
 * @param {string} order order in which you would like the array sorted. Use "desc" if you want to sort in descending order. Leave the parameter empty to sort in ascending order.
 * @returns {Array.<number>} merged array sorted by the order the user selected.
 */
const mergeSortedArrays = (arr1, arr2, order = "asc") => {
    let mergedArray = [];
    let i = 0, j = 0;

    if (typeof order !== "string") {
        order = "asc";
    };

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        };
    };

    // Handle the remaining elements
    // Only one of these will run as one of the arrays will have had all of its elements parsed in the while loops above.
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    };

    if (order === "desc") {
        mergedArray = mergedArray.reverse()
    };

    return mergedArray;
};

// Test Cases, comments are the expected results
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([], [1, 2, 3])); // [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 2], [2, 3, 4])); // [1, 2, 2, 2, 3, 4]
console.log(mergeSortedArrays([-3, -2, -1], [1, 2, 3])); // [-3, -2,-1, 1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([100, 200, 300], [50, 150, 250])); // [50, 100, 150, 200, 250, 300]
console.log(mergeSortedArrays([-10, 1, 2, 3, 4, 50, 60, 70, 100, 110], [-5, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125])); // [-10,-5, 1, 2, 3, 4, 5, 15, 25, 35, 45, 50, 55, 60, 65, 70, 75, 85, 95, 100, 105, 110, 115, 125]
console.log(mergeSortedArrays([], [1, 2, 3], "desc")); // [3, 2, 1]
