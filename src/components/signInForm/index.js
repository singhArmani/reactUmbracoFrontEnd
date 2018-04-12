//@flow
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Rx from 'rxjs';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

type State = {
  username: string,
  password: string | number
};

type Props = {
  signIn: any
};

class SignInForm extends Component<Props, State> {
  state = {
    username: '',
    password: ''
  };

  handleOnChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSignIn = () => {
    this.props.signIn(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <AppBar title="Login" />
        <TextField
          name="username"
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange={this.handleOnChange}
        />
        <br />
        <TextField
          name="password"
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={this.handleOnChange}
        />
        <br />
        <RaisedButton
          label="Submit"
          primary={true}
          style={{ margin: 15 }}
          onClick={this.handleSignIn}
        />
      </div>
    );
  }
}

SignInForm.propTypes = {};

export default SignInForm;
