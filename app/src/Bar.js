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


	const useStyles = makeStyles(theme => ({
	  root: {
	    flexGrow: 1,
	  },
	  menuButton: {
	    marginRight: theme.spacing(2),
	  },
	  title: {
      flexGrow: 1,
      cursor: 'pointer',
	  },
  }));
  
export function Bar(props) {
	console.log(props);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography onClick={ () => alert('hi2')} variant="h6" className={classes.title}>
            e auto info
          </Typography>
          <Link href={"http://blog.eautoinfo.com"} className={classes.link}>
            <Button variant='contained' color='default'>
            Blog
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
