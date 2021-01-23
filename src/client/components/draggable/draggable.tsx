import * as React from "react";
import classNames from "classnames";
import { DragPreviewImage, useDrag } from "react-dnd";
import "./styles.scss";

type PropsType = {
  dragItem: { type: string },
  dragImage: string
};

export const Draggable: React.FC<PropsType> = ({ dragItem, dragImage, children }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: dragItem,
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging())
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={dragImage} />
      <div ref={drag} className={classNames({ isDragging })}>
        {children}
      </div>
    </>
  );
};
