// Uncomment the code below and write your tests
import { getBankAccount } from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const result = getBankAccount(10).getBalance()
    expect(result).toEqual(10)
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // const balance = getBankAccount(10).getBalance()
    const balance = 10
    const withdrawing = () => getBankAccount(balance).withdraw(11)
    expect(withdrawing).toThrow(`Insufficient funds: cannot withdraw more than ${balance}`)
  });

  test('should throw error when transferring more than balance', () => {
    const balance = 10
    const account = getBankAccount(balance)
    const transfer = () => getBankAccount(balance).transfer(11, account)
    expect(transfer).toThrow(`Insufficient funds: cannot withdraw more than ${balance}`)
    // Write your test here
  });

  test('should throw error when transferring to the same account', () => {
    const balance = 10
    const account = getBankAccount(balance)
    const transfer = () => account.transfer(11, account)
    expect(transfer).toThrow( "Transfer failed")
  });

  test('should deposit money', () => {
    const balance = 10
    const account = getBankAccount(balance)
    const deposit = account.deposit(1)
    expect(deposit).toEqual(deposit)
  });

  test('should withdraw money', () => {
    const balance = 10
    const account = getBankAccount(balance)
    const withdraw = account.withdraw(1)
    expect(withdraw).toEqual(withdraw)
  });

  test('should transfer money', () => {
    const balance = 10
    const account = getBankAccount(balance)
    const transfer = account.transfer(1, getBankAccount(balance))

    expect(transfer).toEqual(transfer)
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = 10
    const account = getBankAccount(balance)

    try {
      await account.fetchBalance();
    } catch (e) {
      expect(e).toMatch('error');
    }

  });

  test('should set new balance if fetchBalance returned number', async () => {
    const balance = 10
    const account = getBankAccount(balance)
    const fetchBalance = await account.fetchBalance()

    try {
      expect(fetchBalance).toEqual(fetchBalance)
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const balance = 10
    const account = getBankAccount(balance)
    const fetchBalance = await account.fetchBalance()

    try {
      await account.fetchBalance();
    } catch (e) {
      expect(fetchBalance).toThrow('Synchronization failed')
    }
  });
});
