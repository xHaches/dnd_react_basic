import { useState } from "react";
import { Data } from "../types/Data";
import { Status } from "../types/Status";

const useDragAndDrop = (initialState: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(initialState);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, status: Status) => {
    let card = listItems.find((item) => item.id === id);
    if (card && card.status !== status) {
      card.status = status;
      setListItems((prev) => [card!, ...prev.filter((item) => item.id !== id)]);
    }
  };

  return {
    isDragging,
    listItems,
    handleDragging,
    handleUpdateList,
  };
};

export default useDragAndDrop;
