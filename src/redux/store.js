import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";

import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk, loggerMiddleware)
);
export default store;
