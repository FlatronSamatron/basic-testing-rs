// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 5, b: 2, action: Action.Subtract, expected: 3 },
  { a: 10, b: 2, action: Action.Subtract, expected: 8 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 5, b: 2, action: Action.Multiply, expected: 10 },
  { a: 10, b: 2, action: Action.Multiply, expected: 20 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  // test('should blah-blah', () => {
  //   expect(true).toBe(true);
  // });
  // Consider to use Jest table tests API to test all cases above
  test.each(testCases)(
      'should calculate a b action equals to expected',
      ({ a, b, action, expected }) => {
        expect(simpleCalculator({ a, b, action })).toBe(expected);
      }
  );
});
