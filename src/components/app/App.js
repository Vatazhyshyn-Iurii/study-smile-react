import React from "react";
import { Route, Switch, withRouter} from "react-router-dom";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Container} from "../container/Container";
import {DndProvider} from "react-dnd";
import MainPage from "../main-page/MainPage";
import {boxesTask1, dustbinsTask1} from "../../data/task1";
import {boxesTask2, dustbinsTask2} from "../../data/task2";

const App = () => {
  return (
    <div className='Content'>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route path='/' component={MainPage} exact />
          <Route
            path='/task/:id'
            render={({match}) => {
             const {id} = match.params;
             return <Container
               itemId={id}
               dustbinsData={dustbinsTask2}
               boxesData={boxesTask2}/>
            }}
          />
          <Route render={() => <div className='error404'><h1>404</h1><h2>Page not found</h2></div>} />
        </Switch>
      </DndProvider>
    </div>
  );
}

export default withRouter(App);