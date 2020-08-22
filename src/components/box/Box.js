import React from 'react';
import { useDrag } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';

export const Box = ({ name, type, isDropped, styleRules }) => {
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
    [name]: styleRules,
  });

  const classes = useStyles();
  const [{opacity}, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });
  // console.log(isDropped)

  return <div
    style={{ opacity: opacity }}
    ref={drag}
    className={isDropped ? classes.div : classes[name]} />;
};
