import {
  GET_TASKS,
  SET_LOADING,
  SET_TASK,
  DELETE_TASK,
  DISABLE_BUTTON,
} from "../Types";
import axios from "axios";
export const get_tasks = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get("api/tasks")
    .then((res) => dispatch({ type: GET_TASKS, payload: res.data }));
};

export const set_task = (task) => (dispatch) => {
  dispatch({ type: DISABLE_BUTTON });
  axios.post("api/tasks", task).then((res) => {
    return dispatch({ type: SET_TASK, payload: res.data.task });
  });
};

export const delete_task = (id) => (dispatch) => {
  axios
    .delete(`api/tasks/${id}`)
    .then(() => dispatch({ type: DELETE_TASK, payload: id }));
};
