import { GET_TASKS, SET_LOADING, SET_TASK, DELETE_TASK } from "./Types";

const initialState = {
  tasks: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS: {
      return { ...state, tasks: action.payload, loading: false };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el._id !== action.payload),
      };
    default:
      return state;
  }
};
