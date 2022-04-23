import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_USER_DETAILS} from "./action";

const initState = {
    loading : false,
    isAuthenticated : false,
    token : "",
    error : false,
    user: {}
}


export const LoginReducer = (store = initState, {type, payload}) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...store,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...store,
                loading: false,
                isAuthenticated: true,
                token: payload,
                error : false
            }
        case LOGIN_FAILURE:
            return{
                ...store,
                loading: false,
                error: true
            }
        case FETCH_USER_DETAILS:
            return {
                ...store,
                loading : false,
                isAuthenticated : true,
                user : {...payload}
            }
        default:
            return store;
    }
}