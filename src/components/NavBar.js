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
    marginRight: "5px",
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "montserrat",
    fontSize:"xx-large",
    color:"black",
  },
  shadow: {
    webkitBoxShadow: '0px 5px 5px 0px rgba(220, 220, 220, 0.25)',
      mozBoxShadow:    '0px 5px 5px 0px rgba(220, 220, 220, 0.25)',
    boxShadow:         '0px 5px 5px 0px rgba(220, 220, 220, 0.25)',
    backgroundColor:'white',borderBottom:'1px solid grey',
    fontFamily: 'montserrat',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'row nowrap',
    justifyContent: 'space-around',
  }

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.shadow} position="static">
        {/* <Toolbar> */}
          <div>
          <Typography variant="h6" className={classes.title}>
            crashdaddy
          </Typography>
          </div>
          <div style={{width:'40%'}}></div>
          <div>
          <Typography variant="h6" className={classes.title}>
            <Link to="/about" >About Me</Link>
            <span style={{fontSize:'large',verticalAlign:'middle',margin:'5px'}}> * </span>
            <Link to="/portfolio" >Portfolio</Link>
            <span style={{fontSize:'large',verticalAlign:'middle',margin:'5px'}}> * </span>
            <Link to="/resume" >Resume</Link>
          </Typography>
          </div>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}
