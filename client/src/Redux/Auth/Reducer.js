import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
} from "../Types";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  token: window.localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      window.localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      window.localStorage.setItem("token", null);
      return {
        user: null,
        isAuthenticated: false,
        loading: false,
        token: null,
      };
    case LOGIN_FAIL:
      return {
        user: null,
        isAuthenticated: false,
        loading: false,
        token: null,
      };
    default:
      return state;
  }
};
