import React from 'react';
import Form from "./Components/Form"
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    background: "grey",
    paddingTop: 20,
    paddingBottom: 20
  }
}))

function App() {
  const classes = useStyles();

  return <Container className={ classes.container }> <Form /></Container>
}

export default App;
