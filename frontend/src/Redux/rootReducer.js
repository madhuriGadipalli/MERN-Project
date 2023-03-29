import { combineReducers } from "redux";

import { HomeScreenReducer } from "./reducers/homeScreen";


const rootReducer = combineReducers({
  products: HomeScreenReducer,
});

export default rootReducer;
