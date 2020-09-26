import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { set_task } from "../../Redux/Action";
const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: "0.5em auto",
    padding: "2em",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: "2em",
      margin: 0,
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
  const { register, handleSubmit, reset, errors, control } = useForm();
  const dispatch = useDispatch();
  const buttonDisable = useSelector((state) => state.buttonDisable);
  const classes = useStyles();
  const onSubmit = (data) => {
    dispatch(set_task(data));
    reset({
      task: "",
    });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.formContainer}
    >
      <Controller
        control={control}
        as={TextField}
        id="task"
        name="task"
        label="Add Task"
        rules={{ required: "Enter the task" }}
        variant="outlined"
        className={classes.inputText}
        error={errors?.task ? true : false}
        helperText={errors?.task?.message}
        defaultValue=""
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.addButton}
        disabled={buttonDisable}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
