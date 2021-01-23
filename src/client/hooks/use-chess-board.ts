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
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"],
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
