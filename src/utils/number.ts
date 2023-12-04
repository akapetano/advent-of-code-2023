export const sum = (numbers: Array<number>): number =>
  numbers?.length
    ? numbers?.reduce((sum, currentNumber) => (sum += currentNumber), 0)
    : null;
