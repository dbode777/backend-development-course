const { textProcessor } = require('../questions/question6')

describe("textProcessor", () => {
    it("should return modified text when multiple operations are applied to the specified ranges (p1)", () => {
        let text = "Programming"
        let operations = [
            function(text) { return text.split('').reverse().join('') }, // 'rgorPagnimm'
            function(text) { return text.charAt(0).toUpperCase() + text.slice(1) }, // 'RgorPaGnimm'
        ]
        let ranges = [[0, 4], [6, 10]]
        expect(textProcessor(text, operations, ranges)).toEqual("RgorPaGnimm")
    })

    it("should return modified text when multiple operations are applied to the specified ranges (p2)", () => {
        let text = "Hello, World!"
        let operations = [
            function(text) { return text.split('').reverse().join('') },
            function(text) { return text.charAt(0).toUpperCase() + text.slice(1) },
        ]
        let ranges = [[6, 6], [8, 11]]
        expect(textProcessor(text, operations, ranges)).toEqual("Hello, WDlro!")
    })

    it("should return modified text when operations to update and remove text are applied", () => {
        let text = "Jav aScript is awe some!"
        let operations = [
            function (text) {
                return text.split(" ").join("")
            }, // remove all spaces
            function (text) {
                return (
                    text.slice(0, text.length / 2) + text.slice(text.length / 2).toUpperCase()
                )
            }, // make the second half of the text uppercase
        ]
        let ranges = [
            [0, 10],
            [15, 23], 
        ]

        expect(textProcessor(text, operations, ranges)).toEqual("JavaSCRIPT is awesOME!")
    })

    it("should return modified text when operations to add and update text are applied", () => {
        let text = "Hello, OpenAI!"
        let operations = [
            function (text) {
                return text.split("").join("_")
            },
            function (text) {
                return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
            } // make first character uppercase, rest lowercase
        ]
        let ranges = [
            [0, 4],
            [7, 12]
        ]

        expect(textProcessor(text, operations, ranges)).toEqual("H_e_l_l_o, O_p_e_n_a_i!")
    })

    it("should return modified text when a single operation is applied to a specified range", () => {
        let text = "ABCD"
        let operations = [
            function(text) { return text.split('').reverse().join('') },
        ]
        let ranges = [[1, 2]]
        expect(textProcessor(text, operations, ranges)).toEqual("ACBD")
    })

    it("should return the original text when no operations are applied", () => {
        let text = "Hello, World!"
        let operations = []
        let ranges = [[0,12]]
        expect(textProcessor(text, operations, ranges)).toEqual("Hello, World!")
    })

    it("should return the original text when no ranges are specified", () => {
        let text = "Hello, World!"
        let operations = [
            function(text) { return text.split('').reverse().join('') },
        ]
        let ranges = []
        expect(textProcessor(text, operations, ranges)).toEqual("Hello, World!")
    })

    it("should return the original text when the text is empty", () => {
        let text = ""
        let operations = [
            function(text) { return text.split('').reverse().join('') },
        ]
        let ranges = [[0,1]]
        expect(textProcessor(text, operations, ranges)).toEqual("")
    })

    it("should return the original text when one of the start indices less than 0", () => {
        let text = "Hello"
        let operations = [
            function(text) { return text.split('').reverse().join('') },
        ]
        let ranges = [[-1,4]]
        expect(textProcessor(text, operations, ranges)).toEqual("Hello")
    })

    it("should return the original text when one of the end indices is greater than the length of the text", () => {
        let text = "Hello"
        let operations = [
            function(text) { return text.split('').reverse().join('') },
        ]
        let ranges = [[0,10]]
        expect(textProcessor(text, operations, ranges)).toEqual("Hello")
    })
})