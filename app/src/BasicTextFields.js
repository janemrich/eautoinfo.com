import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import store from './store';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
class BasicTextFields extends Component{

  // state = {
  //   initial:"123"
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = store.getState();
  // }
  render() {
    return (
      <TextFields/>//store.getState().
    )
  }
}
function TextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value = {store.getState().sortby} id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
 export default BasicTextFields