import {
  GET_TASKS,
  SET_LOADING,
  SET_TASK,
  DELETE_TASK,
  DISABLE_BUTTON,
} from "../Types";

const initialState = {
  tasks: null,
  loading: false,
  buttonDisable: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS: {
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        buttonDisable: false,
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        buttonDisable: true,
      };
    case SET_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        buttonDisable: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el._id !== action.payload),
      };
    case DISABLE_BUTTON:
      return {
        ...state,
        buttonDisable: true,
      };
    default:
      return state;
  }
};
