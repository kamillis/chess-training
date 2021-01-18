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

export const ChessIcon: React.FC<PropsType> = ({ boardElement, className }) => {
  const props = { className };

  switch (boardElement) {
    case "PW": return <img {...props} src={whitePawn} alt="White pawn" />;
    case "RW": return <img {...props} src={whiteRook} alt="White rook" />;
    case "KW": return <img {...props} src={whiteKnight} alt="White knight" />;
    case "BW": return <img {...props} src={whiteBishop} alt="White bishop" />;
    case "QW": return <img {...props} src={whiteQueen} alt="White queen" />;
    case "KIW": return <img {...props} src={whiteKing} alt="White king" />;
    case "PB": return <img {...props} src={blackPawn} alt="Black pawn" />;
    case "RB": return <img {...props} src={blackRook} alt="Black rook" />;
    case "KB": return <img {...props} src={blackKnight} alt="Black knight" />;
    case "BB": return <img {...props} src={blackBishop} alt="Black bishop" />;
    case "QB": return <img {...props} src={blackQueen} alt="Black queen" />;
    case "KIB": return <img {...props} src={blackKing} alt="Black king" />;
    default: return null;
  }
}
