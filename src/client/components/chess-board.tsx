import * as React from "react";
import {BoardElement, BoardPosition, BoardState} from "../../types";
import "./chess-board.css";

type PropsType = {
  data: BoardState,
  onSetPosition: (boardElement: BoardElement, from: null | BoardPosition, to: BoardPosition) => void
};

// const getBoardPosition = (color: "white" | "black", rowIndex: number, colIndex: number): BoardPosition => {
//   return [4, 4];
// };

export const ChessBoard: React.FC<PropsType> = ({ data, onSetPosition }) => {
  const [picked, setPicked] = React.useState<{ boardElement: BoardElement, from: null | BoardPosition } | null>(null);

  return (
    <div className={`chess-board ${data.color}-bottom`}>
      {data.board.map((row, rowIndex) => (
        <div key={rowIndex} className={`board-row row-${rowIndex % 2}`}>
          {row.map((col, colIndex) => {
            const onClick = () => {};

            return (
              <div key={colIndex} className={`board-field col-${colIndex % 2}`} onClick={onClick}>
                {col}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
