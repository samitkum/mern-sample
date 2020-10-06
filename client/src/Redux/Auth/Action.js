import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
} from "../Types";

export const login = (user_data) => {
  const { email, password } = user_data;
  return async (dispatch) => {
    try {
      const response = await axios.post("/auth/login", user_data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};
