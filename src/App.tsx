import React, { useState } from 'react';
import './App.css';
import { CHARACTERS } from './charactersData';
import Dnd from './Dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type ItemType = {
  id: string;
  text: string;
};

function App() {
  const [items, setItems] = useState([
    { id: '1', text: 'item0' },
    { id: '2', text: 'item1' },
    { id: '3', text: 'item2' },
  ]);
  const handleOnDragEnd = (result: any) => {
    console.log('drag end', result);
    const remove: ItemType[] = items.splice(result.source.index, 1);
    console.log(remove);
    items.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <div className="wrapper">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable draggableId={item.text} index={index}>
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
}

export default App;
