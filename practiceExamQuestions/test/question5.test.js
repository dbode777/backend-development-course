const { getOrgChart } = require('../questions/question5')

describe("getOrgChart", () => {
    it("should handle cases when the employee object is undefined or doesn't have an id attribute", () => {
        expect(getOrgChart([undefined, {}])).toEqual({})
    })

    it("should return an empty object when the employee array is empty", () => {
        expect(getOrgChart([])).toEqual({})
    })

    it("should correctly build the org chart for users with several layers of managers", () => {
        let employees = [
            {"id": "1", "manager": "2"},
            {"id": "2", "manager": "3"},
            {"id": "3"},
            {"id": "4", "manager": "2"},
            {"id": "5", "manager": "4"}
        ]
        expect(getOrgChart(employees)).toEqual({ "2": ["1", "4", "5"], "3": ["1", "2", "4", "5"], "4": ["5"] })
    })

    it("should correctly build the org chart for users with a single manager", () => {
        let employees = [
            {"id": "1", "manager": "2"},
            {"id": "2"}
        ]
        
        expect(getOrgChart(employees)).toEqual({ "2": ["1"] })
    })

    it("should correctly build the org chart for users with no manager", () => {
        let employees = [
            {"id": "1"},
            {"id": "2"},
            {"id": "3"},
            {"id": "4"}
        ]

        expect(getOrgChart(employees)).toEqual({})
    })

    it("should correctly build the org chart for users with more than 2 layers of managers", () => {
        let employees = [
            {"id": "1", "manager": "2"},
            {"id": "2", "manager": "3"},
            {"id": "3", "manager": "4"},
            {"id": "4", "manager": "5"},
            {"id": "5"}
        ]

        const expectedResult = {
            "2": ["1"],
            "3": ["1", "2"],
            "4": ["1", "2", "3"],
            "5": ["1", "2", "3", "4"]
        }

        expect(getOrgChart(employees)).toEqual(expectedResult)
    })

    it("should correctly build the org chart for an organization with only one manager", () => {
        let employees = [
            {"id": "1", "manager": "3"},
            {"id": "2", "manager": "3"},
            {"id": "3"}
        ]

        expect(getOrgChart(employees)).toEqual({ "3": ["1", "2"] })
    })
})