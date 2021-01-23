import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toolbox } from "./toolbox";
import { Field } from "./field";
import { BoardState, PickedElementTransition } from "../../../types";
import { useBoardPicker } from "../../hooks/use-board-picker";
import "./styles.scss";

type PropsType = {
  data: BoardState,
  onPut: (transition: PickedElementTransition) => void
};

export const ChessBoard: React.FC<PropsType> = ({ data, onPut }) => {
  const { setPicked, onPickOrPut, onDrop, isPickedByPosition, isPickedByElement } = useBoardPicker(onPut);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="chess-board-container">
        <Toolbox isPicked={isPickedByElement} onPick={setPicked} className="toolbox" />
        <div className={`chess-board ${data.color}-bottom`}>
          {data.board.map((row, rowIndex) => (
            <div key={rowIndex} className={`board-row row-${rowIndex % 2}`}>
              {row.map((boardElement, colIndex) => (
                <Field
                  key={colIndex}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  boardElement={boardElement}
                  isPicked={isPickedByPosition}
                  onPickOrPut={onPickOrPut}
                  onDrop={onDrop}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};
