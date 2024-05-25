const decimalPlace = 10 ** 9;
const defaultText = "";
let operator;
let resultText = "";
const spanElement = document.querySelector(".result-text");
let storedValue = "";


/**
 * Begins operation and resets the screen for the user
 * @param {String} number The number to be added to the array
 * @param {String} operation The operation the user wants to conduct
 */
const executeOperation = (number, operation) => {
    // Conduct operation
    spanElement.innerHTML = operate(number, operation);
    console.log(`Displayed result to user: ${spanElement.innerHTML}`)
};

/**
 * Resets the calculator
 */
const reset = () => {
    operator = null;
    storedValue = "";
    resultText = "";
    spanElement.innerHTML = resultText;
};

/**
 * Rounds result to the nth decimal place
 * @param {number}
 * @param {number} baseTenExponent decimal place you wish to round to
 * @returns {number} The rounded number to the nth decimal place
 */
const roundResult = (number, decimalPlace) => {
    return Math.round(number * decimalPlace) / decimalPlace;
}

/**
 * Conducts operation and returns result to be displayed to the user
 * @param {String} number The user's second input to be used in the operation they selected.
 * @param {String} operation The operation the user would like to conduct
 * @returns {number} The result to be displayed to the user.
 */
const operate = (number, operation) => {
    console.log(`Parameters passed to the operate function: ${number}, ${operation}`)
    switch (operation) {
        case "+":
            storedValue = roundResult(storedValue + parseFloat(number), decimalPlace);
            operator = null;
            resultText = "";
            return storedValue;
        case "-":
            storedValue = roundResult(storedValue - parseFloat(number), decimalPlace)
            operator = null;
            resultText = "";
            return storedValue;
        case "x":
            storedValue = roundResult(storedValue * parseFloat(number), decimalPlace);
            operator = null;
            resultText = "";
            return storedValue;
        case "/":
            // Round to nearest billionth
            storedValue = roundResult(storedValue / parseFloat(number), decimalPlace);
            operator = null;
            resultText = "";
            return storedValue;
    }
};

/**
 * Sets the result text element to the number pressed by the user
 * @param {String} number The number to be appended to the text displayed. A decimal can also be entered.
 */
const onNumberPressed = (number) => {

    if (number === "." && resultText === "") {
        resultText = resultText.concat("0", number);
    } else if (number === "." && resultText.includes(".")) {
        console.log(`You already have a decimal in the number.`);
        return;
    } else {
        resultText = resultText.concat(number);
    }

    spanElement.innerHTML = resultText;
};

/**
 * Conducts the operation selected by the user. If dividing by 0, the result displayed back to the user with be NaN. Otherwise, all basic operations (+, -, *, /) are allowed. Chaining operations is allowed. Edge cases when a user selects the = sign or another operator without entering a second element will reset the calculator. Entering a decimal multiple times will do nothing but log that the current element already has a decimal. If the decimal is selected before another number is selected, 0 is appended to the beginning of the element.
 * @param {String} operation Operation selected by the user
 */
const onOperationPressed = (operation) => {
    /* 
        Serves as another way to clear if someone presses the = sign before selecting an operation, or if they press any operator without typing a number first.
    */

    console.log(`Entered result text by user: ${resultText}. Stored Value: ${storedValue}`)

    // Return NaN if the user tries to divide by 0
    if (operator === '/' && operation === '=' && resultText === ("0" || "0.")) {
        console.log("dividing by 0 bad!")
        operator = null;
        storedValue = "";
        resultText = "";
        spanElement.innerHTML = NaN;
        return;
    } else if (operation === "=" && storedValue === "") {
        // Handles case when initial element is entered and the = sign is entered without another element being selected
        reset();
        return;
    } else if (operation === "c") {
        // Clears stored values and display text to user.
        reset();
        return;
    } else if (resultText !== "" && storedValue !== "" && operation === "=" && operator) {
        console.log("Executing operation")
        executeOperation(resultText, operator);
        return;
    } else {

        operator = operation;
        console.log(`Operator: ${operator}`)
        // Allows user to chain operations
        if (resultText === "" && storedValue !== null && !["=", "."].includes(operator)) {
            console.log("Chaining operations");
            resultText = "";
            spanElement.innerHTML = "";
        } else {
            console.log("Storing value and operator")
            storedValue = parseFloat(resultText);
            resultText = "";
            spanElement.innerHTML = resultText;
        }
    }
    console.log(`operator: ${operator}, storedValue: ${storedValue}`);

    // Handles case where a user selects an operator first before inputting the first element
    if (!storedValue && operation !== ".") {
        reset();
        return;
    }
};