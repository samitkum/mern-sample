import React from "react";
import Container from "@material-ui/core/Container";
import AddTask from "../AddTask";
import List from "../List";

const MainContent = () => {
  return (
    <Container maxWidth="sm">
      <AddTask />
      <List />
    </Container>
  );
};

export default MainContent;
