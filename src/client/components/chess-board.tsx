import * as React from "react";
import {BoardElement, BoardPosition, BoardState} from "../../types";
import "./chess-board.css";

type PropsType = {
  data: BoardState,
  onSetPosition: (boardElement: BoardElement, from: null | BoardPosition, to: BoardPosition) => void
};

const sideNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const bottomLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const getBoardPosition = (color: "white" | "black", rowIndex: number, colIndex: number): BoardPosition => {
//   return [4, 4];
// };

export const ChessBoard: React.FC<PropsType> = ({ data, onSetPosition }) => {
  const [picked, setPicked] = React.useState<{ boardElement: BoardElement, from: null | BoardPosition } | null>(null);

  return (
    <div className="chess-board-container">
      <div className={`side-counter ${data.color}-bottom`}>
        {sideNumbers.map(number => <div key={number}>{number}</div>)}
      </div>
      <div className={`bottom-counter ${data.color}-bottom`}>
        {bottomLetters.map(letter => <div key={letter}>{letter}</div>)}
      </div>
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
    </div>
  );
};
