import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import { Dustbin } from '../dustbin/Dustbin';
import { Box } from '../box/Box';
import { makeStyles } from '@material-ui/core/styles';
import Congrats from '../modal/Congrats';

const useStyles = makeStyles({
  container: {
    width: '700px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'space-between',
    border: '10px solid #CB7129',
    borderRadius: '50px',
    padding: '30px',
    minHeight: 300,
    position: 'relative',
  },
});

export const Container = ({ dustbinsData, boxesData }) => {
  const classes = useStyles();
  const [dustbins, setDustbins] = useState(dustbinsData);
  const [boxes] = useState(boxesData);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);

  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedBoxNames, dustbins]
  );

  return (
    <div className={classes.container}>
      {dustbins.map(
        (
          { accepts, lastDroppedItem, styles, imageUrlContainer, imgUrlItem },
          index
        ) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
            styleRules={styles}
            imageUrlContainer={imageUrlContainer}
            boxesData={boxes}
          />
        )
      )}
      {boxes.map(({ type, styles, imageUrlItem }, index) => (
        <Box
          type={type}
          isDropped={isDropped(type)}
          key={index}
          styleRules={styles}
          imageUrlItem={imageUrlItem}
        />
      ))}
      {droppedBoxNames.length === dustbins.length && <Congrats />}
    </div>
  );
};
