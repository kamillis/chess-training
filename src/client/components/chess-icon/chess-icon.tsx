import * as React from "react";
import {BoardElement} from "../../../types";

import whitePawn from "../../assets/white-pawn.svg";
import whiteRook from "../../assets/white-rook.svg";
import whiteKnight from "../../assets/white-knight.svg";
import whiteBishop from "../../assets/white-bishop.svg";
import whiteQueen from "../../assets/white-queen.svg";
import whiteKing from "../../assets/white-king.svg";
import blackPawn from "../../assets/black-pawn.svg";
import blackRook from "../../assets/black-rook.svg";
import blackKnight from "../../assets/black-knight.svg";
import blackBishop from "../../assets/black-bishop.svg";
import blackQueen from "../../assets/black-queen.svg";
import blackKing from "../../assets/black-king.svg";

type PropsType = {
  boardElement: BoardElement
};

export const ChessIcon: React.FC<PropsType> = ({ boardElement }) => {
  const props = { alt: "Chess figure", width: 60, height: 60 };

  switch (boardElement) {
    case "PW": return <img {...props} src={whitePawn} />;
    case "RW": return <img {...props} src={whiteRook} />;
    case "KW": return <img {...props} src={whiteKnight} />;
    case "BW": return <img {...props} src={whiteBishop} />;
    case "QW": return <img {...props} src={whiteQueen} />;
    case "KIW": return <img {...props} src={whiteKing} />;
    case "PB": return <img {...props} src={blackPawn} />;
    case "RB": return <img {...props} src={blackRook} />;
    case "KB": return <img {...props} src={blackKnight} />;
    case "BB": return <img {...props} src={blackBishop} />;
    case "QB": return <img {...props} src={blackQueen} />;
    case "KIB": return <img {...props} src={blackKing} />;
    default: return null;
  }
}
