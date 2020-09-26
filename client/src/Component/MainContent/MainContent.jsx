import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AddTask from "../AddTask";
import List from "../List";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#e8e8e8",
    padding: "2em",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  container: {
    height: "calc(100vh - 20%)",
    width: "80%",
    maxWidth: "650px",
    margin: "0 auto",
    padding: "1em 2em",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      height: "98vh",
      padding: 0,
      paddingBottom: "2em",
      width: "100%",
      borderRadius: 0,
    },
  },
}));
const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box component={Card} className={classes.container}>
        <AddTask />
        <List />
      </Box>
    </Box>
  );
};

export default MainContent;
