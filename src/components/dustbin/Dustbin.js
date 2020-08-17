import React from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inside: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    height: '100%',
    margin: '0 auto',
    // background: 'none',
  },
  squareContainer: {
    position: 'relative',
    width: '70px',
    height: '70px',
    background: 'url(../img/square-container.png) no-repeat center',
    backgroundSize: 'cover',
    right: '-70px',
  },
  rectangleContainer: {
    position: 'relative',
    width: '70px',
    height: '100px',
    background: 'url(../img/rectangle-container.png) no-repeat center',
    right: '-50px',
    backgroundSize: 'cover',
    marginTop: '50px',
  },
  triangleContainer: {
    position: 'relative',
    width: '110px',
    height: '90px',
    background: 'url(../img/triangle-container.png) no-repeat center',
    right: '-150px',
    backgroundSize: 'cover',
    marginTop: '-50px',
  },
  circleContainer: {
    width: '70px',
    height: '70px',
    background: 'url(../img/circle-container.png) no-repeat center',
    right: '-150px',
    backgroundSize: 'cover',
    marginTop: '50px',
  },
  ovalContainer: {
    position: 'relative',
    width: '100px',
    height: '50px',
    background: 'url(../img/oval-container.png) no-repeat center',
    backgroundSize: 'cover',
  },
  guelderroseContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    height: '100px',
    // background: 'url(../img/guelderrose-container.png) no-repeat center',
    backgroundSize: 'contain',
  },
  carrotContainer: {
    width: '100px',
    height: '100px',
    // background: 'url(../img/carrot-container.png) no-repeat center',
    backgroundSize: 'contain',
  },
  sunflowerContainer: {
    width: '100px',
    height: '100px',
    // background: 'url(../img/sunflower-container.png) no-repeat center',
    backgroundSize: 'contain',
  },
  rocketContainer: {
    width: '100px',
    height: '100px',
    // background: 'url(../img/rocket-container.png) no-repeat center',
    backgroundSize: 'contain',
  },
  hatContainer: {
    position: 'absolute',
    left: '280px',
    width: '90px',
    height: '90px',
    // background: 'url(../img/hat-container.png) no-repeat center',
    backgroundSize: 'contain',
  },
  pyramidContainer: {
    position: 'absolute',
    left: '280px',
    top: '170px',
    width: '100px',
    height: '100px',
    // background: 'url(../img/pyramid-container.png) no-repeat center',
    backgroundSize: 'contain',
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

  return (
    <div ref={drop} className={classes[`${imgName}Container`]}>
      { lastDroppedItem
        ? <img className={classes.inside} src={`../img/${imgName}.png`} alt={imgName}/>
        : <img className={classes.inside} src={`../img/${imgName}-container.png`} alt={imgName}/>
      }
    </div>
  );
};
