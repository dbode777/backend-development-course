//Check to see if the user's input is odd or even

const retrieveInput = () => {
    const userInput = document.getElementById("question1-input");
    console.log(`UserInput: ${userInput.value}`);

    if (userInput.value % 2 === 0) {
        document.getElementById("question1-answer").innerHTML = "Your answer is an even number.";
        alert("Your answer is an even number.")
    } else {
        document.getElementById("question1-answer").innerHTML = "Your answer is an odd number.";
        alert("Your answer is an odd number.")
    }
}