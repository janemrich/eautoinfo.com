import {actionTypes} from './actionTypes';
export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_CHANGE,
  value
});

export const getSortbyChangeAction = (value) => ({
  type: actionTypes.CHANGE_SORTBY_VALUE,
  value
});

export const getPriceChangeAction = (value) => ({
  type: actionTypes.CHANGE_PRICE_VALUE,
  value
});

export const initCarsAction = (data) => ({
  type: actionTypes.INIT_CARS_VALUE,
  data
})
export const getCarsList = () => {
  return (dispatch) => {
    fetch('https://api.eautoinfo.com/cars')
        .then(res => res.json())
        .then((data) => {
					const action = initCarsAction(data);
					dispatch(action);
		}).catch(console.log);
  }
}