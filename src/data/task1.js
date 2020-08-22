import {ItemTypes} from "./ItemTypes";

export const dustbinsTask1 = [
  {
    accepts: [ItemTypes.CIRCLE],
    lastDroppedItem: null,
    name: 'circle',
    styles: {
      width: '70px',
      height: '70px',
      background: 'url(../img/circle-container.png) no-repeat center',
      right: '-150px',
      backgroundSize: 'cover',
      marginTop: '50px',
    }
  },
  {
    accepts: [ItemTypes.OVAL],
    lastDroppedItem: null,
    name: 'oval',
    styles: {
      position: 'relative',
      width: '100px',
      height: '50px',
      background: 'url(../img/oval-container.png) no-repeat center',
      backgroundSize: 'cover',
    }
  },
  {
    accepts: [ItemTypes.RECTANGLE],
    lastDroppedItem: null,
    name: 'rectangle',
    styles: {
      position: 'relative',
      width: '70px',
      height: '100px',
      background: 'url(../img/rectangle-container.png) no-repeat center',
      right: '-50px',
      backgroundSize: 'cover',
      marginTop: '50px',
    }
  },
  {
    accepts: [ItemTypes.SQUARE],
    lastDroppedItem: null,
    name: 'square',
    styles: {
      position: 'relative',
      width: '70px',
      height: '70px',
      background: 'url(../img/square-container.png) no-repeat center',
      backgroundSize: 'cover',
      right: '-70px',
    }
  },
  {
    accepts: [ItemTypes.TRIANGLE],
    lastDroppedItem: null,
    name: 'triangle',
    styles: {
      position: 'relative',
      width: '110px',
      height: '90px',
      background: 'url(../img/triangle-container.png) no-repeat center',
      right: '-150px',
      backgroundSize: 'cover',
      marginTop: '-50px',
    }
  },
];

export const boxesTask1 = [
  {
    name: 'rectangle',
    type: ItemTypes.RECTANGLE,
    styles: {
      position: 'absolute',
      left: '20px',
      width: '55px',
      height: '90px',
      backgroundColor: '#1f3593'
    }
  },
  {
    name: 'square',
    type: ItemTypes.SQUARE,
    styles: {
      display: 'block',
      width: '55px',
      height: '55px',
      position: 'absolute',
      right: '50px',
      top: '20px',
      backgroundColor: '#00b43e'
    }
  },
  {
    name: 'circle',
    type: ItemTypes.CIRCLE,
    styles: {
      width: '55px',
      height: '55px',
      background: '#00aff1',
      borderRadius: '50%',
      border: 'none',
      position: 'absolute',
      left: '100px',
      top: '140px',
    }
  },
  {
    name: 'triangle',
    type: ItemTypes.TRIANGLE,
    styles: {
      width: '0',
      height: '0',
      borderLeft: '40px solid transparent',
      borderRight: '40px solid transparent',
      borderBottom: '80px solid #ff151f',
      position: 'absolute',
      right: '50px',
      bottom: '10px'
    }
  },
  {
    name: 'oval',
    type: ItemTypes.OVAL,
    styles: {
      width: '90px',
      height: '45px',
      background: '#fff100',
      borderRadius: '100px / 50px',
      border: 'none',
      position: 'absolute',
      bottom: '10px'
    }
  },
];