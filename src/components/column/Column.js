import React from "react";
import './Column.css';
import Task from "../task/Task";
import {Droppable} from "react-beautiful-dnd";


const Column = ({ column, tasks, className }) => {
  return (
    <div className={className}>
      <div className={`column-container`}>
        <Droppable
          droppableId={column.id}
          // type={props.column.id === 'column-3' ? 'done' : 'active'}
          // isDropDisabled={props.isDropDisabled}
        >
          {(provided) => (
            <div className='task-list'
                 ref={provided.innerRef}
                 {...provided.droppableProps}
            >
              {tasks.map((task, index) => {
                const isDropDisabled = (column.id !== "column-0" && column.taskIds.length !== 0);
                return (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    isDragDisabled={isDropDisabled}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}

export default Column;

