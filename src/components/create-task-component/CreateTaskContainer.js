import React, { useState, useCallback } from 'react';
import { CreateTask } from './CreateTask';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { addTaskFromTaskCreator } from '../../firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
  checkBox: {
    marginLeft: '5em',
  },
  addItemButton: {
    marginRight: '5em',
  },
}));

export const CreateTaskContainer = () => {
  const classes = useStyles();
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const [boxes, setBoxes] = useState({
    a: { top: 125, left: 325, title: 'Item' },
  });
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ]);
  const allItems = boxes;

  const creteTaskHandler = (e) => {
    e.preventDefault();

    const taskItemsAll = Object.values(allItems);
    const dustbins = taskItemsAll.filter((item) => item.itemType === 'dustbin');
    const boxes = taskItemsAll.filter((item) => item.itemType === 'box');
    const task = {
      dustbins,
      boxes,
    };

    addTaskFromTaskCreator(task);
    setBoxes({
      [Math.random()]: { top: 125, left: 325, title: 'Item' },
    });
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2" align="center" style={{ color: '#67be5c' }}>
          You can create your own task
        </Typography>
      </Grid>
      <Grid item>
        <CreateTask
          hideSourceOnDrag={hideSourceOnDrag}
          boxes={boxes}
          setBoxes={setBoxes}
        />
      </Grid>
      <Grid
        item
        container
        justify="space-between"
        style={{ maxWidth: 900, margin: '0 auto' }}
        alignItems="center">
        <Grid item className={classes.checkBox}>
          <label htmlFor="hideSourceOnDrag">
            <input
              id="hideSourceOnDrag"
              type="checkbox"
              checked={hideSourceOnDrag}
              onChange={toggle}
            />
            <Typography variant="body2" style={{ display: 'inline' }}>
              Hide the source item while dragging
            </Typography>
          </label>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              setBoxes({
                ...boxes,
                [Math.random()]: { top: 125, left: 325, title: 'Item' },
              });
            }}
            className={classes.addItemButton}>
            Add Item
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            disabled={Object.keys(boxes).length <= 1}
            onClick={(e) => {
              creteTaskHandler(e);
            }}
            className={classes.addItemButton}>
            Create Task
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
