import axios from "axios";

export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SignupLoading = () => {
    return {
        type : SIGNUP_LOADING
    }
}

export const SignupSuccess = () => {
    return {
        type : SIGNUP_SUCCESS
    }
}

export const SignupFailure = () => {
    return {
        type : SIGNUP_FAILURE
    }
}


export const SignupDispatch = (userSignupDetails) => (dispatch) => {
    console.log(userSignupDetails);
    dispatch(SignupLoading());
    axios.post(`http://appartmentbackend.herokuapp.com/signup`, {
        ...userSignupDetails
    }).then((res) => {
        console.log(res);
        dispatch(SignupSuccess(res.data));
    }).catch((error) => {dispatch(SignupFailure())})

}
