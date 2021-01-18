import * as React from "react";
import classNames from "classnames";
import { Toolbox } from "../toolbox";
import { ChessIcon } from "../chess-icon";
import { BoardState, PickedElementTransition } from "../../../types";
import { useBoardPicker } from "../../hooks/use-board-picker";
import "./styles.scss";

type PropsType = {
  data: BoardState,
  onPut: (transition: PickedElementTransition) => void
};

const sideNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const bottomLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const ChessBoard: React.FC<PropsType> = ({ data, onPut }) => {
  const { setPicked, onPickOrPut, isPickedByPosition, isPickedByElement } = useBoardPicker(onPut);

  return (
    <div className="chess-board-container">
      <Toolbox isPicked={isPickedByElement} onPick={setPicked} className="toolbox" />
      <div className={`side-counter ${data.color}-bottom`}>
        {sideNumbers.map(number => <div key={number}>{number}</div>)}
      </div>
      <div className={`bottom-counter ${data.color}-bottom`}>
        {bottomLetters.map(letter => <div key={letter}>{letter}</div>)}
      </div>
      <div className={`chess-board ${data.color}-bottom`}>
        {data.board.map((row, rowIndex) => (
          <div key={rowIndex} className={`board-row row-${rowIndex % 2}`}>
            {row.map((boardElement, colIndex) => (
              <div
                key={colIndex}
                onClick={() => onPickOrPut(rowIndex, colIndex, boardElement)}
                className={classNames(
                  `board-field col-${colIndex % 2}`,
                  { picked: isPickedByPosition(rowIndex, colIndex) }
                )}
              >
                <ChessIcon boardElement={boardElement} className="chess-icon" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
