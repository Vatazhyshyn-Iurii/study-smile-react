import React from "react";
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  display: flex;
`;


const Task = (props) => {
  // console.log(props)
  // const isDragDisabled = props.task.id === 'task-1';


  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
      isDragDisabled={props.isDragDisabled}
    >
      {(provided, snapshot) => {
        // console.log(snapshot)
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            // isDragDisabled={isTaskDisabled(props.task.id)}
          >
            {props.task.content}
          </Container>
        )
      }}
    </Draggable>
  )
};

export default Task;