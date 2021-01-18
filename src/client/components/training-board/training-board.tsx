import * as React from "react";
import { useChessBoard } from "../../hooks/use-chess-board";
import { ChessBoard } from "../chess-board";
import "./styles.scss";

type PropsType = {
  boardId: string
};

export const TrainingBoard: React.FC<PropsType> = ({ boardId }) => {
  const { data, onPut, onToggleColor, onSetDefault, onClear } = useChessBoard(boardId);

  return (
    <>
      <div className="board-navigation">
        <button type="button" onClick={onSetDefault}>Set default</button>
        <button type="button" onClick={onClear} disabled={!data}>Clear board</button>
        <button type="button" onClick={onToggleColor} disabled={!data}>Toggle side</button>
      </div>
      {data && <ChessBoard data={data} onPut={onPut} />}
    </>
  );
};
