import React from 'react';
import './App.css';
import Figure from "../figure/Figure";
import TargetSquare from "../target-square/target-square";
import { initialData } from "../../initial-data";

const wrapper = () => (
  <div className="wrapper">
    <div className="targets">
      <TargetSquare/>
    </div>
    <div className="figures">
      <Figure/>
    </div>
  </div>
);

class App extends React.Component {
  state = initialData;

  render() {
    return (
      this.state.columnOrder.map((colunmId) => {
        const column = this.state.columns[colunmId];
        const tasks = column.tasksIds.map(taskId => this.state.tasks[taskId]);

        return column.title;
      })
    );
  }
}

export default App;
