import { describe, expect, test } from "@jest/globals";
import { getPlayer, switchPlayer } from "./player";

describe("player works corectly", () => {
  test("if player state is X render O and reverse", () => {
    let currentPlayer = "X";
    expect(getPlayer()).toBe("X");
    switchPlayer();
    expect(getPlayer()).toBe("O");
  });
});
