const { expectedWordCount } = require("../questions/question2")

describe("expectedWordCount", () => {
    it("should return all words that have a length of 2 and 4", () => {
        let strings = ["this", "is", "a", "test"]
        let numbers = [4, 2]
        expect(expectedWordCount(strings, numbers)).toEqual(3)
    })

    it("should return all words that have a length of 5 and 6", () => {
        let strings = ["apple", "orange", "banana", "grape"]
        let numbers = [5, 6]

        expect(expectedWordCount(strings, numbers)).toEqual(4)
    })

    it("should return 0 when the array of numbers is empty", () => {
        let strings = ["one", "two", "three", "four", "five"];
        let numbers = [];
        expect(expectedWordCount(strings, numbers)).toEqual(0)
    })

    it("should return all words that have a length of 3, 4 and 5", () => {
        let strings = ["red", "blue", "green", "yellow"]
        let numbers = [3, 4, 5]
        expect(expectedWordCount(strings, numbers)).toEqual(3)
    })

    it("should return all words that have a length of 1, 2 and 3", () => {
        let strings = ["I", "am", "not", "a", "robot"]
        let numbers = [1, 2, 3]
        expect(expectedWordCount(strings, numbers)).toEqual(4)
    })

    it("should return all words that have a length of 5, 6 and 7", () => {
        let strings = ["unique", "words", "have", "specific", "lengths"]
        let numbers = [5, 6, 7]
        expect(expectedWordCount(strings, numbers)).toEqual(3)
    })

    it("should be able to handle arrays with many elements", () => {
        let strings = ["longer", "words", "like", "hippopotamus", "and", "crocodile"]
        let numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12]
        expect(expectedWordCount(strings, numbers)).toEqual(5)
    })

    it("should throw an error if the first parameter has an element that is not a string", () => {
        let strings = ["longer", "words", "like", "hippopotamus", "and", "crocodile", 1]
        let numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12]
        expect(() => expectedWordCount(strings, numbers)).toThrow("all elements in the string array need to be a string")
    })

    it("should throw an error if the first parameter is undefined", () => {
        let strings
        let numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12]
        expect(() => expectedWordCount(strings, numbers)).toThrow("The first parameter should have an array of string values")
    })

    it("should throw an error if the first parameter is not an array", () => {
        let strings = ""
        let numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12]
        expect(() => expectedWordCount(strings, numbers)).toThrow("The first parameter should have an array of string values")
    })

    it("should throw an error if the second parameter is undefined", () => {
        let strings = []
        let numbers
        expect(() => expectedWordCount(strings, numbers)).toThrow("The second parameter should have an array of integer values")
    })

    it("should throw an error if the second parameter is not an array", () => {
        let strings = []
        let numbers = ""
        expect(() => expectedWordCount(strings, numbers)).toThrow("The second parameter should have an array of integer values")
    })
})