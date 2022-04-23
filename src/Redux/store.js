import { combineReducers, createStore, applyMiddleware } from "redux";
import { LoginReducer } from "./Login/reducer";
import { SignupReducer } from "./Signup/reducer";
import {cookReducer} from "./Cook_Details/reducer"
import thunk from "redux-thunk";
import { BookingReducer } from "./Booking/reducer";

export const rootReducer = combineReducers({
    login : LoginReducer,
    signup : SignupReducer,
    booking : BookingReducer,
  details:cookReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
