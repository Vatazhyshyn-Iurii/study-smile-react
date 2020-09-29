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
import Grid from '@material-ui/core/Grid';
import { storage } from '../../firebase/firebase.utils';
import { ResizableBox } from 'react-resizable';

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

const styles = {
  customBox: {
    overflow: 'visible',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'white',
    border: '1px dashed black',
  },
  customHandle: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#1153aa',
    opacity: 0.75,
    borderRadius: 4,
  },
  customHandleSe: {
    bottom: -12,
    right: -12,
    cursor: 'se-resize',
  },
};

const style = {
  position: 'absolute',
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
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
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

  const onResize = (e, { size }) => {
    setWidth(+size.width);
    setHeight(+size.height);
  };

  return (
    <>
      <div ref={drag} style={{ ...style, left, top, width, height }}>
        <ResizableBox
          onResize={(e, data) => {
            onResize(e, data);
          }}
          onClick={() => setOpen(true)}
          minConstraints={[70, 70]}
          style={{ ...styles.box, ...styles.customBox }}
          width={width}
          height={height}
          handle={
            <span
              style={{ ...styles.customHandle, ...styles.customHandleSe }}
            />
          }
          handleSize={[8, 8]}>
          <span className="text">{children}</span>
        </ResizableBox>
      </div>

      {open && (
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={() => setOpen(false)}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="demo-dialog-native">
                  Type of element
                </InputLabel>
                <Select
                  native
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  input={<Input />}>
                  <option value="dustbin">Container</option>
                  <option value="box">Item</option>
                </Select>
              </FormControl>
              <TextField
                label="Title must be the same for the container and item"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
              />
              <TextField
                label="Width in px"
                value={width}
                onChange={(e) =>
                  setWidth(parseInt(e.target.value.replace(/\D/gi, '')))
                }
                fullWidth
              />
              <TextField
                label="Height in px"
                value={height}
                onChange={(e) =>
                  setHeight(parseInt(e.target.value.replace(/\D/gi, '')))
                }
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
              variant="contained"
              onClick={(e) => {
                setOpen(false);
                e.preventDefault();
              }}
              color="secondary">
              Cancel
            </Button>
            <Button
              variant="contained"
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
      )}
    </>
  );
};
