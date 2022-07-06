const capitalize = require('./capitalize')
const reverseString = require('./reverse')
const calculator = require('./calculator')
const caesarCipher = require('./caesarCypher')
const analyzeArray = require('./analyzeArray')

test('First Character Capitalized', () => {
    expect(capitalize('hello')[0]).toBe('H');
})

test('Reverse String', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('Calculator', () => {
    expect(calculator(10, 2).add).toBe(12);
    expect(calculator(10, 2).subtract).toBe(8);
    expect(calculator(10, 2).divide).toBe(5);
    expect(calculator(10, 2).multiply).toBe(20);
})

test('Caesarcypher', () => {
    expect(caesarCipher('zbC !!')).toBe('acD !!');
})

test('Analyze Array' , () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
})