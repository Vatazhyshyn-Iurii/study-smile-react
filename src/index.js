import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Container} from "./components/container/Container";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Container />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
