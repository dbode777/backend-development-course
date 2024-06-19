const vowels = ["a", "e", "i", "o", "u"];
const consonants = [];
const a = "a".charCodeAt(0);

// Generates the list of consonants
for (let i = a; i < a + 26; i++) {
    let char = String.fromCharCode(i);
    if (!vowels.includes(char)) {
        consonants.push(char);
    };
};

/**
 * Counts the number of vowels and consonants contained within a string.
 * @param {string} inputString initial string to conduct a count on
 * @returns {object} an object containing a count of the number of vowels, vowelCount, and consonants, consonantCount, for the given input string.
 */
const countVowelsAndConsonants = (inputString = "") => {
    let vowelCount = 0;
    let consonantCount = 0;

    if (!inputString || typeof (inputString) !== "string") {
        // Returns 0 if no input is entered or anything other than a string is entered.
        return {
            "vowelCount": vowelCount,
            "consonantCount": consonantCount
        };
    }

    for (letter of inputString.split("")) {
        let lowercase_letter = letter.toLowerCase()
        if (vowels.includes(lowercase_letter)) {
            vowelCount++;
        } else if (consonants.includes(lowercase_letter)) {
            consonantCount++;
        };
    };
    return {
        "vowelCount": vowelCount,
        "consonantCount": consonantCount
    };
};

// Test Cases, comments are expected results
console.log(countVowelsAndConsonants("ProgrammingInJavaScript")) // vowels: 7, consonants: 16
console.log(countVowelsAndConsonants("ExampleOfMixedCase")) // vowels: 8, consonants: 10
console.log(countVowelsAndConsonants("FUNCTIONALprogramming")) // vowels: 7, consonants: 14
console.log(countVowelsAndConsonants("DataStructuresAndAlgorithms")) // vowels: 9, consonants: 18
console.log(countVowelsAndConsonants("UnderstandingComplexity")) // vowels: 7, consonants: 16
console.log(countVowelsAndConsonants("AbstractSyntaxTreeAnalysis")) // vowels: 8, consonants: 18
console.log(countVowelsAndConsonants("hkjahkdjsaidewyHHSAKHAvasldjasbbvAASS")) // vowels: 10, consonants: 27
console.log(countVowelsAndConsonants("")) // vowels: 0, consonants: 0
console.log(countVowelsAndConsonants("aeiou")) // vowels: 5, consonants: 0
console.log(countVowelsAndConsonants(23)) // vowels: 0, consonants: 0