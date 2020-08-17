import React from "react";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";

const MainPage = () => (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <h1>Please choose the task</h1>
      </Grid>
      <Grid item xs={12}>
        <NavLink to="/task/1">Task 1</NavLink>
      </Grid>
      <Grid item xs={12}>
        <NavLink to="/task/2">Task 2</NavLink>
      </Grid>
    </Grid>
);

export default MainPage;