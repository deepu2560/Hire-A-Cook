import axios from "axios";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const LoginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const LoginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const LoginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const StoreUser = (payload) => {
  return {
    type: FETCH_USER_DETAILS,
    payload,
  };
};

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

const FetchUserDetails = (token) => (dispatch) => {
  dispatch(LoginLoading());
  axios
    .get(`https://hire-a-cook.herokuapp.com/auth/user`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch(StoreUser(res.data.user));
    })
    .catch((error) => {
      dispatch(LoginFailure());
    });
};

export const LoginDispatch = (userLoginDetails) => (dispatch) => {
  // console.log("here");
  dispatch(LoginLoading());
  axios
    .post(`https://hire-a-cook.herokuapp.com/auth/login`, {
      ...userLoginDetails,
    })
    .then((res) => {
      console.log(res);
      dispatch(LoginSuccess(res.data.token));
      dispatch(FetchUserDetails(res.data.token));
    })
    .catch((error) => {
      dispatch(LoginFailure());
    });
};
