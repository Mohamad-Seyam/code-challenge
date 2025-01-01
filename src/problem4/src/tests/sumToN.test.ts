import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from '../utils/sumToN';

describe('Summation to n', () => {
  const testCases = [
    { input: 1, output: 1 },
    { input: 5, output: 15 },
    { input: 10, output: 55 },
    { input: 0, output: 0 },
    { input: 100, output: 5050 },];

  testCases.forEach(({ input, output }) => {
    test(`sum_to_n_a(${input}) should return ${output}`, () => {
      expect(sum_to_n_a(input)).toBe(output);
    });

    test(`sum_to_n_b(${input}) should return ${output}`, () => {
      expect(sum_to_n_b(input)).toBe(output);
    });

    test(`sum_to_n_c(${input}) should return ${output}`, () => {
      expect(sum_to_n_c(input)).toBe(output);
    });
  });
});
