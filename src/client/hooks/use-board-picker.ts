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
    if (picked && (!picked.from || !isPickedByPosition(row, col))) {
      setPicked(null);
      onPut(picked.boardElement, picked.from, [row, col]);
    } else if (picked && picked.from && isPickedByPosition(row, col)) {
      setPicked(null);
    } else if (!picked && boardElement !== "") {
      setPicked({ boardElement, from: [row, col] });
    }
  };

  return { setPicked, isPickedByElement, isPickedByPosition, onPickOrPut };
};
