import React from 'react';
import { useDrop } from 'react-dnd';
import { Box } from './Box';
import update from 'immutability-helper';

const styles = {
  width: '700px',
  height: 300,
  margin: '30px auto',
  display: 'flex',
  justifyContent: 'space-between',
  border: '10px solid #CB7129',
  borderRadius: '50px',
  padding: '30px',
  position: 'relative',
};

export const CreateTask = ({ hideSourceOnDrag, boxes, setBoxes }) => {
  const [, drop] = useDrop({
    accept: 'box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top);
      // console.log(item);
      return undefined;
    },
  });
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      })
    );
  };

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
            boxes={boxes}
            setBoxes={setBoxes}>
            {title}
          </Box>
        );
      })}
    </div>
  );
};
