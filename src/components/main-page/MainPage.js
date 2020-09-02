import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { firestore } from "../../firebase/firebase.utils";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [dataTasks, setDataTasks] = useState([]);

  useEffect(() => {
    firestore.collection('tasks').get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          dataTasks.push({
            id: doc.id,
            ...doc.data(),
          })
          setDataTasks(dataTasks)
        })
      })
      .finally(() => setLoading(false));
  }, [dataTasks]);

  return (
    loading
      ? <div>Loading...</div>
      : <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h1>Please choose the task</h1>
          </Grid>
          {
            dataTasks.map((task, index) => (
              <Grid key={index} item xs={12}>
                <NavLink to={`/task/${task.id}`}>{`Task ${index + 1}`}</NavLink>
              </Grid>
            ))
          }
          <Grid item xs={12}>
            <NavLink to={'/taskcreator'}>Task creator</NavLink>
          </Grid>
        </Grid>
  );
}

export default MainPage;