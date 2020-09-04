import React, { useState } from 'react';
import * as R from 'ramda';
import { addTaskFromTaskCreator } from '../../firebase/firebase.utils';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'absolute',
  },
  main: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    padding: '2em',
    zIndex: -1,
    paddingTop: '8em',
    [theme.breakpoints.down('md')]: {
      paddingTop: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '5.5em',
    },
  },
  buttonGroup: {
    paddingTop: '1.5em',
  },
  text: {
    color: '#1c813c',
  },
}));

const TaskCreator = () => {
  const classes = useStyles();

  const [task, setTask] = useState({ dustbins: [], boxes: [] });
  const [dustbinAccepts, setDustbinAccepts] = useState('');
  const [imgUrlContainer, setImgUrlContainer] = useState('');
  const [imgUrlItem, setImgUrlItem] = useState('');
  const [dustbinStyles, setDustbinStyles] = useState('');
  const [boxStyles, setBoxStyles] = useState('');

  const addItemHandler = (e) => {
    e.preventDefault();
    const dustbinStylesArray = dustbinStyles.split(',');
    const dustbinStylesObject = dustbinStylesArray.map((e) => {
      return e.split(':');
    });
    const boxStylesArray = dustbinStyles.split(',');
    const boxStylesObject = boxStylesArray.map((e) => {
      return e.split(':');
    });

    const dustbin = {
      accepts: dustbinAccepts,
      imgUrlContainer: imgUrlContainer,
      imgUrlItem: imgUrlItem,
      styles: R.fromPairs(dustbinStylesObject),
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

  const inputs = [
    {
      labelTitle: 'Target item name:',
      name: 'dustbinAccepts',
      value: dustbinAccepts,
      set: setDustbinAccepts,
    },
    {
      labelTitle: 'Target image-container url:',
      name: 'imgUrlContainer',
      value: imgUrlContainer,
      set: setImgUrlContainer,
    },
    {
      labelTitle: 'Target item image url:',
      name: 'imgUrlItem',
      value: imgUrlItem,
      set: setImgUrlItem,
    },
    {
      labelTitle:
        'Target item css properties (like: position: relative, width: 70px, eight: 70px, background: #ff4100):',
      name: 'dustbinStyles',
      value: dustbinStyles,
      set: setDustbinStyles,
    },
    {
      labelTitle:
        'Item css properties (like: position: relative, width: 70px, height: 70px, background: #ff4100):',
      name: 'boxStyles',
      value: boxStyles,
      set: setBoxStyles,
    },
  ];

  return (
    <div className={classes.main}>
      <Typography align="center" variant="h2" className={classes.text}>
        Create your task!
      </Typography>
      <form>
        {inputs.map((input, index) => (
          <TextField
            key={index}
            error={false}
            // helperText="Please fill this field"
            label={input.labelTitle}
            value={input.value}
            name={input.name}
            onChange={(e) => input.set(e.target.value)}
            fullWidth
          />
        ))}
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.buttonGroup}>
          <Grid item>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              variant="contained">
              <Button
                onClick={addItemHandler}
                disabled={
                  dustbinAccepts.length === 0 ||
                  imgUrlContainer.length === 0 ||
                  imgUrlItem.length === 0 ||
                  dustbinStyles.length === 0 ||
                  boxStyles.length === 0
                }>
                Add item to task
              </Button>
              <Button
                onClick={creteTaskHandler}
                disabled={task.dustbins.length === 0}>
                Create task
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default TaskCreator;
