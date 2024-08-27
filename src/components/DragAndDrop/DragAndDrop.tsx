import { Status } from "../../types/Status";
import ContainerCards from "../ContainerCards/ContainerCards";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import { data } from "../../constants/data";

const typesHero: Status[] = ["good", "bad", "normal"];

export const DragAndDrop = () => {
  const { handleDragging, handleUpdateList, isDragging, listItems } =
    useDragAndDrop(data);

  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards
          status={container}
          key={container}
          items={listItems}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
