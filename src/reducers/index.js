import changeTheNumberBy1 from "./changethenumby1";
import changeTheNumberBy10 from "./changethenumby10";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumberBy1,
  changeTheNumberBy10,
});

export default rootReducer;
