/* Map, Filter, Reduce are functions that apply a function to an array or iterable
*/

const arr = [2, 3, 4, 5, 6];

/**
 * Maps the values in array(or iterable), arr, to a new array of values using the function, func.
 * @param {Array} arr array or iterable
 * @param {Function} func some function that will be used to map the values of arr to a new array of values
 * @returns {Array} new array of values
 */
const map = (arr, func) => {
    const newArr = [];

    for (const value of arr) {
        const newValue = func(value);
        newArr.push(newValue);
    }

    return newArr;
};

// This function is equivalent to arr.map((value) => functionToCreateNewValue);
const map_result = map(arr, (x) => x ** 2);
console.log(`This is the result of the map function: ${map_result}`);

/**
 * Filters the values in array(or iterable), arr, to a new array of values using the function, func; which must return either a boolean expression or undefined.
 * @param {Array} arr array or iterable
 * @param {Function} func some function that will be used to filter the values of arr to a new array of values. Must return a boolean expression or undefined.
 * @returns {Array} new array of values
 */
const filter = (arr, func) => {
    const newArr = [];

    for (const value of arr) {
        if (func(value)) {
            newArr.push(value);
        }
    }

    return newArr;
};

// This function is equivalent to arr.filter((value) => filterCondition);
const filter_result = filter(arr, (x) => x % 2 === 0);
console.log(`This is the result of the filter function: ${filter_result}`);

/**
 * Reduces the values in array(or iterable), arr, to a singular element using the function, func.
 * @param {Array} arr an array or iterable.
 * @param {Function} func a function to will be used to reduce the elements of arr to a single value.
 * @returns {} The reduced value.
 */
const reduce = (arr, func) => {
    for (const value of arr) {
        var currentResult = func(currentResult, value);
    }

    return currentResult;
};

// This is the equivalent of using arr.reduce((prev_element = defaultPrevValue, current_element = defaultCurrentValue) => function)
const reduced_result = reduce(arr, (x, y) => x + y);
console.log(`This is the result of the reduced function: ${reduced_result}`);

// Let's see what happens if the arr has a fewer number of elements than the number of arguments for func (for science).

const small_arr = [1];

const reduced_result_default = reduce(small_arr, (x, y) => x + y);
console.log(`This is the default result of the reduced function: ${reduced_result_default}`);

// If the argument doesn't exist (i.e. the second element of small_arr), it sets the non-existent parameter to NaN.