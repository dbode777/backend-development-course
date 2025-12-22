const { passwordStrength } = require('../questions/question3')

describe("passwordStrength", () => {
    it("should handle errors when the input is not a string", () => {
        expect(() => passwordStrength(12345)).toThrow("password must be a string")
    })

    it("should return weak when the password only has lowercases characters", () => {
        let password = "password"
        expect(passwordStrength(password)).toEqual("weak")
    })

    it("should return weak when the password only has lowercase characters and numbers", () => {
        let password = "pword123"
        expect(passwordStrength(password)).toEqual("weak")
    })

    it("should return medium when the password only has lowercase characters, capitals and numbers", () => {
        let password = "Pord123"
        expect(passwordStrength(password)).toEqual("medium")
    })

    it("should return very strong when the password meets all conditions", () => {
        let password = "Pord123!"
        expect(passwordStrength(password)).toEqual("strong")
    })

    it("should return very strong when the password meets all conditions", () => {
        let password = "LongPassword123!"
        expect(passwordStrength(password)).toEqual("very strong")
    })

    it("should return weak when the password only has capitals and special characters", () => {
        let password = "PASSWORD!"
        expect(passwordStrength(password)).toEqual("weak")
    })

    it("should return medium when the password only has numbers, special characters and is over 10 characters", () => {
        let password = "1234567890!"
        expect(passwordStrength(password)).toEqual("medium")
    })

    it("should return weak when the password meets no conditions", () => {
        expect(passwordStrength("")).toEqual("weak")
    })
})