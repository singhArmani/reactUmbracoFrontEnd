//@flow
import * as React from 'react';

import * as LocalStorge from '../../services/LocalStorage';
import SignInForm from '../../components/signInForm/index';
import AuthApi from '../../api/authApi';

type State = {
  isSigningIn: boolean,
  isSignError: boolean
};
export default class LoginPage extends React.PureComponent<void, State> {
  state = {
    isSigningIn: false,
    isSignError: false
  };

  handleSignIn = async (email: string, password: string) => {
    const response = await AuthApi.signIn(email, password);
    LocalStorge.saveToken(response.data.access_token); // saving to local storage
  };
  render() {
    return <SignInForm signIn={this.handleSignIn} />;
  }
}
