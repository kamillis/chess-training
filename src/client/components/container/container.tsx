import * as React from "react";
import {BoardSelector} from "../board-selector";
import {TrainingBoard} from "../training-board";
import "./styles.scss";

export const Container: React.FC = () => {
  const [board, setBoard] = React.useState("");

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const boardParam = urlParams.get("board");
    setBoard(boardParam || "");
  }, [window.location.search]);

  return (
    <div className="page-container">
      {board ? <TrainingBoard board={board} /> : <BoardSelector />}
    </div>
  );
};
