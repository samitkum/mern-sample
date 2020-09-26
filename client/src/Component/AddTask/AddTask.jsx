import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { set_task } from "../../Redux/Action";
const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: "2em auto",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  addButton: {
    marginLeft: "0.8em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "1em",
      marginLeft: "0",
    },
  },
  inputText: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const classes = useStyles();
  const onSubmit = (data) => {
    dispatch(set_task(data));
    reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.formContainer}
    >
      <TextField
        id="task"
        name="task"
        label="Add Task"
        inputRef={register}
        variant="outlined"
        className={classes.inputText}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.addButton}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
