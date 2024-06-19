/**
 * Takes an input string and returns a string of all the unique characters found within it, in the order they appeared. 
 * @param {string} str The string to check for unique characters
 * @returns {string} String of all unique characters found
 */
const findUniqueCharacters = (str) => {
    if (str === "") {
        return "";
    };

    const charsCount = {};
    const uniqueChars = [];
    const chars = str.split("");

    for (char of chars) {
        Object.keys(charsCount).includes(char) ? charsCount[char] += 1 : charsCount[char] = 1;
    };

    Object.keys(charsCount).forEach(key => {
        if (charsCount[key] === 1) {
            uniqueChars.push(key);
        };
    });

    return uniqueChars.join("");
}

//Test Cases, comments show the expected result
console.log(findUniqueCharacters("bubble")); // "ule"
console.log(findUniqueCharacters("abcdef")); // "abcdef"
console.log(findUniqueCharacters("aabbccdd")); // ""
console.log(findUniqueCharacters("")); // ""
console.log(findUniqueCharacters("!a b c! a")); // "bc"
console.log(findUniqueCharacters("123412345")); // "5"
console.log(findUniqueCharacters("AaBbCc")); // "AaBbCc"