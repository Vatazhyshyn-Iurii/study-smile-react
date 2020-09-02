import React, {useState} from 'react';
import * as R from 'ramda'
import { addTaskFromTaskCreator } from '../../firebase/firebase.utils';


const TaskCreator = () => {
  const [task, setTask] = useState({ dustbins: [], boxes: [] });
  const [dustbinAccepts, setDustbinAccepts] = useState('');
  const [imgUrlContainer, setImgUrlContainer] = useState('');
  const [imgUrlItem, setImgUrlItem] = useState('');
  const [dustbinStyles, setDustbinStyles] = useState('');
  const [boxStyles, setBoxStyles] = useState('');

  const addItemHandler = (e) => {
    e.preventDefault();
    const dustbinStylesArray = dustbinStyles.split(',');
    const dustbinStylesObject = dustbinStylesArray.map(e => {
        return e.split(':')
    });
    const boxStylesArray = dustbinStyles.split(',');
    const boxStylesObject = boxStylesArray.map(e => {
      return e.split(':')
    });

    const dustbin = {
      accepts: dustbinAccepts,
      imgUrlContainer: imgUrlContainer,
      imgUrlItem: imgUrlItem,
      styles: R.fromPairs(dustbinStylesObject)
    };
    const box = { type: dustbinAccepts, styles: R.fromPairs(boxStylesObject) };
    const dustbins = [...task.dustbins];
    const boxes = [...task.boxes];
    dustbins.push(dustbin);
    boxes.push(box);
    const taskItem = {
      dustbins,
      boxes,
    };
    setTask(taskItem);
    setDustbinAccepts('');
    setImgUrlContainer('');
    setImgUrlItem('');
    setDustbinStyles('');
    setBoxStyles('');
  };
  const creteTaskHandler = (e) => {
    e.preventDefault();
    addTaskFromTaskCreator(task);
    setTask({ dustbins: [], boxes: [] });
  };

  return (
    <div>
      <h1>Task Creator</h1>
      <form>
        <label> Target item name:
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="dustbinAccepts"
            value={dustbinAccepts}
            onChange={(e) => setDustbinAccepts(e.target.value)}
          />
        </label>
        <label> Target image-container url:
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="imgUrlContainer"
            value={imgUrlContainer}
            onChange={(e) => setImgUrlContainer(e.target.value)}
          />
        </label>
        <label> Target item image url:
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="imgUrlItem"
            value={imgUrlItem}
            onChange={(e) => setImgUrlItem(e.target.value)}
          />
        </label>
        <label> Target item css properties (like: position: relative, width: 70px, height: 70px, background: #ff4100):
          <input
            style={{display: "block", width: '90%'}}
            type="text"
            name="dustbinStyles"
            value={dustbinStyles}
            onChange={(e) => setDustbinStyles(e.target.value)}
          />
        </label>
        <label> Item css properties (like: position: relative, width: 70px, height: 70px, background: #ff4100):
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

export default TaskCreator;