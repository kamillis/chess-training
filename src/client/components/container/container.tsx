import * as React from "react";
import { BoardSelector } from "../board-selector";
import { TrainingBoard } from "../training-board";
import "./styles.scss";

export const Container: React.FC = () => {
  const [boardId, setBoardId] = React.useState("");

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const boardIdParam = urlParams.get("board");
    setBoardId(boardIdParam || "");
  }, [window.location.search]);

  return (
    <div className="page-container">
      {boardId ? <TrainingBoard boardId={boardId} /> : <BoardSelector />}
    </div>
  );
};
