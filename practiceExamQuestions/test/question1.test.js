const { getTwoLargestNumbers } = require("../questions/question1")

describe("getTwoLargestNumbers", () => {
    it("should return the same array in descending order when only two elements are passed in the input array", () => {
        expect(getTwoLargestNumbers([2,1])).toEqual([2,1])
    })

    it("should return an array with the 2 largest elements in descending order when more than 2 elements are in the input array", () => {
        expect(getTwoLargestNumbers([100,200,200,100])).toEqual([200,200])
    })

    it("should be able to handle negative values", () => {
        expect(getTwoLargestNumbers([-5,-2,-3,-4,-1])).toEqual([-1,-2])
    })

    it("should be able to handle multiple positive values in a random order", () => {
        expect(getTwoLargestNumbers([5, 7, 9, 1, 3])).toEqual([9,7])
    })

    it("should be able to handle an array where all elements are the same", () => {
        expect(getTwoLargestNumbers([0, 0, 0, 0, 0])).toEqual([0,0])
    })

    it("should be able to handle arrays with many elements (p1)", () => {
        expect(getTwoLargestNumbers([5, 7, 9, 1, 3, 11, 15, 12, 18, 23, 44, 32, 49, 50, 31, 60, 70, 80,
   90, 500, 250, 100, 101, 102, 200])).toEqual([500,250])
    })

    it("should be able to handle arrays with many elements (p2)", () => {
        expect(getTwoLargestNumbers([100, 200, 2500, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
   1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 300])).toEqual([2500,2400])
    })

    it("should throw an error if the input is undefined", () => {
        expect(() => getTwoLargestNumbers()).toThrow("The input needs to be an array of at least 2 elements")
    })

    it("should throw an error if the input is less than 2 elements", () => {
        expect(() => getTwoLargestNumbers([1])).toThrow("The input needs to be an array of at least 2 elements")
    })

    it("should throw an error if the input is not an array", () => {
        expect(() => getTwoLargestNumbers("")).toThrow("The input needs to be an array of at least 2 elements")
    })
})