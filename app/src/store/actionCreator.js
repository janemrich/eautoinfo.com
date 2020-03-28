import {actionTypes} from './actionTypes';
export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_CHANGE,
  value
});

export const initCarsAction = (data) => ({
  type: actionTypes.INIT_CARS_VALUE,
  data
})