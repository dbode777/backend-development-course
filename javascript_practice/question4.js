// Your goal will be to print a new version of the target string that has the delimiter character between the spacing number of characters.
const target = 'testStrings';
const delimiter = '|';
const spacing = 3;
var newString = '';

for (index = 0; index <= target.length; index = index + spacing) {
    if (!(index + spacing > target.length)) {
        newString = newString.concat(target.slice(index, index + spacing), delimiter);
    } else {
        newString = newString.concat(target.slice(index));
    }
}

console.log(newString);
