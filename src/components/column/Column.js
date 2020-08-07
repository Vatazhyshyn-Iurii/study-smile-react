import React from "react";
import styled from 'styled-components';
import './Column.css';
import Task from "../task/task";
import {Droppable} from "react-beautiful-dnd";


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;


const Column = (props) => {

  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable
        droppableId={props.column.id}
        // type={props.column.id === 'column-3' ? 'done' : 'active'}
        // isDropDisabled={props.isDropDisabled}
      >
        {(provided) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.tasks.map((task, index) => {
              const isDropDisabled = (props.column.id !== "column-0" && props.column.taskIds.length !== 0);
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
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

export default Column;

