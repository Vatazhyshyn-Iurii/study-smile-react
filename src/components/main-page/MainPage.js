import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: theme.palette.common.orange,
  },
  logoContainer: {
    padding: 0,
    margin: '10px auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '4.2em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '3.2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2.45em',
    },
  },
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
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    height: '100vh',
    position: 'relative',
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

  return loading ? (
    <div>Loading...</div>
  ) : (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}>
            <img
              src="https://study-smile.com/wp-content/themes/study/images/logo.png"
              alt="stydy smile logo"
              className={classes.logo}
            />
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <main className={classes.main}>
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
      </main>
    </React.Fragment>
  );
};

export default MainPage;
