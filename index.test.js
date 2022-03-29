const stringLength = require('./index.js').stringLength;
const reverseString = require('./index.js').reverseString;
const calculator = require('./index.js').calculator;
const captalize = require('./index.js').captalize;

describe("Check length", () => {
    test('check length should return the lenght of a string', () => {
        expect(stringLength("Luck")).toBe(4);
    });
    test('check length should return error if length is less than one', () => {
        expect(stringLength("jhjh")).toBe(4);
    });

    test('check length should return error if length is less than one', () => {
        expect(stringLength("")).toBe(false);
    });

    test('check length should return error if length is more than ten', () => {
        expect(stringLength("gggggggggg")).toBe(10);
    });

    test('check length should return error if length is more than ten', () => {
        expect(stringLength("hhhhhhhhhhhhhhhhh")).toBe(false);
    });

})

describe('Check if the length is reversed', () => {
    test('check length should return the inverse of the string', () => {
        expect(reverseString("false")).toBe("eslaf");
    });
})

describe('Check calculator behavior', () => {
    test('check the add feature', () => {
        expect(calculator.addNumber(1, 1)).toEqual(2);
    });
    test('check the substract feature', () => {
        expect(calculator.substructNumber(6, 2)).toEqual(4);
    });
    test('check the multiply feature', () => {
        expect(calculator.multiplyNumber(2, 2)).toEqual(4);
    });
    test('check the divide feature', () => {
        expect(calculator.divideNumber(10, 5)).toEqual(2);
    });
})
describe('Check if the first letter of a string is captalize', () => {
    test('check the first letter', () => {
        expect(captalize("c")).toBe("C");
    });
})