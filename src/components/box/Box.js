import React from 'react';
import { useDrag } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  div: {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    visibility: 'hidden'
  },
  square: {
    display: 'block',
    width: '55px',
    height: '55px',
    position: 'absolute',
    right: '50px',
    top: '20px',
    backgroundColor: '#00b43e'
  },
  rectangle: {
    position: 'absolute',
    left: '20px',
    width: '55px',
    height: '90px',
    backgroundColor: '#1f3593'
  },
  triangle: {
    width: '0',
    height: '0',
    borderLeft: '40px solid transparent',
    borderRight: '40px solid transparent',
    borderBottom: '80px solid #ff151f',
    position: 'absolute',
    right: '50px',
    bottom: '10px'
  },
  oval: {
    width: '90px',
    height: '45px',
    background: '#fff100',
    borderRadius: '100px / 50px',
    border: 'none',
    position: 'absolute',
    bottom: '10px'
  },
  circle: {
    width: '55px',
    height: '55px',
    background: '#00aff1',
    borderRadius: '50%',
    border: 'none',
    position: 'absolute',
    left: '100px',
    top: '140px'
  }
});

export const Box = ({ name, type, isDropped }) => {
  const classes = useStyles();
  const [, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  if (isDropped) {
    return <div ref={drag} className={classes.div}> </div>;
  }

  return <div ref={drag} className={classes[name]}> </div>;
};
