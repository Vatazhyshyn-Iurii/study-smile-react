import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import {firestore} from "../../firebase/firebase.utils";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [dataTasks, setDataTasks] = useState([]);

  useEffect(() => {
    firestore.collection("tasks").get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          setDataTasks(dataTasks => [...dataTasks, doc.data()])
        })
      })
      .finally(() => setLoading(false));
  }, []);

  return ( loading ? <div>Loading...</div> :
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <h1>Please choose the task</h1>
      </Grid>
      {
        dataTasks.map((task, id) => (
          <Grid key={id} item xs={12}>
            <NavLink to={`/task/${id + 1}`}>{`Task ${id + 1}`}</NavLink>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default MainPage;