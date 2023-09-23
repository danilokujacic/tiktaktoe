import { logEvent } from "firebase/analytics";
import { renderBoard, generateBoard } from "./game/board/board";
import { analytics } from "./game/utils/analytics";

import "./styles.css";

const initGame = () => {
  const board = generateBoard(3);

  logEvent(analytics, "game_started");
  renderBoard("root", board);
};

initGame();
