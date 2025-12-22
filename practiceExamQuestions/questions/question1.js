/*
Write a function that accepts an array of numbers and returns the 2 largest numbers in the array. 
The largest values should be returned in an array where the first element in the array is the larger of the two elements. 
You may assume you will always be given an array that contains at least 2 numbers.
*/
function getTwoLargestNumbers(arr) {
    if (!arr || !Array.isArray(arr) || arr.length < 2) {
        throw new Error("The input needs to be an array of at least 2 elements")
    }
    const sortedArray = arr.sort((smallerValue,largerValue) => largerValue - smallerValue).slice(0,2)
    return sortedArray
}

module.exports = { getTwoLargestNumbers }