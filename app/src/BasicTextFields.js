import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import store from './store';
import ContainedButtons from './Button.js';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const useStyles1 = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

class BasicTextFields extends Component{
  state = {
    display: 'Not OK'
  }

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleButtonClick(){
    const action = {
      type: 'change_input_value',
      value: 'OK'
    }
    store.dispatch(action);
    
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  render() {
    return (
      <div>
        <TextFields display = {this.state.display}/>
        <ContainedButtons onClick={ () => this.handleButtonClick()}/>
      </div>
    )
  }
}

function TextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value = {store.getState().display} id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
 export default BasicTextFields