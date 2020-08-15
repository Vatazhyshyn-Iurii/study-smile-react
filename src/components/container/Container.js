import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import {Dustbin} from "../dustbin/Dustbin";
import {Box} from "../box/Box";
import {ItemTypes} from "../../data/ItemTypes";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '600px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'space-between',
    border: '10px solid #CB7129',
    borderRadius: '50px',
    padding: '50px',
  },
  dustbins: {
    width: '45%',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    transition: '1s all'
  },
  box: {
    width: '45%',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    transition: '1s all',
    position: 'relative'
  },
});

export const Container = () => {
  const classes = useStyles();
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.CIRCLE], lastDroppedItem: null, className: 'circle-container' },
    { accepts: [ItemTypes.OVAL], lastDroppedItem: null, className: 'oval-container' },
    { accepts: [ItemTypes.RECTANGLE], lastDroppedItem: null, className: 'rectangle-container' },
    { accepts: [ItemTypes.SQUARE], lastDroppedItem: null, className: 'square-container' },
    { accepts: [ItemTypes.TRIANGLE], lastDroppedItem: null, className: 'triangle-container' },
  ]);
  const [boxes] = useState([
    { name: 'rectangle', type: ItemTypes.RECTANGLE },
    { name: 'square', type: ItemTypes.SQUARE },
    { name: 'circle', type: ItemTypes.CIRCLE },
    { name: 'triangle', type: ItemTypes.TRIANGLE },
    { name: 'oval', type: ItemTypes.OVAL },
  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);

  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }

  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  );

  return (
    <div className={classes.container}>
      <div className={classes.dustbins}>
        {dustbins.map(({accepts, lastDroppedItem, className}, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            className={className}
            key={index}
          />
        ))}
      </div>

      <div className={classes.box}>
        {boxes.map(({ name, type }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
