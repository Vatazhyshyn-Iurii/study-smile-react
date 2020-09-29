import React from 'react';
import { useDrop } from 'react-dnd';
import { CreateBox } from './CreateBox';
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
      {Object.keys(boxes).map((item) => {
        const {
          left,
          top,
          title,
          itemType = null,
          styles = null,
          imageUrlContainer = null,
          imageUrlItem = null,
        } = boxes[item];

        return (
          <CreateBox
            key={item}
            id={item}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
            boxes={boxes}
            setBoxes={setBoxes}>
            {itemType ? (
              <img
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  width: +styles.width,
                  height: +styles.height,
                }}
                src={imageUrlContainer || imageUrlItem}
                alt="title"
              />
            ) : (
              title
            )}
          </CreateBox>
        );
      })}
    </div>
  );
};
