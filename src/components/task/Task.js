import React from "react";
import './Task.css';
import {Draggable} from "react-beautiful-dnd";


const Task = ({ task, index, isDragDisabled }) => {
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided) => {
        return (
          <div className={`Task ${task.class}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
          </div>
        )
      }}
    </Draggable>
  )
};

export default Task;