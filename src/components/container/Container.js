import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import {Dustbin} from "../dustbin/Dustbin";
import {Box} from "../box/Box";
import { makeStyles } from '@material-ui/core/styles';
import Congrats from "../modal/Congrats";

const useStyles = makeStyles({
  container: {
    width: '700px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'space-between',
    border: '10px solid #CB7129',
    borderRadius: '50px',
    padding: '30px',
  },
  dustbins: {
    width: '45%',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    transition: '1s all',
    position: 'relative'
  },
  box: {
    width: '45%',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    transition: '1s all',
    position: 'relative'
  },
});

export const Container = ({ dustbinsData, boxesData}) => {
  const classes = useStyles();
  const [dustbins, setDustbins] = useState(dustbinsData);
  const [boxes] = useState(boxesData);
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
        {dustbins.map(({ accepts, lastDroppedItem, styles, imgUrlContainer, imgUrlItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
            styleRules={styles}
            imgUrlContainer={imgUrlContainer}
            imgUrlItem={imgUrlItem}
          />
        ))}
      </div>

      <div className={classes.box}>
        {boxes.map(({ type, styles }, index) => (
          <Box
            type={type}
            isDropped={isDropped(type)}
            key={index}
            styleRules={styles}
          />
        ))}
      </div>
      { droppedBoxNames.length === dustbins.length && <Congrats/> }
    </div>
  );
};
