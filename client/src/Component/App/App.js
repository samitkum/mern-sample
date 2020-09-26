import React from "react";
import NavBar from "../Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainContent from "../MainContent";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
