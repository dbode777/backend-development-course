const filterAndTransform = (people) => {
    const adults = people.filter((person) => person["age"] >= 18);
    return adults.map((person) => `${person["name"]} is ${person["age"]} years old and loves ${person["hobby"]}.`);
}


const people1 = [
    { name: "Alice", age: 25, hobby: "painting" },
    { name: "Bob", age: 17, hobby: "coding" },
    { name: "Charlie", age: 32, hobby: "cycling" },
    { name: "Dave", age: 15, hobby: "gardening" }
];

const people2 = [
    { name: "Eve", age: 16, hobby: "chess" },
    { name: "Frank", age: 17, hobby: "skateboarding" }
];
const people3 = [
    { name: "Gina", age: 22, hobby: "photography" },
    { name: "Gina", age: 29, hobby: "cooking" }
];

const people4 = [
    { name: "Harry", age: 21, hobby: "" }
];

const people5 = [
    { name: "Irene", age: 18, hobby: "singing" },
    { name: "Jill", age: 19, hobby: "dancing" }
];

const people6 = [
    { name: "Kare", age: 22, hobby: "skiing" },
    { name: "Leo", age: 24, hobby: "equestrianism" }
];

// Test Cases
console.log(filterAndTransform(people1));
console.log(filterAndTransform(people2));
console.log(filterAndTransform(people3));
console.log(filterAndTransform(people4));
console.log(filterAndTransform(people5));
console.log(filterAndTransform(people6));