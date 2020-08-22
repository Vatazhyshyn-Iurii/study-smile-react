import {ItemTypes} from "./ItemTypes";

export const dustbinsTask2 = [
  {
    accepts: [ItemTypes.GUELDERROSE],
    lastDroppedItem: null,
    name: 'guelderrose',
    styles: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100px',
      height: '100px',
      backgroundSize: 'contain',
    }
  },
  {
    accepts: [ItemTypes.CARROT],
    lastDroppedItem: null,
    name: 'carrot',
    styles: {
      width: '100px',
      height: '100px',
      backgroundSize: 'contain',
    }
  },
  {
    accepts: [ItemTypes.ROCKET],
    lastDroppedItem: null,
    name: 'rocket',
    styles: {
      width: '100px',
      height: '100px',
      backgroundSize: 'contain',
    }
  },
  {
    accepts: [ItemTypes.SUNFLOWER],
    lastDroppedItem: null,
    name: 'sunflower',
    styles: {
      width: '100px',
      height: '100px',
      backgroundSize: 'contain',
    }
  },
  {
    accepts: [ItemTypes.HAT],
    lastDroppedItem: null,
    name: 'hat',
    styles: {
      position: 'absolute',
      left: '280px',
      width: '90px',
      height: '90px',
      backgroundSize: 'contain',
    }
  },
  {
    accepts: [ItemTypes.PYRAMID],
    lastDroppedItem: null,
    name: 'pyramid',
    styles: {
      position: 'absolute',
      left: '280px',
      top: '170px',
      width: '100px',
      height: '100px',
      backgroundSize: 'contain',
    }
  },
];

export const boxesTask2 = [
  {
    name: 'carrot',
    type: ItemTypes.CARROT,
    styles: {
      position: 'absolute',
      top: '100px',
      left: '100px',
      width: '100px',
      height: '100px',
      background: 'url(../img/carrot.png) no-repeat center',
      backgroundSize: 'contain',
    }
  },
  {
    name: 'rocket',
    type: ItemTypes.ROCKET,
    styles: {
      position: 'absolute',
      width: '100px',
      height: '100px',
      background: 'url(../img/rocket.png) no-repeat center',
      backgroundSize: 'contain',
    }
  },
  {
    name: 'hat',
    type: ItemTypes.HAT,
    styles: {
      position: 'absolute',
      left: '220px',
      width: '90px',
      height: '90px',
      background: 'url(../img/hat.png) no-repeat center',
      backgroundSize: 'contain',
    }
  },
  {
    name: 'sunflower',
    type: ItemTypes.SUNFLOWER,
    styles: {
      position: 'absolute',
      top: '100px',
      width: '100px',
      height: '100px',
      background: 'url(../img/sunflower.png) no-repeat center',
      backgroundSize: 'contain',
    }
  },
  {
    name: 'pyramid',
    type: ItemTypes.PYRAMID,
    styles: {
      position: 'absolute',
      left: '220px',
      top: '100px',
      width: '100px',
      height: '100px',
      background: 'url(../img/pyramid.png) no-repeat center',
      backgroundSize: 'contain',
    }
  },
  {
    name: 'guelderrose',
    type: ItemTypes.GUELDERROSE,
    styles: {
      position: 'absolute',
      left: '100px',
      width: '100px',
      height: '100px',
      background: 'url(../img/guelderrose.png) no-repeat center',
      backgroundSize: 'contain',
    }
  },
];
