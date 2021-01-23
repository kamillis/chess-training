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
    case "PW": return whitePawn;
    case "RW": return whiteRook;
    case "KW": return whiteKnight;
    case "BW": return whiteBishop;
    case "QW": return whiteQueen;
    case "KIW": return whiteKing;
    case "PB": return blackPawn;
    case "RB": return blackRook;
    case "KB": return blackKnight;
    case "BB": return blackBishop;
    case "QB": return blackQueen;
    case "KIB": return blackKing;
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
