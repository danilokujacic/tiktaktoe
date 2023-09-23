import { logEvent } from "firebase/analytics";
import { analytics } from "./analytics";

const matchRow = (row = []) =>
  row.every((col) => col === "X")
    ? "X"
    : row.every((col) => col === "O")
    ? "O"
    : false;

export const matchHorizontal = (board) => {
  for (let i = 0; i < board.length; i++) {
    const winner = matchRow(board[i]);
    if (winner) {
      logEvent(analytics, "horizontal_win");
      return winner;
    }
  }
  return false;
};

export const matchDiagonal = (board) => {
  let row = [];
  let winner;

  for (let i = 0; i < board.length; i++) {
    row.push(board[i][i]);
  }
  winner = matchRow(row);
  if (winner) {
    logEvent(analytics, "diagonal_win");
    return winner;
  }
  row = [];
  for (let i = 0; i < board.length; i++) {
    row.push(board[i][board.length - 1 - i]);
  }
  winner = matchRow(row);
  if (winner) {
    logEvent(analytics, "diagonal_win");
    return winner;
  }

  return false;
};

export const matchVertical = (board) => {
  let columnCounter = 0;
  while (columnCounter < board.length) {
    const row = [];
    for (let i = 0; i < board.length; i++) {
      row.push(board[i][columnCounter]);
    }
    const winner = matchRow(row);
    if (winner) {
      logEvent(analytics, "vertical__win");
      return winner;
    }
    columnCounter++;
  }

  return false;
};

export const checkForWinner = (board) => {
  return matchHorizontal(board) || matchVertical(board) || matchDiagonal(board);
};
