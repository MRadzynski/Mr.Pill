import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './pages/signIn/signIn.component';
import SignUp from './pages/signUp/signUp.component';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
