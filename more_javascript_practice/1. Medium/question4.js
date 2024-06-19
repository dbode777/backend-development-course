/**
 * Rotates the elements of array, arr, k amount of times. This shifts the positions of the elements by 1 index value, and shifts the last element to the beginning of the array.
 * @param {Array} arr array whose elements will be rotated from left to right (clockwise)
 * @param {Number} k non-negative integer specifying how many times to rotate the array
 */
const rotateArray = (arr, k) => {
    if (k < 1) {
        console.log(`k is set to a non-negative number, so the array remains as: ${arr}`);
        return;
    };

    for (let i = 0; i < k; i++) {
        const rotated_element = arr.pop();
        arr.unshift(rotated_element);
    }
    console.log(`New array after rotation: ${arr}`);
};

// Test Cases, comments are expected results
rotateArray([1, 2, 3, 4, 5], 2); // 4,5,1,2,3
rotateArray([1, 2, 3, 4, 5], 5); // 1,2,3,4,5
rotateArray([1, 2, 3, 4, 5], 8); // 3,4,5,1,2
rotateArray([1, 2, 3, 4, 5], 0); // 1,2,3,4,5
rotateArray([], 3); // 
rotateArray([1], 10); // 1