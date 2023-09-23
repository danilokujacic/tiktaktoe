import { updateBoard } from "../board/board";

export const attachEventsToButtons = (board) => {
  const buttons = document.querySelectorAll(".col");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("arara");
      if (event.target && event.target instanceof HTMLDivElement) {
        const coords = event.target.getAttribute("data-position");
        updateBoard(coords?.split(",")[0], coords?.split(",")[1], board);
      }
    });
  });
};
