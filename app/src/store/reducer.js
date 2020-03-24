import {CHANGE_SORTBY_VALUE, CHANGE_PRICE_VALUE, CHANGE_RANGE_VALUE, CHANGE_FILTERBRAND_VALUE, INIT_CARS_VALUE, CHANGE_TODETAIL_VALUE, CHANGE_CARSTOCOMPARE_VALUE} from './actionTypes';
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
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.display = action.value;
    return newState;
  }
  if (action.type === INIT_CARS_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.cars = action.data;
    return newState;
  }
  console.log(state, action);
  return state;
}