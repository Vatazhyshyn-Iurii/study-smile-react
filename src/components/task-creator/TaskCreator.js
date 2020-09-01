import React, {useState} from "react";


const TaskCreator = () => {
  const [task, setTask] = useState({dustbins: [], boxes: []});
  const [dustbinAccepts, setDustbinAccepts] = useState('');
  const [dustbinStyles, setDustbinStyles] = useState('');
  const [boxType, setBoxType] = useState('');
  const [boxStyles, setBoxStyles] = useState('');

  const submitHandler = event => {
    event.preventDefault();
  };
  const addItemHandler = (e) => {
    e.preventDefault();
    const dustbin = { accepts: dustbinAccepts, styles: dustbinStyles };
    const box = { accepts: boxType, styles: boxStyles };
    const dustbins = [...task.dustbins];
    const boxes = [...this.state.task.boxes];
    dustbins.push(dustbin);
    boxes.push(box);
    const taskItem = {
      dustbins,
      boxes,
    };
  }

  return (
    <div>
      <h1>Task Creator</h1>
      <form onSubmit={submitHandler}>
        <label> Target item name:
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="dustbinAccepts"
            value={dustbinAccepts}
            onChange={(e) => setDustbinAccepts(e.target.value)}
          />
        </label>
        <label> Target item css properties:
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="dustbinStyles"
            value={dustbinStyles}
            onChange={(e) => setDustbinStyles(e.target.value)}
          />
        </label>
        <hr/>
        <label> Item name:
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="boxType"
            value={boxType}
            onChange={(e) => setBoxType(e.target.value)}
          />
        </label>
        <label> Item css properties:
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="boxStyles"
            value={boxStyles}
            onChange={(e) => setBoxStyles(e.target.value)}
          />
        </label>

        <button onClick={addItemHandler}>Add item to task</button>
        <button onClick={creteTaskHandler}>Create task</button>
      </form>
    </div>
  );
};


// class TaskCreator1 extends React.Component {
//   state = {
//     task: {
//       dustbins: [],
//       boxes: []
//     },
//     dustbinAccepts: '',
//     dustbinStyles: '',
//     boxType: '',
//     boxStyles: '',
//   }
//
//   submitHandler = event => {
//     event.preventDefault();
//   }
//
//   addItemHandler = (e) => {
//     e.preventDefault();
//     const dustbin = { accepts: this.state.dustbinAccepts, styles: this.state.dustbinStyles };
//     const box = { accepts: this.state.boxType, styles: this.state.boxStyles };
//     const dustbins = [...this.state.task.dustbins];
//     const boxes = [...this.state.task.boxes];
//     dustbins.push(dustbin);
//     boxes.push(box);
//     const taskItem = {
//       dustbins,
//       boxes,
//     };
//
//
//     this.setState({
//       task: {
//         ...this.state.task,
//         ...taskItem
//       },
//       dustbinAccepts: '',
//       dustbinStyles: '',
//       boxType: '',
//       boxStyles: '',
//     })
//   }
//
//   creteTaskHandler = (e) => {
//     e.preventDefault();
//   }
//
//   handleChange = (e) => {
//     const target = e.target;
//     const name = target.name;
//     const value = target.value;
//
//     this.setState({
//       ...this.state,
//       [name]: value
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Task Creator</h1>
//         <form onSubmit={this.submitHandler}>
//           <label> Target item name:
//             <input
//               style={{display: "block", width: '90%'}}
//               type="text"
//               name="dustbinAccepts"
//               value={this.state.dustbinAccepts}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label> Target item css properties:
//             <input
//               style={{display: "block", width: '90%'}}
//               type="text"
//               name="dustbinStyles"
//               value={this.state.dustbinStyles}
//               onChange={this.handleChange}
//             />
//           </label>
//           <hr/>
//           <label> Item name:
//             <input
//               style={{display: "block", width: '90%'}}
//               type="text"
//               name="boxType"
//               value={this.state.boxType}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label> Item css properties:
//             <input
//               style={{display: "block", width: '90%'}}
//               type="text"
//               name="boxStyles"
//               value={this.state.boxStyles}
//               onChange={this.handleChange}
//             />
//           </label>
//
//           <button onClick={this.addItemHandler}>Add item to task</button>
//           <button onClick={this.creteTaskHandler}>Create task</button>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default TaskCreator1;