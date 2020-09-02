import React from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';

export const Dustbin = ({ accept, lastDroppedItem, onDrop, styleRules, imgUrlContainer, imgUrlItem }) => {
  const name = accept;
  const useStyles = makeStyles({
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
  const [, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={classes[name]}>
      { lastDroppedItem
        ? <img className={classes.inside} src={imgUrlItem} alt={name}/>
        : <img className={classes.inside} src={imgUrlContainer} alt={name}/>
      }
    </div>
  );
};
