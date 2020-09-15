import { combineReducers } from "redux";

import filtersReducer from "./filters";
import wallpapersReducer from "./wallpapers";

const rootReducer = combineReducers({
  filters: filtersReducer,
  wallpapers: wallpapersReducer,
});

export default rootReducer;
