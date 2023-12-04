/* Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values? */

import { join } from "path";
import { parseInput, sum } from "../utils";

const path = join(__dirname, "input.txt");
const input = parseInput(path, { split: true }) as string[];

const numeralsDictionary: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const digitNumerals = Object.keys(numeralsDictionary);
const digits = Object.values(numeralsDictionary);

function getDigitRecursive(
  input: string,
  index: number,
  direction: "forwards" | "backwards" = "forwards"
): string {
  const currentCharacter = input[index];

  if (digits.toString().includes(currentCharacter)) {
    return currentCharacter;
  }

  const inputSubstring = input.substring(index, input.length);
  const numeral = digitNumerals.find(
    (numeral) => inputSubstring.indexOf(numeral) === 0
  );

  if (numeral) {
    return numeralsDictionary[numeral].toString();
  }

  const nextIndex = direction === "forwards" ? index + 1 : index - 1;

  return getDigitRecursive(input, nextIndex, direction);
}

export function solve(): number {
  const numbers = input.map((line) => {
    const firstDigit = getDigitRecursive(line, 0);
    const lastDigit = getDigitRecursive(line, line.length - 1, "backwards");

    return Number(`${firstDigit}${lastDigit}`);
  });

  const result = sum(numbers);

  return result;
}
