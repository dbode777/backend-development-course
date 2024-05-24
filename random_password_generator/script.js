const getChars = (lowercase = true) => {
    const start = lowercase ? 97 : 65;
    let chars = [];
    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i));
    };
    return chars
}

const getNumbers = () => {
    let numbers = []
    for (let i = 0; i < 10; i++) {
        numbers.push(i)
    }

    return numbers
}

// Define set of characters to retrieve globally to reduce number of times code is executed
const lowercase = getChars(true);
const uppercase = getChars(false);
const numbers = getNumbers();
const special = ["!", "?", "@", "#", "%", "*", "^", "$", "(", ")", ".", "<", ">", "/", "-", "_", "+", "=", "[", "]"];

console.log

const generatePassword = () => {
    const passwordLength = document.getElementById("length").value;
    const fieldsToCheck = ["lowercase", "uppercase", "numbers", "special"];

    // Retrieve boolean values for checked conditions
    let conditions = {};
    for (field of fieldsToCheck) {
        conditions[field] = document.getElementById(field).checked
    };

    // Define allowed characters for password generation
    let characters = [];
    if (conditions.lowercase) characters.push(...lowercase);
    if (conditions.uppercase) characters.push(...uppercase);
    if (conditions.numbers) characters.push(...numbers);
    if (conditions.special) characters.push(...special);

    if (characters.length === 0) {
        return alert("Please select the characters you would like to use for password generation.")
    }

    // Construct the password
    let pwd = [];
    for (let i = 0; i < passwordLength; i++) {
        const randIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randIdx];
        pwd.push(char)
    }
    const pwdString = pwd.join("");
    document.getElementById("password").innerHTML = "<p>" + pwdString + "</p>"
}