import * as React from "react";
import classNames from "classnames";
import { BoardElement, PickedElement } from "../../../../types";
import { ChessIcon, getSource } from "../../chess-icon";
import { BOARD_ELEMENTS } from "../../../../consts";
import { Draggable } from "../../draggable";
import "./styles.scss";

type PropsType = {
  isPicked: (boardElement: BoardElement) => boolean,
  onPick: (value: PickedElement | null) => void,
  className?: string
};

export const Toolbox: React.FC<PropsType> = ({ isPicked, onPick, className }) => {
  return (
    <div className={className}>
      {BOARD_ELEMENTS.map(boardElement => {
        const picked = isPicked(boardElement);

        const dragItem: PickedElement & { type: string } = {
          boardElement,
          type: boardElement,
          from: null
        };

        const button = (
          <button
            type="button"
            key={boardElement || "X"}
            onClick={() => onPick(picked ? null : { boardElement, from: null })}
            className={classNames("toolbox-button", { picked })}
          >
            {boardElement ? <ChessIcon boardElement={boardElement} className="chess-icon" /> : "X"}
          </button>
        );

        return !boardElement ? button : (
          <Draggable key={boardElement || "X"} dragItem={dragItem} dragImage={getSource(boardElement)}>
            {button}
          </Draggable>
        );
      })}
    </div>
  );
};
