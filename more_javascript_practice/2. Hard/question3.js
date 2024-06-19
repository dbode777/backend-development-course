/**
 * Concatentates a character and the number of times it repeated together into a single string. If it only repeated once, only the character is returned.
 * @param {String} char character to add
 * @param {Number} numberOfChars number of times the character repeated
 * @returns {String} character and number of times it repeated concatenated into a single string.
 */
const strFormatter = (char, numberOfChars) => {
    if (numberOfChars > 1) {
        return char.concat(numberOfChars);
    }

    return char
}

/**
 * Compresses a string by taking the number of times a character is repeated and replacing the consecutively repeated characters with the character followed by the number of times it is repeated. Ex. aaaabbc = a4b2c
 * @param {String} str The string the user would like to compress
 * @returns {String} The compressed string
 */
const compressString = (str) => {
    const compressedStr = [];
    let char_count = 1;
    let prev_char = "";
    const strList = str.split("");

    for (const index in strList) {
        let indexCheck = Number.parseFloat(index) + 1
        let char = str[index];
        if (char === prev_char && str.length !== indexCheck) {
            char_count++;
            continue;
        } else if (char === prev_char && str.length === indexCheck) {
            char_count++;
        } else if (char !== prev_char && str.length === indexCheck) {
            compressedStr.push(strFormatter(prev_char, char_count));
            prev_char = char;
            char_count = 1;
        }

        // Adds the previous character and count to list that will be 
        compressedStr.push(strFormatter(prev_char, char_count));
        prev_char = char;
        char_count = 1;
    }

    return compressedStr.join("");
};

// Test Cases, expected output in comments
console.log(compressString('111aaab')); // "13a3b"
console.log(compressString('')); // ""
console.log(compressString('a')); // "a"
console.log(compressString('aaaa')); // "a4"
console.log(compressString('abcdef')); // "abcdef"
console.log(compressString('14243')); // "14243"
console.log(compressString('@@@!!!@@@')); // "@3!3@3"
console.log(compressString('aaabccddddde')); // "a3bc2d5e"
console.log(compressString('aaaaaaaaaaab')); // "a11b"
