/*
Widgets Inc is a production company with several plants around the world. 
They have recently started a project to analyze the efficiency of their production process. 
In each plant, widgets are manufactured in a sequence of steps, 
where each step can only begin once the previous step has been completed. 
Each plant has a different sequence of steps, and the time it takes to complete each step also varies between plants.

You are given an array of JavaScript objects, where each object represents a plant and contains the properties "id" and "productionSteps". 
The "id" property is a unique string identifier for the plant, 
and "productionSteps" is an array where each element is another object that has a "step" property 
(a string identifying the step) and a "time" property (a number indicating the time it takes to complete that step).

Your task is to write a JavaScript function that takes this array as input and returns a new JavaScript object. 
The keys of this object should be the ids of the plants, 
and the values should be objects where the keys are the steps 
and the values are the total time it would take to reach that step 
(including the time for that step itself). 
The steps should appear in the order they are completed.
*/

function transformPlantProductionData(jsonData) {
    const outputJsonData = {}
    if (!jsonData) {
        throw new Error("jsonData is undefined")
    }

    for (const plant of jsonData) {
        if (!plant?.id || !plant.productionSteps || plant.productionSteps.length === 0) {
            console.log("The array element must be a JSON object with an id and productionSteps field.")
            console.log("The productionSteps array must have at least one step.")
            console.log("This element will not be added to the final output")
            continue
        }

        const newSteps = {}
        let totalTime = 0
        plant.productionSteps.forEach((record) => {
            if (!record?.step || !record.time) {
                throw new Error("The record for the productionSteps array should have a step and time attribute")
            }

            totalTime += record.time
            newSteps[record.step] = totalTime
        })

        outputJsonData[plant.id] = newSteps
    }
    
    return outputJsonData
}

module.exports = {
    transformPlantProductionData
}