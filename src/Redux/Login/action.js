import axios from "axios";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LoginLoading = () => {
    return {
        type : LOGIN_LOADING
    }
}

export const LoginSuccess = (payload) => {
    return {
        type : LOGIN_SUCCESS,
        payload
    }
}

export const LoginFailure = () => {
    return {
        type : LOGIN_FAILURE
    }
}


export const LoginDispatch = (userLoginDetails) => (dispatch) => {
    // console.log("here");
    dispatch(LoginLoading());
    axios.post(`http://appartmentbackend.herokuapp.com/login`, {
        ...userLoginDetails
    }).then((res) => {
        console.log(res);
        dispatch(LoginSuccess(res.data.token));
    }).catch((error) => {dispatch(LoginFailure)})

}
