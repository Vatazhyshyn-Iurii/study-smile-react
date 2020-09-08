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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import { storage } from '../../firebase/firebase.utils';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
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

export const CreateBox = ({
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
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('dustbin');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const addItemHandler = (e) => {
    e.preventDefault();

    const dustbin = {
      accepts: title,
      imageUrlContainer: imageUrl,
      title,
      left,
      top,
      itemType: type,
      styles: {
        position: 'absolute',
        width,
        height,
        left,
        top,
      },
    };

    const box = {
      type: title,
      imageUrlItem: imageUrl,
      title,
      left,
      top,
      itemType: type,
      styles: {
        position: 'absolute',
        width,
        height,
        left,
        top,
      },
    };

    if (type === 'dustbin') {
      setBoxes({
        ...boxes,
        [id]: { ...dustbin },
      });
    }

    if (type === 'box') {
      setBoxes({
        ...boxes,
        [id]: { ...box },
      });
    }
  };

  const handleChooseImageFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadImage = () => {
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageUrl(url);
          });
      }
    );
    setImage(false);
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
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel htmlFor="demo-dialog-native">Type</InputLabel>
              <Select
                native
                value={type}
                onChange={(e) => setType(e.target.value)}
                input={<Input />}>
                <option value="dustbin">Dustbin</option>
                <option value="box">Box</option>
              </Select>
            </FormControl>
            <TextField
              label="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <TextField
              label="Width"
              value={width}
              onChange={(e) => setWidth(e.target.value.replace(/\D/gi, ''))}
              fullWidth
            />
            <TextField
              label="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value.replace(/\D/gi, ''))}
              fullWidth
            />
            <Grid container>
              <progress
                style={{ width: '100%', height: 20, margin: '15px auto' }}
                value={uploadProgress}
                max="100"
              />
            </Grid>
            <Grid item container justify="space-between">
              <TextField type="file" onChange={handleChooseImageFile} />
              <Button
                onClick={handleUploadImage}
                disabled={!image}
                variant="outlined"
                color="primary"
                size="small">
                Upload image
              </Button>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              setOpen(false);
              e.preventDefault();
            }}
            color="secondary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              setOpen(false);
              addItemHandler(e);
            }}
            disabled={
              title.length === 0 ||
              width.length === 0 ||
              height.length === 0 ||
              !imageUrl
            }
            color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};