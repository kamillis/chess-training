export type ChessColor = "white" | "black";
export type BoardElement = "" | "P" | "R" | "N" | "B" | "Q" | "K" | "p" | "r" | "n" | "b" | "q" | "k";
export type BoardState = { color: ChessColor, board: Array<Array<BoardElement>> };
export type BoardPosition = [number, number];
export type PickedElement = { boardElement: BoardElement, from: null | BoardPosition };
export type PickedElementTransition = PickedElement & { to: BoardPosition };
