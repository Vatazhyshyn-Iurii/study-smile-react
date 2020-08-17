import {ItemTypes} from "./ItemTypes";

export const dustbinsTask1 = [
  { accepts: [ItemTypes.CIRCLE], lastDroppedItem: null, className: 'circle-container' },
  { accepts: [ItemTypes.OVAL], lastDroppedItem: null, className: 'oval-container' },
  { accepts: [ItemTypes.RECTANGLE], lastDroppedItem: null, className: 'rectangle-container' },
  { accepts: [ItemTypes.SQUARE], lastDroppedItem: null, className: 'square-container' },
  { accepts: [ItemTypes.TRIANGLE], lastDroppedItem: null, className: 'triangle-container' },
];
export const boxesTask1 = [
  { name: 'rectangle', type: ItemTypes.RECTANGLE },
  { name: 'square', type: ItemTypes.SQUARE },
  { name: 'circle', type: ItemTypes.CIRCLE },
  { name: 'triangle', type: ItemTypes.TRIANGLE },
  { name: 'oval', type: ItemTypes.OVAL },
];