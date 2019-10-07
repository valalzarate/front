import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { MemoryRouter as Router } from 'react-router';
import SignUp from './SignUp';

//const SignUp1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="./SignUp" {...props} />);
const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          
        
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="C:\Users\Vale\Desktop\FrontEnd\Proyecto_FrontEnd-master\src\Home.js" 
          >
            {'Donde está el vacile'}
          </Link>
          <div className={classes.right}>

            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {'Sign In'}
            </Link >
            <Link component={SignUp}
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/SignUp/"
            >
              {'Sign Up'}
            </Link>
          </div>


        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
