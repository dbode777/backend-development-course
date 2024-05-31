/**
 * Determines the longest word in a sentence. Will return the first longest word if there is a tie. Special characters and numbers are filtered out, with exception of the delimiter specified. The delimiter is what is used to parse the sentence. Escape the delimiter with \ if you use a special character
 * @param {string} sentence sentence to be parsed for the longest word. Can contain special characters and numbers.
 * @returns {string} The longest word in the sentence. First longest word if there is a tie.
 */
const findLongestWord = (sentence = "", delimiter = " ") => {
    // Returns an error to the console if the first argument isn't a string.
    if (typeof sentence !== "string") {
        console.error("Parameter passed was not a string. Please provide a string for the first parameter.");
        return;
    };

    // Used ChatGPT for the regex functionality
    // Filter out special characters and numbers using a regex pattern
    const regex = new RegExp(`[^a-zA-Z${delimiter}]`, "g");

    // Replace all characters that aren't in the alphabet with an empty string and find the first longest word
    const filteredString = sentence.replace(regex, "");
    const words = filteredString.split(delimiter);
    const longestWordLength = Math.max(...words.map((word) => word.length));
    return words.find((word) => word.length === longestWordLength);
}

const delimiter = " "

//Test Cases
console.log(findLongestWord("The quick brown fox is jumping over the lazy doggies", delimiter)); // jumping
console.log(findLongestWord("Sustainability encompasses various initiatives and strategies to maintain ecological balance.", delimiter)); // Sustainability
console.log(findLongestWord("An exploration of quantum computing reveals intricacies within computational theories.", delimiter)); // computational
console.log(findLongestWord("Innovative technological advancements revolutionize traditional methodologies in various sectors.", delimiter)); // technological
console.log(findLongestWord("Understanding the complexities of neural networks requires a deep dive into artificial intelligence.", delimiter)); // Understanding
console.log(findLongestWord("The philosophical implications of virtual reality technology challenge our perception of existence.", delimiter)); // philosophical
console.log(findLongestWord("one more", delimiter)); // more
console.log(findLongestWord("", delimiter)); // ""
console.log(findLongestWord(42, delimiter)); // ""
console.log(findLongestWord("delimiter|check-,", "|")); // delimiter
