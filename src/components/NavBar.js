import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "../App.css"
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex:2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "jedi",
    fontSize:"xx-large",
  },
  shadow: {
    webkitBoxShadow: '0px 5px 5px 0px rgba(220, 220, 220, 0.25)',
      mozBoxShadow:    '0px 5px 5px 0px rgba(220, 220, 220, 0.25)',
    boxShadow:         '0px 5px 5px 0px rgba(220, 220, 220, 0.25)',
    backgroundColor:'black',borderBottom:'1px solid grey',
    fontFamily: 'jedi',
  }

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.shadow} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            crashdaddy
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/starships" >About Me</Link>
            <span style={{fontSize:'large',verticalAlign:'middle',margin:'5px'}}> * </span>
            <Link to="/vehicles" >Portfolio</Link>
            <span style={{fontSize:'large',verticalAlign:'middle',margin:'5px'}}> * </span>
            <Link to="/species" >Resume</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
