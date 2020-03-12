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
  console.log(state, action);
  return state;
}