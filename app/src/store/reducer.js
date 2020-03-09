const defaultState = {
  initialValue: '123',
  cars: [],
	carsToCompare: [],
	toDetail: null,
	price: "",
	range: "",
	sortby: "price",
	filter_brands: [],
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sortby = action.value;
    return newState;
  }
  console.log(state, action);
  return state;
}