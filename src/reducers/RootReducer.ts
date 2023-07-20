import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  authReducer,
  messageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
