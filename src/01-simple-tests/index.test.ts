// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({a: 5, b: 5, action: Action.Add})
    expect(result).toEqual(10)
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({a: 15, b: 5, action: Action.Subtract})
    expect(result).toEqual(10)
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({a: 2, b: 5, action: Action.Multiply})
    expect(result).toEqual(10)
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({a: 50, b: 5, action: Action.Divide})
    expect(result).toEqual(10)
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({a: 3, b: 3, action: Action.Exponentiate})
    expect(result).toEqual(27)
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({a: 3, b: 3, action: undefined})
    expect(result).toEqual(null)
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({a: '3', b: '3', action: Action.Add})
    expect(result).toEqual(null)
  });
});
