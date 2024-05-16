const num = 2.489722458;
const n = 1;
const base = 10;
const decimalPlace = base ** n;

/**
 * Round numbers to the nth decimal place.
 * @param {Number} degree The decimal place you want to round to. Positive values are to the right of the decimal. Negative values are to the left of the decimal. Default is base 10 for now, but this can be altered if desired.
 */
const roundedNum = (degree) => {
    round = Math.round(num * (degree)) / (degree);
    console.log(round);
    return round;
};
roundedNum(decimalPlace);

/**
 * Round down numbers to the nth decimal place.
 * @param {Number} degree The decimal place you want to round to. Positive values are to the right of the decimal. Negative values are to the left of the decimal. Default is base 10 for now, but this can be altered if desired.
 */
const flooredNum = (degree) => {
    floor = Math.floor(num * (degree)) / (degree);
    console.log(floor);
    return floor;
};
flooredNum(decimalPlace);

/**
 * Round up numbers to the nth decimal place.
 * @param {Number} degree The decimal place you want to round to. Positive values are to the right of the decimal. Negative values are to the left of the decimal. Default is base 10 for now, but this can be altered if desired.
 */
const ceiledNum = (degree) => {
    ceil = Math.ceil(num * (degree)) / (degree);
    console.log(ceil);
    return ceil;
};
ceiledNum(decimalPlace);


