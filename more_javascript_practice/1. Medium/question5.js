const isPalindrome = (str) => {
    const regex = new RegExp(`[^a-z0-9]`, "g"); // Only need to check letters and numbers
    const transformed_str = str.toLowerCase().replace(regex, ""); // set everything to lowercase to avoid case-sensitivity
    const reversed_str = transformed_str.split("").reverse().join("");
    return reversed_str === transformed_str;
}

// Test Cases, comments are the expected results
console.log(isPalindrome("")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("Madam, I'm Adam")); // true
console.log(isPalindrome("ab")); // false
console.log(isPalindrome("12321! #@!12321")); // true
console.log(isPalindrome("javascript")); // false
console.log(isPalindrome("!!a!!!a!")); // true
