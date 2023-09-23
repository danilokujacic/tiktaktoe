/**
 * @jest-environment jsdom
 */
import { describe, expect, test } from "@jest/globals";
import { generateBoard, renderBoard } from "./board";

describe("board renders correct", () => {
  test("board generates accurate numbers", () => {
    expect(generateBoard(3)).toHaveLength(3);
  });
  test("board renders correct template", () => {
    const container = document.createElement("div");
    container.setAttribute("id", "root");
    document.documentElement.appendChild(container);
    const board = generateBoard(1);
    expect(renderBoard("root", board)).toBe(
      '<div class="row"><div role="button" data-position="0, 0" class="col"></div></div>'
    );
  });
});
