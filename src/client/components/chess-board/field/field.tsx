import * as React from "react";
import classNames from "classnames";
import { useDrop } from "react-dnd";
import { BOARD_ELEMENTS } from "../../../../consts";
import { ChessIcon, getSource } from "../../chess-icon";
import { Draggable } from "../../draggable";
import {
  BoardElement,
  PickedElement,
  PickedElementTransition
} from "../../../../types";
import "./styles.scss";

type PropsType = {
  rowIndex: number,
  colIndex: number,
  boardElement: BoardElement,
  isPicked: (rowIndex: number, colIndex: number) => boolean,
  onPickOrPut: (row: number, col: number, boardElement: BoardElement) => void,
  onDrop: (transition: PickedElementTransition) => void
};

export const Field: React.FC<PropsType> = ({ rowIndex, colIndex, boardElement, isPicked, onPickOrPut, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: BOARD_ELEMENTS,
    canDrop: (item) => {
      const { from } = item as any as PickedElement;
      return from?.[0] !== rowIndex || from?.[1] !== colIndex;
    },
    drop: (item) => {
      const { boardElement, from } = item as any as PickedElement;
      onDrop({ boardElement, from, to: [rowIndex, colIndex] });
    },
    collect: (monitor) => ({
      isOver: Boolean(monitor.isOver()),
      canDrop: Boolean(monitor.canDrop()),
    })
  });

  const onClick = React.useCallback(() => {
    onPickOrPut(rowIndex, colIndex, boardElement);
  }, [onPickOrPut, rowIndex, colIndex, boardElement]);

  const dragItem: PickedElement & { type: string } = {
    boardElement,
    type: boardElement,
    from: [rowIndex, colIndex]
  };

  return (
    <div
      ref={drop}
      onClick={onClick}
      className={classNames(
        `board-field col-${colIndex % 2}`,
        {
          picked: isPicked(rowIndex, colIndex),
          isOver,
          canDrop
        }
      )}
    >
      {boardElement && (
        <Draggable dragItem={dragItem} dragImage={getSource(boardElement)}>
          <ChessIcon boardElement={boardElement} className="chess-icon" />
        </Draggable>
      )}
    </div>
  );
};
