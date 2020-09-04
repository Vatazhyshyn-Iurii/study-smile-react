import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Spinner from '../ui/spinner/spinner';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  gridItem: {
    margin: '3em',
  },
  main: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.green,
    zIndex: -1,
    paddingTop: '8em',
    [theme.breakpoints.down('md')]: {
      paddingTop: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '5.5em',
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    fontFamily: 'Arial',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const MainPage = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [dataTasks, setDataTasks] = useState([]);

  useEffect(() => {
    firestore
      .collection('tasks')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          dataTasks.push({
            id: doc.id,
            ...doc.data(),
          });
          setDataTasks(dataTasks);
        });
      })
      .finally(() => setLoading(false));
  }, [dataTasks]);

  return (
    <React.Fragment>
      <main className={classes.main}>
        {loading ? (
          <Spinner />
        ) : (
          <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={3}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  component={Link}
                  to="/taskcreator">
                  Task creator
                </Button>
                <Typography align="center" variant="h2">
                  Choose the task
                </Typography>
                {dataTasks.map((task, index) => (
                  <Grid
                    key={index}
                    className={classes.link}
                    item
                    component={Link}
                    to={`/task/${task.id}`}>
                    {`Task ${index + 1}`}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </main>
    </React.Fragment>
  );
};

export default MainPage;
