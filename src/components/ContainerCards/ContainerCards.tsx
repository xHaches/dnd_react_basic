import React from "react";
import { Status } from "../../types/Status";
import { Data } from "../../types/Data";
import CardItem from "../CardItem/CardItem";

interface Props {
  status: Status;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: Status) => void
}

const ContainerCards = ({
  status,
  items = [],
  handleDragging,
  handleUpdateList,
  isDragging,
}: Props) => {

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    // por defecto los datos no pueden ser soltados en otros elementos, para permitir soltarlos se debe evitar el comportamiento por defecto
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    // prevenir que nos saque de la app al soltar el elemento (se nota más con imagenes)
    e.preventDefault()
    const id = +e.dataTransfer.getData("text")
    handleUpdateList(id, status)
    handleDragging(false)
  }


  return (
    <div className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
      // se preduce cuando un elemento que es arrastable se arrastra sobre un objeto a soltar válido 
    onDragOver={handleDragOver}
    // se produce cuando el elemento arrastrado se deja caer
    onDrop={handleDrop}
    >
      <p>{status} hero</p>
      {items.map(
        (item) =>
          status === item.status && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )}
    </div>
  );
};

export default ContainerCards;
