// Take the user's input and output a new list element to the 

const addTodo = () => {

    const newItem = document.getElementById("new-todo").value;
    const list = document.getElementById("list");

    if (!newItem) {
        return alert("You must enter some text to add it to the list.")
    };

    if (!list.innerText.includes(newItem)) {
        const li = document.createElement("li");
        const text = document.createTextNode(newItem);
        li.appendChild(text);
        console.log(`Adding ${li} to list.`)
        list.appendChild(li);
    } else {
        return alert("That item already exists within the list")
    };
};