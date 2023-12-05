import { join } from "path";
import { parseInput } from "../utils/input";
import { sum } from "../utils/number";
import { InputType } from "types";

const path = join(__dirname, "input.txt");
const inputData = parseInput(path, { split: true }) as string[];

const maxCubes = { red: 12, green: 13, blue: 14 } as const;

export type CubeRevealTuple = [value: number, color: "red" | "green" | "blue"];

function getPossibleGamesIds(inputData: string[]): any {
  function getGameData(
    input: string
  ): [id: number, reveals: CubeRevealTuple[]] {
    const [gameId, games] = input.split(":").map((a) => a.trim());
    const id = Number(gameId.split(" ")[1]);

    const content = games.split("; ").map((turn) => turn.trim());

    const reveals = content
      .map((pair) => pair.split(", "))
      .flat()
      .map((a) => a.split(" ") as CubeRevealTuple);

    return [id, reveals];
  }

  function isGamePossible(reveal: CubeRevealTuple) {
    const [value, color] = reveal;

    const possibleTotal = maxCubes[color];

    return value <= possibleTotal || false;
  }

  const validGamesIds = inputData
    .map(getGameData)
    .filter(
      ([_, reveals]) => !reveals.some((reveal) => !isGamePossible(reveal))
    )
    .map(([id]) => id);

  return validGamesIds;
}

export function solve(): number {
  const possibleGamesIds = getPossibleGamesIds(inputData);
  const result = sum(possibleGamesIds);
  return result;
}
