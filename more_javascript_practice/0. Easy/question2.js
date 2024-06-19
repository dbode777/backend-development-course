/**
 * Take an array of numbers and return the sum of all even numbers found in the array.
 * @param {array[number]} numbers input array
 * @returns {number} sum of all even numbers found in the input array.
 */
const sumEvenNumbers = (numbers) => {
    let sum = 0;
    if (!numbers || !Array.isArray(numbers)) {
        // If an empty array or the input is not an array, no even numbers, so sum would be 0.
        return 0;
    };

    for (number of numbers) {
        if (typeof (number) !== 'number') {
            // Skipping past any elements that aren't numbers
            continue;
        };

        if (number % 2 === 0) {
            sum += number;
        }
    };

    return sum;
}

// Test Cases, comments are expected result
console.log(sumEvenNumbers(2)) // 0
console.log(sumEvenNumbers('2')) // 0
console.log(sumEvenNumbers(['2', '4', '6'])) // 0
console.log(sumEvenNumbers([2, 4, 6, 8, 10])); // 30
console.log(sumEvenNumbers([1, 3, 5, 7, 9])); // 0
console.log(sumEvenNumbers([-2, -4, -6, -8, -10])); // 30
console.log(sumEvenNumbers([0, 1, 2, 3, 4])); // 6
console.log(sumEvenNumbers([11, 22, 33, 44, 55])); // 66
console.log(sumEvenNumbers([])); // 0
console.log(sumEvenNumbers([-2, -4, -6, -8, -10, 0, 2, 4, 5])); // -24