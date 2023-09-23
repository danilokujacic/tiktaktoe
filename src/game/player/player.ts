let currentPlayer = "X";

export const getPlayer = () => {
  return currentPlayer;
};

export const switchPlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};
