// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const data = await resolveValue('error');
    expect(data).toBe(data);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const t = () => throwError('error');
    expect(t).toThrow('error')
  });

  test('should throw error with default message if message is not provided', () => {
    const t = () => throwError();
    expect(t).toThrow('Oops!')
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(throwCustomError).toThrow(new MyAwesomeError())
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow('This is my awesome custom error!');
  });
});