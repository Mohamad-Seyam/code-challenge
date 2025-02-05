export function sum_to_n_a(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
  
export function sum_to_n_b(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  return (n * (n + 1)) / 2;
}
  
export function sum_to_n_c(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n_c(n - 1);
}
  