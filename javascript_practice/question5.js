/*  
    For this question you will write a JavaScript function called: mathIsFun This function will have one parameter called “numberString”. The string will contain a set of numbers, all separated by |’s. Your job will be to determine all of the numbers in the string and return the largest number that can be created by adding two of the numbers. You should return this number from the function.
*/

const delimiter = '|';
const numberString = '12|13|-4|0|';
const amt = 3;
let largestSum = 0;

/**
 * Returns the largest sum of any two numbers retrieved from a string of numbers. Each value between the delimiter must be a number.
 * @param {string} numberString a string containing numbers separated by a delimiter
 * @param {string} delimiter The delimiter to parse the numberString by.
 * @param {number} amtOfNumsToSum The amount of numbers you want to sum together.
 * @returns {number} The largest sum of any two numbers found within the numberString.
 */
const mathIsFun = (numberString, delimiter, amtOfNumsToSum) => {
    var numbers = numberString.split(delimiter);
    for (i = 0; i < amtOfNumsToSum; i++) {
        const max = Math.max(...numbers);
        largestSum += max;
        numbers = numbers.filter((x) => x != max);
    }
    return largestSum;
};

console.log(mathIsFun(numberString, delimiter, amt));