import React from 'react';
import './App.css';
import { initialData } from "../../initial-data";
import Column from "../column/Column";
import {DragDropContext} from "react-beautiful-dnd";


class App extends React.Component {
  state = initialData;

  onDragStart = start => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex
    });
  }

  onDragEnd = (result) => {
    this.setState({
      homeIndex: null
    });

    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId && destination.index === source.index
    ) {
      return;
    }

    if (+destination.droppableId.slice(-1) !== +draggableId.slice(-1)) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if(start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div className='container'>
          {this.state.columnOrder.map((colunmId) => {
            const column = this.state.columns[colunmId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                className={column.class}
              />
              );
          })}
        </div>
      </DragDropContext>
    );
  }
}

export default App;
