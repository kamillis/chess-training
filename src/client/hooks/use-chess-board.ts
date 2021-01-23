import * as React from "react";
import { useSocket } from "./use-socket";
import {
  BoardState,
  PickedElementTransition
} from "../../types";

export const useChessBoard = (boardId: string) => {
  const [data, setData] = useSocket<BoardState>(boardId);

  const onSetDefault = React.useCallback(() => {
    setData({
      color: "white",
      board: [
        ["RB", "KB", "BB", "QB", "KIB", "BB", "KB", "RB"],
        ["PB", "PB", "PB", "PB", "PB", "PB", "PB", "PB"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["PW", "PW", "PW", "PW", "PW", "PW", "PW", "PW"],
        ["RW", "KW", "BW", "QW", "KIW", "BW", "KW", "RW"],
      ]
    });
  }, [setData]);

  const onClear = React.useCallback(() => {
    if (data) {
      setData({
        ...data,
        board: [
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
        ]
      })
    }
  }, [setData, data]);

  const onToggleColor = React.useCallback(() => {
    if (data) {
      setData({ ...data, color: data.color === "black" ? "white" : "black" });
    }
  }, [setData, data]);

  const onPut = React.useCallback(({ boardElement, from, to }: PickedElementTransition) => {
    if (data) {
      const newBoard = [...data.board];
      newBoard[to[0]] = [...newBoard[to[0]]];
      newBoard[to[0]][to[1]] = boardElement;

      if (from) {
        newBoard[from[0]] = [...newBoard[from[0]]];
        newBoard[from[0]][from[1]] = "";
      }

      setData({ ...data, board: newBoard });
    }
  }, [setData, data]);

  return { data, onPut, onToggleColor, onSetDefault, onClear };
};
