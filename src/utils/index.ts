import { readFileSync } from "fs";
import { InputType, IParseOptions } from "types";

// TODO: expand parseInput and make it generic with different options
export function parseInput(
  filePath: string,
  options: IParseOptions = {}
): InputType {
  const { split } = options;

  const rawInput = readFileSync(filePath, "utf-8")?.trim();

  return split ? rawInput.split("\n") : rawInput;
}

export const readSolution = (
  solution: number | string,
  day: number,
  challenge: number
) =>
  console.log(`Solution for day ${day}, challenge ${challenge}: ${solution}`);

export function getFirstAndLastDigits(input: string): number {
  const inputArray = input.split("");
  const reversedInputArray = input.split("").reverse();
  const firstDigit = inputArray.find((char) => !isNaN(Number(char)));
  const lastDigit = reversedInputArray.find((char) => !isNaN(Number(char)));
  return Number(`${firstDigit}${lastDigit}`);
}
