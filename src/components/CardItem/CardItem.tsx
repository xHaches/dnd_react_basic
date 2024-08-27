import React from "react";
import { Data } from "../../types/Data";

interface Props {
  data: Data;
  handleDragging: (isDragging: boolean) => void;
}

const CardItem = ({ data, handleDragging }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      className="card-container"
      // eventos de dnd
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <p>{data.content}</p>
    </div>
  );
};

export default CardItem;
