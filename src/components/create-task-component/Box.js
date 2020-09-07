import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  cursor: 'move',
  minHeight: 40,
  minWidth: 70,
};

export const Box = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  boxes,
  setBoxes,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('');
  // const [task, setTask] = useState({ dustbins: [], boxes: [] });
  // const [dustbinAccepts, setDustbinAccepts] = useState('');
  // const [imgUrlContainer, setImgUrlContainer] = useState('');
  // const [imgUrlItem, setImgUrlItem] = useState('');
  // const [dustbinStyles, setDustbinStyles] = useState('');
  // const [boxStyles, setBoxStyles] = useState('');

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} style={{ ...style, left, top }}>
      <div
        onClick={() => setOpen(true)}
        style={{
          width: '100%',
          minHeight: 40,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={() => setOpen(false)}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Type</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<Input />}>
                <option value="Dustbin">Dustbin</option>
                <option value="Box">Box</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
