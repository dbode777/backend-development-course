//Determine which of the three numbers a user inputs is largest.

const q2RetrieveInput = () => {
    const arr = [];
    arr.push(document.getElementById("question2-input1").value);
    arr.push(document.getElementById("question2-input2").value);
    arr.push(document.getElementById("question2-input3").value);
    console.log(`Array of user's numbers: ${arr}`);

    document.getElementById("question2-answer").innerHTML = `Out of the numbers you selected ${arr}, the largest number was ${Math.max(...arr)}.`;
    alert(`The largest number was ${Math.max(...arr)}.`)
};