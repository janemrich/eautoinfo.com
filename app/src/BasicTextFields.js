import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import store from './store';
import ContainedButtons from './Button.js';
import {connect} from 'react-redux';
import {getInputChangeAction} from './store/actionCreator';
 
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

class BasicTextFields extends Component{
  state = {
    display: 'Not OK'
  }

  render() {
    return (
      <div>
        <TextFields display = {this.props.display}/>
        <ContainedButtons onClick={ () => this.props.handleButtonClick()}/>
      </div>
    )
  }
}

function TextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value = {props.display} id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    display: state.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleButtonClick() {
      const action = getInputChangeAction('OK');
      dispatch(action);
    }
  }
}
 export default connect(mapStateToProps, mapDispatchToProps)(BasicTextFields);