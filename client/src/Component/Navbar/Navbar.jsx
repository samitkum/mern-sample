import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {},
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="primary" className={classes.header}>
      <Toolbar>
        <Typography variant="h6">Todo</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
