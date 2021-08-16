# EXPLANATION OF REACT REDUX
## ACTION : object 

```
{
  type:"increment_by_10"
}
```

## ACTION CREATOR: function to create an action

```
export const incNumberBy10=()=>{
    return {
        type:"increment_by_10"
    }
}
```
## REDUCER: function which takes "state" and "action" as argument and return "state" after implementing logic.  

```
const initialState = 10;

const changeTheNumberBy10 = (state = initialState, action) => {
  switch (action.type) {
    case "increment_by_10":
      return state + 10;
    case "decrement_by_10":
      return state - 10;
    case "multiply_by_10":
      return state * 2;
    default:
      return state;
  }
};

export default changeTheNumberBy10;

```
## ROOT REDUCER: all reducers are combined to make root reducer
```
import changeTheNumberBy1 from "./changethenumby1";
import changeTheNumberBy10 from "./changethenumby10";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumberBy1,
  changeTheNumberBy10,
});

export default rootReducer;


```

## STORE: It brings "state","action" and "reducers" together
## Redux app have only single store
## Redux store has single root reducer function

```
import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

```
<img src="https://user-images.githubusercontent.com/56029421/129572087-ff7d586a-dc7d-4b39-a89c-ef90231c2317.jpg" width="600" height="400" />

## IMPLEMENTING REDUX

```
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decNumberBy1,
  incNumberBy1,
  incNumberBy10,
  decNumberBy10,
  mulNumberBy10,
} from "../actions/index";

function Home() {
  const num1 = useSelector((state) => state.changeTheNumberBy1);
  const num10 = useSelector((state) => state.changeTheNumberBy10);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decNumberBy1())}>-</button>
      <span>num1 = {num1} </span>
      <button onClick={() => dispatch(incNumberBy1())}>+</button>

      <br />
      <br />
      <br />

      <button onClick={() => dispatch(decNumberBy10())}>-</button>
      <span>num10 = {num10} </span>
      <button onClick={() => dispatch(incNumberBy10())}>+</button>
    </>
  );
}

export default Home;
```

