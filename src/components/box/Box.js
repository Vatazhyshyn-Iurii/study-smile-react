import React from 'react';
import { useDrag } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';

export const Box = ({ type, isDropped, styleRules, imageUrlItem }) => {
  const name = type;
  const useStyles = makeStyles({
    div: {
      border: '1px solid black',
      width: 100,
      height: 100,
    },
    inside: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '100%',
      height: '100%',
      margin: '0 auto',
    },
    [name]: styleRules,
  });

  const classes = useStyles();
  const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  return (
    <div
      style={{
        visibility: isDropped ? 'hidden' : 'visible',
        opacity: opacity,
        cursor: 'move',
      }}
      ref={drag}
      className={isDropped ? classes.div : classes[name]}>
      {!isDropped && (
        <img className={classes.inside} src={imageUrlItem} alt={name} />
      )}
    </div>
  );
};
