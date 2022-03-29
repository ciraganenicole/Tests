function stringLength(str) {
    let words = str.length;

    if (words > 0 && words <= 10) return words;
    return false;
}

function reverseString(str) {
    let reverse = str.split("").reverse().join("");
    return reverse;
}

class Calculator {

    addNumber = (a, b) => {
        return a + b;
    }
    substructNumber = (a, b) => {
        return a - b;
    }
    multiplyNumber = (a, b) => {
        return a * b;
    }
    divideNumber = (a, b) => {
        return a / b;
    }
}

function captalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let calculator = new Calculator();

module.exports.stringLength = stringLength;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.captalize = captalize;