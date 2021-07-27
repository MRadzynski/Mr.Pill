import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthProvider from './contexts/AuthContext';

import SignIn from './pages/signIn/signIn.component';
import SignUp from './pages/signUp/signUp.component';
import PasswordReset from './pages/passwordReset/passwordReset.component';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/reset-password">
              <PasswordReset />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
