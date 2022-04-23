import {combineReducers, createStore, applyMiddleware} from "redux";
import {LoginReducer} from "./Login/reducer";
import {SignupReducer} from "./Signup/reducer";
import thunk from "redux-thunk";
import { BookingReducer } from "./Booking/reducer";

export const rootReducer = combineReducers({
    login : LoginReducer,
    signup : SignupReducer,
    booking : BookingReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));