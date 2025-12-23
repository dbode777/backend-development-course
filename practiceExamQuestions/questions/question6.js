/*
RapidText Inc. specializes in text processing and analytics. 
They have developed a new tool that can analyze a large text string and perform a series of operations on it. 
The operations are provided as an array of functions that each take a string as input and return a modified string as output.
The functions are applied in the order they are given in the array.

The problem is that some of these operations are computationally intensive and can take a long time to run, 
so RapidText wants to be able to apply these operations only to the portions of the text that actually need them.

Your task is to write a JavaScript function that takes a text string, an array of operations (functions), 
and an array of ranges (each range being an array of two numbers indicating start and end positions in the text). 
The function should apply each operation to only the text within the specified ranges, and return the modified text.

Each operation will be a function of the form function(text) { ...  } and will return a string.
Note: Ranges are inclusive and are based on zero-indexing. If a range is [2, 5], it refers to the part of the string from the 3rd to the 6th character, inclusive.
*/

function textProcessor(text, operations, ranges) {
    let modifiedText = text
    for (const operation of operations) {
        for (let [start, end] of ranges) {
            if (end > text.length - 1 || start < 0) {
                console.log("Invalid range provided, returning original text.")
                return text
            }

            // TODO: Need to correct to handle add and delete operations at the same time
            let index_adjustment = modifiedText.length - text.length // Positive if more characters was added, negative if characters were removed
            if (modifiedText.length === text.length) {
                console.log("Applying operation to:", text.substring(start, end + 1))
                modifiedText = modifiedText.substring(0, start) + operation(modifiedText.substring(start, end + 1)) + modifiedText.substring(end + 1, modifiedText.length)
            } else if (index_adjustment > 0) {
                start === 0 ? start = 0 : start = start + (index_adjustment)
                start === 0 ? end = index_adjustment : end = end + (index_adjustment)
                console.log("Applying operation to:", modifiedText.substring(start, end + 1) + " with an index adjustment of to both indices being: ", index_adjustment)
                modifiedText = modifiedText.substring(0, start) + operation(modifiedText.substring(start, end + 1)) + modifiedText.substring(end + 1, modifiedText.length)
            } else {
                start === 0 ? end = end : end = end + index_adjustment
                console.log("Applying operation to:", modifiedText.substring(start, end + 1) + " with an end index adjustment of: ", index_adjustment)
                modifiedText = modifiedText.substring(0, start) + operation(modifiedText.substring(start, end + 1)) + modifiedText.substring(end + 1, modifiedText.length)
            }
        }
    }

    return modifiedText
}

module.exports = { textProcessor }