import { join } from "path";
import { parseInput } from "../utils/input";
import { sum } from "../utils/number";

const path = join(__dirname, "input.txt");
const input = parseInput(path, { split: true }) as string[];

const maxCubes = { red: 12, green: 13, blue: 14 } as const;

function getPossibleGamesIds(input: string): number {
  const [gameId, gameContent] = input.split(": ");
  const content = gameContent.split("; ");
  const [__, id] = gameId.split(" ");
  const valueColorPairString = content.map((turn) => turn.split(", ")).flat();
  const keyValuePairs = valueColorPairString
    .map((pair) => {
      const [number, color] = pair.split(" ");
      return { [color]: Number(number) };
    })
    .flat();

  const red = keyValuePairs
    .filter((pair) => Object.keys(pair)[0] === "red")
    .map((pair) => Object.values(pair)[0])
    .reduce((acc, curr) => acc + curr, 0);
  const blue = keyValuePairs
    .filter((pair) => Object.keys(pair)[0] === "blue")
    .map((pair) => Object.values(pair)[0])
    .reduce((acc, curr) => acc + curr, 0);
  const green = keyValuePairs
    .filter((pair) => Object.keys(pair)[0] === "green")
    .map((pair) => Object.values(pair)[0])
    .reduce((acc, curr) => acc + curr, 0);

  if (red > maxCubes.red || blue > maxCubes.blue || green > maxCubes.green) {
    return 0;
  } else {
    return Number(id);
  }
}

export function solve(): number {
  const possibleGamesIds = input.map(getPossibleGamesIds);
  const result = sum(possibleGamesIds);
  return result;
}
