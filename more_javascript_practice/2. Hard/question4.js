/**
 * Checks to see if the string can be formed into a palindrome. If it can, returns true. If not, returns false.
 * @param {String} str String to check and see if it contains all the ingredients necessary to form a palindrome.
 * @returns {Boolean} returns true if a palindrome can be formed, false otherwise.
 */
const canFormPalindrome = (str) => {
    if (str === "") {
        return true;
    };

    const charsCount = {};
    const chars = str.split("");

    for (char of chars) {
        Object.keys(charsCount).includes(char) ? charsCount[char] += 1 : charsCount[char] = 1;
    };

    // If the str has an even amount of characters, each character must be an even number. If odd, all but one character must be even. 
    if (str.length % 2 === 0) {
        console.log("String length is an even number")
        for (const charCount of Object.values(charsCount)) {
            if (charCount % 2 !== 0) {
                return false;
            };
        }
        return true;
    } else {
        console.log("String length is an odd number")
        let oddCountTracker = 0;
        for (const charCount of Object.values(charsCount)) {
            if (charCount % 2 !== 0) {
                oddCountTracker++;
            };
            if (oddCountTracker > 1) {
                return false;
            };
        };
        return true;
    };
};

// Test Cases, expected output in comments
console.log(canFormPalindrome("carrace")); // true
console.log(canFormPalindrome("hello")); // false
console.log(canFormPalindrome("")); // true
console.log(canFormPalindrome("a")); // true
console.log(canFormPalindrome("aaaa")); // true
console.log(canFormPalindrome("abba")); // true
console.log(canFormPalindrome("bbaa")); // true
console.log(canFormPalindrome("abcdef")); // false
console.log(canFormPalindrome("a man a plan a canal panama")); // true
console.log(canFormPalindrome("racecarannakayakracecarannakayak")); // true
console.log(canFormPalindrome("supercalifragilisticexpialidociousdociousaliexpisticfragilicalirupes")); //true
console.log(canFormPalindrome("longerstringwithrepeatingcharactersbutnopossiblepalindrome")); // false
console.log(canFormPalindrome("121 121!!@@")); // true