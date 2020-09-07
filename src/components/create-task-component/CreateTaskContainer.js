import React, { useState, useCallback } from 'react';
import { CreateTask } from './CreateTask';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    a: { top: 150, left: 325, title: 'Item' },
  });
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ]);

  return (
    <Grid container direction="column">
      <Grid item>
        <CreateTask
          hideSourceOnDrag={hideSourceOnDrag}
          boxes={boxes}
          setBoxes={setBoxes}
        />
      </Grid>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item className={classes.checkBox}>
          <label htmlFor="hideSourceOnDrag">
            <input
              id="hideSourceOnDrag"
              type="checkbox"
              checked={hideSourceOnDrag}
              onChange={toggle}
            />
            <Typography variant="body1" style={{ display: 'inline' }}>
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
                [Math.random()]: { top: 350, left: 325, title: 'Item' },
              });
            }}
            className={classes.addItemButton}>
            Add Item
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
