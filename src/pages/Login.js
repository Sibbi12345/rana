import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, TextField, Container,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function Login() {
  const classes = useStyles();
  return (
    <div className="login">
    <Container maxWidth="xs">
    <Card>
      <h3>Login</h3>
    <form  className={classes.root}  noValidate autoComplete="off">
   
      <TextField  id="filled-size-small" label="Email" fullWidth  onChange = {(event,newValue) => this.setState({username:newValue})}/>
      <TextField  id="filled-size-small" label="Password" fullWidth  onChange = {(event,newValue) => this.setState({password:newValue})}/>
      <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event)}>
        Login
      </Button>
    </form>
</Card>
    </Container>

    </div>
  );
}


export default Login