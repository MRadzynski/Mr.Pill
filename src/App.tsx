import React from 'react';

import SignIn from './components/signIn/signIn.component';
import SignUp from './components/signUp/signUp.component';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
    <GlobalStyle/>
    {/* <SignIn/> */}
    <SignUp/>
    </>
  );
}

export default App;
