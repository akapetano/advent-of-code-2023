/* On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values? */

import { InputType, IParseOptions } from "types";
import { join } from "path";
import { parseInput } from "../../utils";

const path = join(__dirname, "input.txt");
const input = parseInput(path, { split: true }) as string[];

function getFirstAndLastDigits(input: string): number {
  const inputArray = input.split("");
  const reversedInputArray = input.split("").reverse();
  const firstDigit = inputArray.find((char) => !isNaN(Number(char)));
  const lastDigit = reversedInputArray.find((char) => !isNaN(Number(char)));
  return Number(`${firstDigit}${lastDigit}`);
}

export function solve(): number {
  const numbers = input.map((line) => getFirstAndLastDigits(line));
  const result = numbers.reduce((acc, curr) => acc + curr, 0);

  return result;
}
