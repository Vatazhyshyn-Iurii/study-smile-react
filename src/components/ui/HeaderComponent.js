import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 100,
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
}));

const HeaderComponent = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.appBar}>
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
  );
};

export default HeaderComponent;
