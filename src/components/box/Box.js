import React from 'react';
import { useDrag } from 'react-dnd';
import './box.css';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',

}

export const Box = ({ name, type, isDropped }) => {
  const [, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });


  if (isDropped) {
    return (
      <div ref={drag} style={{ ...style, visibility: 'hidden' }}>
        {name}
      </div>
    );
  }

  return (
    // <div ref={drag} className={name} style={{ ...style, opacity }}>
    <div ref={drag} className={name}>
    </div>
  )
}
