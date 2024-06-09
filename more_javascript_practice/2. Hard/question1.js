/**
 * Merges an array of book objects on year if any of the objects share the same title and author. An array of either book objects or strings detailing the properties of the book are returned.
 * @param {Array.<Object>} books An array of objects representing books, with key-value pairs for the title, author, and year the book was published
 * @param {String} format The format in which the user wants to view the merged list of books. Valid options are "string" and "object".
 * @returns {Array} Either an array of strings or book objects, depending on what format was specified in the input.
 */
const mergeAndFormat = (books, format) => {
    const mergedBooks = books.reduce((book, { title, author, year }) => {
        const key = `${title} by ${author}`;
        // Creates new object where the title and author are the key
        if (!book[key]) {
            book[key] = {
                "title": title,
                "author": author,
                "years": [year]
            };
        } else {
            book[key]["years"].push(year)
        }

        return book;
    }, {});

    if (format === "string") {
        return Object.values(mergedBooks).map((book) => `${book["title"]} by ${book["author"]} (${book["years"].join(", ")})`, '');
    } else if (format === "object") {
        return Object.values(mergedBooks)
    } else {
        return "Please select a format of either \"string\" or \"object\"";
    };
};

const books1 = [
    {
        title: "The Great Gatsby", author: "F. Scott Fitzgerald", year:
            1925
    },
    {
        title: "The Great Gatsby", author: "F. Scott Fitzgerald", year:
            2020
    },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "1984", author: "George Orwell", year: 1983 }
];
const format1 = "string";

const books2 = [
    { title: "Invisible Man", author: "Ralph Ellison", year: 1952 }
];
const format2 = "string";

const books3 = [
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    {
        title: "Blood Meridian", author: "Cormac McCarthy", year: 1985
    }
];
const format3 = "object";

const books4 = [
    { title: "The Circle", author: "Dave Eggers", year: 2013 },
    { title: "The Circle", author: "Mats Strandberg", year: 2015 }
];
const format4 = "string";

const books5 = [];
const format5 = "object";

const books6 = [
    { title: "Dune", author: "Frank Herbert", year: 1965 },
    { title: "Dune", author: "Frank Herbert", year: 1977 },
    { title: "Dune", author: "Frank Herbert", year: 1984 },
    { title: "Dune", author: "Frank Herbert", year: 2005 }
];
const format6 = "string";

// Test Cases
console.log(mergeAndFormat(books1, format1));
console.log(mergeAndFormat(books2, format2));
console.log(mergeAndFormat(books3, format3));
console.log(mergeAndFormat(books4, format4));
console.log(mergeAndFormat(books5, format5));
console.log(mergeAndFormat(books6, format6));
console.log(mergeAndFormat([], "number"));