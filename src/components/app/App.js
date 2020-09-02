import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import MainPage from '../main-page/MainPage';
import TaskContainer from '../task-container/TaskContainer';
import TaskCreator from "../task-creator/TaskCreator";


const App = () => {
  return (
    <div className='Content'>
      <DndProvider backend={ HTML5Backend }>
        <Switch>
          <Route path='/' exact component={ MainPage } />
          <Route
            path='/task/:id'
            render={({match}) => {
              const { id } = match.params;
              return <TaskContainer id={ id } />
            }}
          />
          <Route path='/taskcreator' component={ TaskCreator } exact/>
          <Route render={() => <div className='error404'><h1>404</h1><h2>Page not found</h2></div>}/>
        </Switch>
      </DndProvider>
    </div>
  );
}

export default withRouter(App);