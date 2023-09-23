import { logEvent } from "firebase/analytics";
import { getPlayer, switchPlayer } from "../player/player";
import { attachEventsToButtons } from "../utils/buttonEvents";
import { checkForWinner, matchVertical } from "../utils/checkWinner";
import { analytics } from "../utils/analytics";

export const generateBoard = (number = 3) => {
  const board: any = [];
  for (let i = 0; i < number; i++) {
    board.push([...new Array(number)]);
  }

  return board;
};

export const renderBoard = (id = "root", board) => {
  const container: HTMLDivElement | null = document.querySelector("#" + id);

  if (!container) {
    return false;
  }

  let content = "";

  board.forEach((row, rowInd) => {
    if (!Array.isArray(row) || !row.length) {
      return false;
    }
    content += "<div class='row'>";
    row.forEach((col, colInd) => {
      content +=
        "<div role='button' data-position='" +
        rowInd +
        ", " +
        colInd +
        "' class='col'>" +
        (col ? col : "") +
        "</div>";
    });

    content += "</div>";
  });

  container.innerHTML = content;

  attachEventsToButtons(board);

  return container.innerHTML.toString();
};

export const resetBoard = (length) => {
  const board = generateBoard(length);

  return renderBoard("root", board);
};

export const updateBoard = (x, y, board) => {
  if (board[parseInt(x)][parseInt(y)]) {
    return;
  }
  board[parseInt(x)][parseInt(y)] = getPlayer();

  const winner = checkForWinner(board);
  if (winner) {
    logEvent(analytics, "winner_found", {
      winner,
    });
    resetBoard(board.length);
    return;
  }
  switchPlayer();

  return renderBoard("root", board);
};
