import React, { useState } from "react";
import qs from "qs";

const getQueryParams = () => {
  return qs.parse(window.location.search.substr(1)); //substr(1) omits the '?' of query string
};

const setQueryString = (params) => {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${params ? "?"+qs.stringify(params):""}`;
  window.history.pushState({ path: newurl }, "", newurl);
};

const updateQueryString = (newParams) => {
  let params = getQueryParams();
  setQueryString({...params, ...newParams});
};

export function useQueryState(initialState) {

  const [state, setState] = useState({...initialState, ...getQueryParams()});

  const setQueryState = (stateUpdate) => {
    setState(currentState => {return {...currentState, ...stateUpdate};});
    updateQueryString(state);
  };

  return [state, setQueryState];
}

export function withQueryState(Component, initState) {
  return function WrappedQueryStateComponent(props) {
    const [queryState, setQueryState] = useQueryState(initState);
    return <Component {...props} queryState={queryState} setQueryState={setQueryState}/>;
  };
}

