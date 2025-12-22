/*
Write a function that has two parameters, the first being an array of strings, 
the second being an array of unique integers (whole numbers). 
Your function should return the number of strings in the input array that have a length contained 
in the second array. 
If the array of numbers is empty you should return 0. 
See the sample input for further explanation.
*/
function expectedWordCount(stringArr, intArr) {
    if (!stringArr || !Array.isArray(stringArr)) {
        throw new Error("The first parameter should have an array of string values")
    }

    if (!intArr || !Array.isArray(intArr)) {
        throw new Error("The second parameter should have an array of integer values")
    }

    if (intArr.length === 0) {
        return 0
    }

    return stringArr.filter((stringElement) => {
        if (typeof (stringElement) !== 'string') {
            throw new Error("all elements in the string array need to be a string")
        }

        return intArr.includes(stringElement.length)
    }).length
}

module.exports = { expectedWordCount }