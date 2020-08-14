import React from 'react';
import { useDrop } from 'react-dnd';
import './Dustbin.css';

const style = {
  // cursor: 'none',
};

export const Dustbin = ({ accept, lastDroppedItem, onDrop, className }) => {
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
    <div ref={drop} className={className} style={{ ...style}}>
      { lastDroppedItem && (<img className='inside' src={`./img/${imgName}.png`} alt={imgName}/>) }
    </div>
  )
}
