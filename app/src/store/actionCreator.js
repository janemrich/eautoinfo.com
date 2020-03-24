import {CHANGE_SORTBY_VALUE, CHANGE_PRICE_VALUE, CHANGE_RANGE_VALUE, CHANGE_FILTERBRAND_VALUE, INIT_CARS_VALUE, CHANGE_TODETAIL_VALUE, CHANGE_CARSTOCOMPARE_VALUE} from './actionTypes';
export const getSortByChangeAction = (value) => ({
  type: CHANGE_SORTBY_VALUE,
  value
});

export const initCarsAction = (data) => ({
  type: INIT_CARS_VALUE,
  data
})