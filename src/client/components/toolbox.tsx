import * as React from "react";
import {BoardElement} from "../../types";
import {ChessIcon} from "./chess-icon";

type PropsType = {
  onPick: (value: { boardElement: BoardElement, from: null }) => void,
  className?: string
};

const boardElements: Array<BoardElement> = ["PW", "RW", "KW", "BW", "QW", "KIW", "PB", "RB", "KB", "BB", "QB", "KIB", ""];

export const Toolbox: React.FC<PropsType> = ({ onPick, className }) => {
  return (
    <div className={className}>
      {boardElements.map(boardElement => (
        <button key={boardElement || "X"} type="button" onClick={() => onPick({ boardElement, from: null })}>
          {boardElement ? <ChessIcon boardElement={boardElement} /> : "X"}
        </button>
      ))}
    </div>
  );
};
