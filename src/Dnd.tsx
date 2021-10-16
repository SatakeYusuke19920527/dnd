import React, { useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export type ItemType = {
  id: string;
  text: string;
};

const Dnd = ({
  elements,
  elements2,
}: {
  elements: ItemType[];
  elements2: ItemType[];
}) => {
  const [items, setItems] = useState(elements);
  const [items2, setItems2] = useState(elements2);
  const handleOnDragEnd = (result: any) => {
    if (result.destination !== null) {
      console.log('drag end', result);
      const startDroppableId = result.source.droppableId;
      console.log(
        '🚀 ~ file: Dnd.tsx ~ line 22 ~ handleOnDragEnd ~ startDroppableId',
        startDroppableId
      );
      const descDroppableId = result.destination.droppableId;
      console.log(
        '🚀 ~ file: Dnd.tsx ~ line 23 ~ handleOnDragEnd ~ descDroppableId',
        descDroppableId
      );

      if (startDroppableId === descDroppableId) {
        const remove: ItemType[] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, remove[0]);
      } else {
        if (startDroppableId === 'droppableId') {
          const remove: ItemType[] = items.splice(result.source.index, 1);
          items2.splice(result.destination.index, 0, remove[0]);
        } else {
          const remove: ItemType[] = items2.splice(result.source.index, 1);
          items.splice(result.destination.index, 0, remove[0]);
        }
      }
    }
  };

  return (
    <div className="wrapper">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <div
              className="dragArea"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item: ItemType, index) => (
                <Draggable draggableId={item.text} index={index} key={item.id}>
                  {(provided) => (
                    <div
                      className="card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppableId2">
          {(provided) => (
            <div
              className="dragArea"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items2.map((item: ItemType, index) => (
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(provided) => (
                    <div
                      className="card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Dnd;
