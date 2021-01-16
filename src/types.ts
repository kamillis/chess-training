export type BoardState = {
  color: "white" | "black",
  board: Array<Array<BoardElement>>
};

export type BoardElement = "" | "PW" | "RW" | "KW" | "BW" | "QW" | "KIW" | "PB" | "RB" | "KB" | "BB" | "QB" | "KIB";

export type BoardPosition = [number, number];
