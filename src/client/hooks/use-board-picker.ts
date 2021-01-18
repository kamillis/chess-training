import * as React from "react";
import {BoardElement, BoardPosition} from "../../types";

export const useBoardPicker = (onPut: (boardElement: BoardElement, from: null | BoardPosition, to: BoardPosition) => void) => {
  const [picked, setPicked] = React.useState<{ boardElement: BoardElement, from: null | BoardPosition } | null>(null);

  const isPickedByPosition = React.useCallback((row: number, col: number): boolean => {
    return picked?.from?.[0] === row && picked?.from?.[1] === col;
  }, [picked]);

  const isPickedByElement = React.useCallback((boardElement: BoardElement) => {
    return picked?.from === null && picked?.boardElement === boardElement;
  }, [picked]);

  const onPickOrPut = (row: number, col: number, boardElement: BoardElement) => {
    // case if you put element on the board
    if (picked && (!picked.from || !isPickedByPosition(row, col))) {
      if (picked.from) setPicked(null);
      onPut(picked.boardElement, picked.from, [row, col]);
    // case if you click on the same element on the board
    } else if (picked && picked.from && isPickedByPosition(row, col)) {
      setPicked(null);
    // case if you pick element from the board
    } else if (!picked && boardElement !== "") {
      setPicked({ boardElement, from: [row, col] });
    }
  };

  return { setPicked, isPickedByElement, isPickedByPosition, onPickOrPut };
};
