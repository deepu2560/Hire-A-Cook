import { combineReducers, createStore, applyMiddleware } from "redux";
import { LoginReducer } from "./Login/reducer";
import { SignupReducer } from "./Signup/reducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
