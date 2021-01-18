export type ChessColor = "white" | "black";
export type BoardElement = "" | "PW" | "RW" | "KW" | "BW" | "QW" | "KIW" | "PB" | "RB" | "KB" | "BB" | "QB" | "KIB";
export type BoardState = { color: ChessColor, board: Array<Array<BoardElement>> };
export type BoardPosition = [number, number];
export type PickedElement = { boardElement: BoardElement, from: null | BoardPosition };
export type PickedElementTransition = PickedElement & { to: BoardPosition };
