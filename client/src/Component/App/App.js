import React from "react";
import NavBar from "../Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainContent from "../MainContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100vh",
    overflowY: "hidden",
    boxSizing: "border-box",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <CssBaseline />
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
