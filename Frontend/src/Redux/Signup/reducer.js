import { SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILURE} from "./action";

const initState = {
    loading : false,
    isSuccess : false,
    error : false
}


export const SignupReducer = (store = initState, {type, payload}) => {
    switch (type) {
        case SIGNUP_LOADING:
            return {
                ...store,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...store,
                loading: false,
                isSuccess: true,
                error : false
            }
        case SIGNUP_FAILURE:
            return{
                ...store,
                loading: false,
                error: true
            }
        default:
            return store;
    }
}