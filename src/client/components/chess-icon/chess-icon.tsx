import * as React from "react";
import { BoardElement } from "../../../types";

import whitePawn from "../../assets/chess-icons/white-pawn.svg";
import whiteRook from "../../assets/chess-icons/white-rook.svg";
import whiteKnight from "../../assets/chess-icons/white-knight.svg";
import whiteBishop from "../../assets/chess-icons/white-bishop.svg";
import whiteQueen from "../../assets/chess-icons/white-queen.svg";
import whiteKing from "../../assets/chess-icons/white-king.svg";
import blackPawn from "../../assets/chess-icons/black-pawn.svg";
import blackRook from "../../assets/chess-icons/black-rook.svg";
import blackKnight from "../../assets/chess-icons/black-knight.svg";
import blackBishop from "../../assets/chess-icons/black-bishop.svg";
import blackQueen from "../../assets/chess-icons/black-queen.svg";
import blackKing from "../../assets/chess-icons/black-king.svg";

type PropsType = {
  boardElement: BoardElement,
  className: string
};

export const getSource = (boardElement: BoardElement): string => {
  switch (boardElement) {
    case "P": return whitePawn;
    case "R": return whiteRook;
    case "N": return whiteKnight;
    case "B": return whiteBishop;
    case "Q": return whiteQueen;
    case "K": return whiteKing;
    case "p": return blackPawn;
    case "r": return blackRook;
    case "n": return blackKnight;
    case "b": return blackBishop;
    case "q": return blackQueen;
    case "k": return blackKing;
    default: throw new Error("Icon is not exist");
  }
};

export const ChessIcon: React.FC<PropsType> = ({ boardElement, className }) => {
  try {
    return <img src={getSource(boardElement)} alt="Chess element" className={className} />;
  } catch (err) {
    return null;
  }
}
