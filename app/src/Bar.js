import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link'
import { mergeClasses } from '@material-ui/styles';

import './Bar.css';

	const useStyles = makeStyles(theme => ({
	  root: {
      flexGrow: 1,
	  },
	  menuButton: {
      marginRight: theme.spacing(2),
	  },
  }));
  
export function Bar(props) {
	console.log(props);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className='Bar'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            className="Bar-title"
            onClick={ () => props.onClick()}
            variant="h6"
          >
            e auto info
          </Typography>
          <Link href={"http://blog.eautoinfo.com"}
          >
            <Button variant='outlined'
            >
            Blog
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
