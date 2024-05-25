//Determine which of the three numbers a user inputs is largest.

const q2RetrieveInput = () => {
    const arr = [];
    arr.push(document.getElementById("question2-input1").value);
    arr.push(document.getElementById("question2-input2").value);
    arr.push(document.getElementById("question2-input3").value);
    console.log(`Array of user's numbers: ${arr}`);

    // Need to properly sanitize/ encode the output to prevent XSS attacks
    const q2AnswerElement = document.getElementById("question2-answer");

    const message = `Out of the numbers you selected ${arr.join(', ')}, the largest number was ${Math.max(...arr)}.`;

    q2AnswerElement.textContent = message;
    return alert(`The largest number was ${Math.max(...arr)}.`);
};