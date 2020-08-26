import React, {useEffect, useState} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Container} from "../container/Container";
import {DndProvider} from "react-dnd";
import MainPage from "../main-page/MainPage";
import {firestore,} from "../../firebase/firebase.utils";


function App() {
  const [dataTasks, setDataTasks] = useState([]);
  useEffect(() => {
    firestore.collection("tasks").get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          setDataTasks(dataTasks => [...dataTasks, doc.data()])
        })
      });
  }, []);

  return ( dataTasks.length < 2 ? <div>Loading...</div> :
    <div className='Content'>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route path='/' component={MainPage} exact/>
          <Route
            path='/task/:id'
            render={({match}) => {
              const {id} = match.params;
              return <Container
                dustbinsData={dataTasks[id - 1].dustbins}
                boxesData={dataTasks[id - 1].boxes}/>
            }}
          />
          <Route render={() => <div className='error404'><h1>404</h1><h2>Page not found</h2></div>}/>
        </Switch>
      </DndProvider>
    </div>
  )
}

export default withRouter(App);