import {actionTypes} from './actionTypes';
const defaultState = {
  display: "Not OK",
  cars: [],
	carsToCompare: [],
	toDetail: null,
	price: "",
	range: "",
	sortby: "",
	filter_brands: [],
}

export default (state = defaultState, action) => {
  if (action.type === actionTypes.CHANGE_INPUT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.display = action.value;
    return newState;
  }
  if (action.type === actionTypes.CHANGE_SORTBY_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sortby = action.value;
    return newState;
  }
  if (action.type === actionTypes.INIT_CARS_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.cars = action.data;
    return newState;
  }
  console.log(state, action);
  return state;
}