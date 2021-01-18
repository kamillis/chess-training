import * as React from "react";
import classNames from "classnames";
import { BoardElement, PickedElement } from "../../../types";
import { ChessIcon } from "../chess-icon";
import "./styles.scss";

type PropsType = {
  isPicked: (boardElement: BoardElement) => boolean,
  onPick: (value: PickedElement | null) => void,
  className?: string
};

const boardElements: Array<BoardElement> = ["PW", "RW", "KW", "BW", "QW", "KIW", "PB", "RB", "KB", "BB", "QB", "KIB", ""];

export const Toolbox: React.FC<PropsType> = ({ isPicked, onPick, className }) => {
  return (
    <div className={className}>
      {boardElements.map(boardElement => {
        const picked = isPicked(boardElement);

        return (
          <button
            type="button"
            key={boardElement || "X"}
            onClick={() => onPick(picked ? null : { boardElement, from: null })}
            className={classNames("toolbox-button", { picked })}
          >
            {boardElement ? <ChessIcon boardElement={boardElement} className="chess-icon" /> : "X"}
          </button>
        );
      })}
    </div>
  );
};
