/**
 * Convert the degree of the unit of temperature passed to the other standard temperature systems (Celsius to Fahrenheit, Fahrenheit to Celsius, Kelvin to Celsius).
 * @param {number} degree The degree of the temperature the user wants to convert.
 * @param {string} unit The unit of the temperature the user wants to convert.
 * @returns {number} The converted temperature.
 */
const convertToTemperature = (degree, unit) => {
    if ((degree < -547.15 && unit === 'Celsius') || (degree < -952.87 && unit === 'Fahrenheit') || (degree < -273.15 && unit === 'Kelvin')) {
        console.log("You've entered a number that exceeds the coldest temperature in the universe!");
        return NaN;
    }

    // Fahrenheit to Celsuis
    switch (unit) {
        case 'Fahrenheit': {
            // Converts from Fahrenheit to Celsius and Kelvin
            const fahrenheitToCelsius = Math.round((degree - 32) * (5 / 9) * 100) / 100;
            console.log(`${degree} degress Fahrenheit is ${fahrenheitToCelsius} degrees Celsius`);
            console.log(`${degree} degress Fahrenheit is ${Math.round((fahrenheitToCelsius + 273.15) * 100) / 100} degrees Kelvin`)
            return fahrenheitToCelsius;
        }
        case 'Celsius': {
            // Converts from Celsius to Fahrenheit
            const celsiusToFahrenheit = Math.round(((degree * 9 / 5) + 32) * 100) / 100;
            console.log(`${degree} degress Celsius is ${celsiusToFahrenheit} degrees Fahrenheit`);
            console.log(`${degree} degress Celsius is ${Math.round((degree + 273.15) * 100) / 100} degrees Kelvin`);
            return celsiusToFahrenheit;
        };
        case 'Kelvin': {
            // Converts from Kelvin to Celsius
            const kelvinToCelsius = Math.round((degree - 273.15) * 100) / 100;
            console.log(`${degree} degress Kelvin is ${kelvinToCelsius} degrees Celsius`);
            console.log(`${degree} degress Celsius is ${Math.round((degree + 273.15) * 100) / 100} degrees Kelvin`);
            return kelvinToCelsius;
        };
    };
};

// Test Cases, comments are expected results
console.log(convertToTemperature(-40, 'Celsius')); // -40
console.log(convertToTemperature(0, 'Celsius')); // 32
console.log(convertToTemperature(32, 'Fahrenheit')) // 0
console.log(convertToTemperature(100, 'Celsius')); // 212
console.log(convertToTemperature(212, 'Fahrenheit')) // 100
console.log(convertToTemperature(37, 'Celsius')); // 98.6
console.log(convertToTemperature(-19, 'Celsius')); // -2.2
console.log(convertToTemperature(-547.16, 'Celsius')) // NaN