import * as React from "react";

type PropsType = {
  board: string
};

export const TrainingBoard: React.FC<PropsType> = ({ board }) => {
  return (
    <div>{board}</div>
  );
};
