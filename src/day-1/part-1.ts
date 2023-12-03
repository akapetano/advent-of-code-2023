/* On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values? */

import { getFirstAndLastDigits } from "../utils";
import { join } from "path";
import { parseInput } from "../utils";

const path = join(__dirname, "input.txt");
const input = parseInput(path, { split: true }) as string[];

export function solve(): number {
  const numbers = input.map((line) => getFirstAndLastDigits(line));
  const result = numbers.reduce((acc, curr) => acc + curr, 0);

  return result;
}
