const { transformPlantProductionData } = require('../questions/question4')

describe("transformPlantProductionData", () => {
    it("should handle errors when the input is undefined", () => {
        expect(() => transformPlantProductionData()).toThrow("jsonData is undefined")
    })

    it("should handle when the input is empty", () => {
        expect(transformPlantProductionData([])).toEqual({})
    })

    it("should skip adding the record to the final output dataset due to missing fields or undefined elements", () => {
        expect(transformPlantProductionData([undefined, {id: 2, attribute1: "" }, { id: 3, productionSteps: [] }])).toEqual({})
    })

    it("should skip adding the record to the final output dataset due to the production steps object being undefined", () => {
        expect(() => transformPlantProductionData([{ id: 4, productionSteps: [undefined] }])).toThrow("The record for the productionSteps array should have a step and time attribute")
    })

    it("should skip adding the record to the final output dataset due to the production steps object not having a step attribute", () => {
        expect(() => transformPlantProductionData([{ id: 5, productionSteps: [{}] }])).toThrow("The record for the productionSteps array should have a step and time attribute")
    })

    it("should skip adding the record to the final output dataset due to the production steps object not having a time attribute", () => {
        expect(() => transformPlantProductionData([{ id: 6, productionSteps: [{ step: 1 }] }])).toThrow("The record for the productionSteps array should have a step and time attribute")
    })

    it("should return a JSON array of objects with 2 plants procedures", () => {
        let plants = [{
            "id": "Plant3",
            "productionSteps": [
                {"step": "Step1", "time": 1},
                {"step": "Step2", "time": 2},
                {"step": "Step3", "time": 3}
            ] 
        },
        {
            "id": "Plant4",
            "productionSteps": [
                {"step": "StepA", "time": 10},
                {"step": "StepB", "time": 10},
                {"step": "StepC", "time": 10}
            ] 
        }]
        expect(transformPlantProductionData(plants)).toEqual(
            {
                "Plant3": {
                    "Step1": 1,
                    "Step2": 3,
                    "Step3": 6
                },
                "Plant4": {
                    "StepA": 10,
                    "StepB": 20,
                    "StepC": 30
                } 
            }
        )
    })

    it("should return a JSON array of objects with 2 plants procedures (p2)", () => {
        let plants = [
            {
                "id": "Plant5",
                "productionSteps": [
                    {"step": "Step1", "time": 5},
                    {"step": "Step2", "time": 6},
                    {"step": "Step3", "time": 7}
                ] 
            },
            {
                "id": "Plant6",
                "productionSteps": [
                    {"step": "StepA", "time": 3},
                    {"step": "StepB", "time": 3},
                    {"step": "StepC", "time": 3}
                ]
            }
        ]
        expect(transformPlantProductionData(plants)).toEqual(
        {
            "Plant5": {
                "Step1": 5,
                "Step2": 11,
                "Step3": 18
            },
            "Plant6": {
                "StepA": 3,
                "StepB": 6,
                "StepC": 9
            } 
        })
    })

    it("should return a JSON array of objects with 2 plants procedures (p3)", () => {
        let plants = [
            {
                "id": "Plant7",
                "productionSteps": [
                    {"step": "Step1", "time": 1},
                    {"step": "Step2", "time": 1},
                    {"step": "Step3", "time": 1}
                ] 
            },
            {
                "id": "Plant8",
                "productionSteps": [
                    {"step": "StepA", "time": 1},
                    {"step": "StepB", "time": 1},
                    {"step": "StepC", "time": 1}
                ] 
            }
        ]
        expect(transformPlantProductionData(plants)).toEqual(
        {
            "Plant7": {
                "Step1": 1,
                "Step2": 2,
                "Step3": 3
            },
            "Plant8": {
                "StepA": 1,
                "StepB": 2,
                "StepC": 3
            }       
        })
    })

    it("should return a JSON array of objects with 2 plants procedures (p4)", () => {
        let plants = [
            {
                "id": "Plant1",
                "productionSteps": [
                    {"step": "Phase1", "time": 5},
                    {"step": "Phase2", "time": 10},
                    {"step": "Phase3", "time": 15}
                ] 
            },
            {
                "id": "Plant2",
                "productionSteps": [
                    {"step": "PhaseA", "time": 3},
                    {"step": "PhaseB", "time": 6},
                    {"step": "PhaseC", "time": 9},
                    {"step": "PhaseD", "time": 12},
                    {"step": "PhaseE", "time": 15},
                ]  
            }
        ]
        expect(transformPlantProductionData(plants)).toEqual(
        {
            "Plant1": {
                "Phase1": 5,
                "Phase2": 15,
                "Phase3": 30
            },
            "Plant2": {
                "PhaseA": 3,
                "PhaseB": 9,
                "PhaseC": 18,
                "PhaseD": 30,
                "PhaseE": 45
            } 
        })
    })

    it("should return a JSON array of objects with 2 plants procedures (p5)", () => {
        let plants = [
            {
                "id": "Factory1",
                "productionSteps": [
                    {"step": "Task1", "time": 2},
                    {"step": "Task2", "time": 4}
                ]
            }, 
            {
                "id": "Factory2",
                "productionSteps": [
                    {"step": "TaskA", "time": 6},
                    {"step": "TaskB", "time": 12},
                    {"step": "TaskC", "time": 18},
                    {"step": "TaskD", "time": 24}
                ] 
            },
            {
                "id": "Factory3",
                "productionSteps": [
                    {"step": "TaskI", "time": 1},
                    {"step": "TaskII", "time": 2},
                    {"step": "TaskIII", "time": 3},
                    {"step": "TaskIV", "time": 4},
                    {"step": "TaskV", "time": 5}
                ]
            } 
        ]
        expect(transformPlantProductionData(plants)).toEqual(
        {
            "Factory1": {
                "Task1": 2,
                "Task2": 6 
            },
            "Factory2": {
                "TaskA": 6,
                "TaskB": 18,
                "TaskC": 36,
                "TaskD": 60
            },
            "Factory3": {
                "TaskI": 1,
                "TaskII": 3,
                "TaskIII": 6,
                "TaskIV": 10,
                "TaskV": 15
            } 
        })
    })
})