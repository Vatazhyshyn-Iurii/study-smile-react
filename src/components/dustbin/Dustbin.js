import React from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  squareContainer: {
    position: 'relative',
    width: '70px',
    height: '70px',
    background: 'url(\'./img/square-container.png\') no-repeat center',
    backgroundSize: 'cover',
    right: '-70px',
  },
  rectangleContainer: {
    position: 'relative',
    width: '70px',
    height: '100px',
    background: 'url(\'./img/rectangle-container.png\') no-repeat center',
    right: '-50px',
    backgroundSize: 'cover',
    marginTop: '50px',
  },
  triangleContainer: {
    position: 'relative',
    width: '110px',
    height: '90px',
    background: 'url(\'./img/triange-container.png\') no-repeat center',
    right: '-150px',
    backgroundSize: 'cover',
    marginTop: '-50px',
  },
  circleContainer: {
    width: '70px',
    height: '70px',
    background: 'url(\'./img/circle-container.png\') no-repeat center',
    right: '-150px',
    backgroundSize: 'cover',
    marginTop: '50px',
  },
  ovalContainer: {
    position: 'relative',
    width: '100px',
    height: '50px',
    background: 'url(\'./img/oval-container.png\') no-repeat center',
    backgroundSize: 'cover',
  },
  inside: {
    width: '100%',
    height: '100%'
  },
});

export const Dustbin = ({ accept, lastDroppedItem, onDrop, className }) => {
  const classes = useStyles();
  const [, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const imgName = className.split('-').shift();
  const clsName = className.split('-').shift() + 'Container';

  return (
    <div ref={drop} className={classes[clsName]}>
      { lastDroppedItem && (<img className={classes.inside} src={`./img/${imgName}.png`} alt={imgName}/>) }
    </div>
  );
};
