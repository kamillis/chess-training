import * as React from "react";
import {
  BoardElement,
  PickedElement,
  PickedElementTransition
} from "../../types";

export const useBoardPicker = (onPut: (transition: PickedElementTransition) => void) => {
  const [picked, setPicked] = React.useState<PickedElement | null>(null);

  const isPickedByPosition = React.useCallback((row: number, col: number): boolean => {
    return picked?.from?.[0] === row && picked?.from?.[1] === col;
  }, [picked]);

  const isPickedByElement = React.useCallback((boardElement: BoardElement): boolean => {
    return picked?.from === null && picked?.boardElement === boardElement;
  }, [picked]);

  const onDrop = React.useCallback((transition: PickedElementTransition) => {
    if (picked?.from) setPicked(null);
    onPut(transition);
  }, [picked, setPicked, onPut]);

  const onPickOrPut = React.useCallback((row: number, col: number, boardElement: BoardElement) => {
    // case if you put element on the board
    if (picked && (!picked.from || !isPickedByPosition(row, col))) {
      if (picked.from) setPicked(null);
      onPut({
        boardElement: picked.boardElement,
        from: picked.from,
        to: [row, col]
      });
    // case if you click on the same element on the board
    } else if (picked && picked.from && isPickedByPosition(row, col)) {
      setPicked(null);
    // case if you pick element from the board
    } else if (!picked && boardElement !== "") {
      setPicked({ boardElement, from: [row, col] });
    }
  }, [picked, isPickedByPosition, setPicked, onPut]);

  return { setPicked, isPickedByElement, isPickedByPosition, onPickOrPut, onDrop };
};
